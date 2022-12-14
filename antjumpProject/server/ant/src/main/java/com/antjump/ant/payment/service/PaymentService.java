package com.antjump.ant.payment.service;

import com.antjump.ant.common.exception.PaymentException;
import com.antjump.ant.common.exception.PriceNotEqualException;
import com.antjump.ant.faq.dto.FAQListDTO;
import com.antjump.ant.payment.dao.PaymentMapper;
import com.antjump.ant.payment.dto.PaymentCreateDTO;
import com.antjump.ant.payment.dto.PaymentDetailDTO;
import com.antjump.ant.payment.dto.PaymentListDTO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * <pre>
 * Class : PaymentsService
 * Comment:  연결을 열거나 닫고, 비지니스 로직 수행하거나 트랜잭션 제어
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
@Service
public class PaymentService {

    private static final Logger log = LoggerFactory.getLogger(PaymentService.class);

    private final PaymentMapper paymentMapper;

    public PaymentService(PaymentMapper paymentMapper) {
        this.paymentMapper = paymentMapper;
    }

    public Object selectPaymentsDetail(String paymentId) {
        log.info("[PaymentService] selectPaymentsDetail Start ===============");

        PaymentDetailDTO paymentDetailDTO = paymentMapper.selectPaymentsDetail(paymentId);

        log.info("[PaymentService] selectPaymentsDetail End ===============");

        return paymentDetailDTO;
    }

    public List<PaymentListDTO> selectPaymentsList() {

        log.info("[PaymentService] selectPaymentsList Start ===============");

        List<PaymentListDTO> paymentList = paymentMapper.selectPaymentsList();

        log.info("[PaymentService] selectPaymentsList End ===============");

        return paymentList;

    }
    @Transactional
    public Object createPayment(PaymentCreateDTO paymentCreateDTO) throws PaymentException {

        int orderResult = paymentMapper.createOrder(paymentCreateDTO);

        int paymentResult = paymentMapper.createPayment(paymentCreateDTO);

        int paymentHistoryResult = paymentMapper.insertPaymentHistories(paymentCreateDTO);

        int goodsPossessionsResult = paymentMapper.insertGoodsPossessions(paymentCreateDTO);

        return (paymentResult > 0 || orderResult > 0 || paymentHistoryResult > 0 || goodsPossessionsResult > 0) ? paymentCreateDTO : "결제 입력 실패";
    }
}
