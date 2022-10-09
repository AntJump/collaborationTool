package com.antjump.ant.payment.controller;

import com.antjump.ant.common.ResponseDto;
import com.antjump.ant.payment.service.PaymentService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

    private final PaymentService paymentService;

    public PaymentController(PaymentService paymentService) {
        this.paymentService = paymentService;
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

}
