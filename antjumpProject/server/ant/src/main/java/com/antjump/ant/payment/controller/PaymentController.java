package com.antjump.ant.payment.controller;

import com.antjump.ant.common.ResponseDto;
import com.antjump.ant.common.exception.PaymentException;
import com.antjump.ant.common.exception.PriceNotEqualException;
import com.antjump.ant.payment.dto.PaymentCreateDTO;
import com.antjump.ant.payment.service.PaymentService;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.*;
import org.springframework.http.client.ClientHttpResponse;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.ResponseErrorHandler;
import org.springframework.web.client.RestTemplate;

import javax.annotation.PostConstruct;
import java.sql.Timestamp;
import java.util.Base64;
import java.util.HashMap;
import java.util.Map;

/**
 * <pre>
 * Class : PaymentsController
 * Comment:  뷰 -> 서비스 전달, 유효성 검사, 결과값 뷰로 반환, 로컬 파일 저장 및 변환
 * History
 * ================================================================
 * DATE             AUTHOR           NOTE
 * ----------------------------------------------------------------
 * 2022-10-03       부시연           최초 생성
 * </pre>
 *
 * @author 부시연(최초 작성자)
 * @version 1(클래스 버전)
 */
@RestController
@RequestMapping("payment")
public class PaymentController {

    private static final Logger log = LoggerFactory.getLogger(PaymentController.class);
    private final RestTemplate restTemplate = new RestTemplate();
    private final ObjectMapper objectMapper = new ObjectMapper();
    private final String SECRET_KEY = "test_sk_MGjLJoQ1aVZ1RK57wB13w6KYe2RN";

    private final PaymentService paymentService;

    public PaymentController(PaymentService paymentService) {
        this.paymentService = paymentService;
    }

    @PostConstruct
    private void init() {
        restTemplate.setErrorHandler(new ResponseErrorHandler() {
            @Override
            public boolean hasError(ClientHttpResponse response) {
                return false;
            }

            @Override
            public void handleError(ClientHttpResponse response) {
            }
        });
    }

    @GetMapping("")
    public ResponseEntity<ResponseDto> selectPaymentsList() {


        log.info("[PaymentController] selectPaymentsList start ==========");

        return ResponseEntity.ok().body(new ResponseDto(HttpStatus.OK, "조회 성공", paymentService.selectPaymentsList()));
    }


    @GetMapping("{paymentId}")
    public ResponseEntity<ResponseDto> selectPaymentsDetail(@PathVariable String paymentId) {

        return ResponseEntity.ok().body(new ResponseDto(HttpStatus.OK, "결제 상세 조회 성공", paymentService.selectPaymentsDetail(paymentId)));

    }

    @PostMapping("")
    public ResponseEntity<ResponseDto> createPayment(@ModelAttribute PaymentCreateDTO paymentCreateDTO) throws JsonProcessingException, PriceNotEqualException, PaymentException {

        log.info("[PaymentController] createPayment start ==========");

        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Basic " + Base64.getEncoder().encodeToString((SECRET_KEY + ":").getBytes()));
        headers.setContentType(MediaType.APPLICATION_JSON);

        Map<String, String> payloadMap = new HashMap<>();
        payloadMap.put("paymentKey", paymentCreateDTO.getPaymentKey());
        payloadMap.put("orderId", paymentCreateDTO.getOrderId());
        payloadMap.put("amount", String.valueOf(paymentCreateDTO.getAmount()));

        HttpEntity<String> request = new HttpEntity<>(objectMapper.writeValueAsString(payloadMap), headers);

        ResponseEntity<JsonNode> responseEntity = restTemplate.postForEntity(
                "https://api.tosspayments.com/v1/payments/confirm", request, JsonNode.class);

        JsonNode successNode = responseEntity.getBody();

        paymentCreateDTO.setOrderName(String.valueOf(successNode.get("orderName")));
        paymentCreateDTO.setStatus(String.valueOf(successNode.get("status")));
        paymentCreateDTO.setReceiptUrl(String.valueOf(successNode.get("receipt")));

        return ResponseEntity.ok().body(new ResponseDto(HttpStatus.OK, "결제 생성 성공", paymentService.createPayment(paymentCreateDTO)));
    }


}
