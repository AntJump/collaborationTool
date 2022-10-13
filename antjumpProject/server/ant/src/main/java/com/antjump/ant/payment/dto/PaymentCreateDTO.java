package com.antjump.ant.payment.dto;

import java.sql.Timestamp;

/**
 * <pre>
 * Class : PaymentCreateDTO
 * Comment: 전송하기 위해 사용한 객체
 * History
 * ================================================================
 * DATE             AUTHOR           NOTE
 * ----------------------------------------------------------------
 * 2022-10-10       부시연           최초 생성
 * </pre>
 *
 * @author 부시연(최초 작성자)
 * @version 1(클래스 버전)
 */
public class PaymentCreateDTO {

    private String paymentKey;
    private String orderId;
    private Long amount;
    private String orderName;
    private String status;
    private String receiptUrl;

    public PaymentCreateDTO() {
    }

    public PaymentCreateDTO(String paymentKey, String orderId, Long amount, String orderName, String status, String receiptUrl) {
        this.paymentKey = paymentKey;
        this.orderId = orderId;
        this.amount = amount;
        this.orderName = orderName;
        this.status = status;
        this.receiptUrl = receiptUrl;
    }

    public String getPaymentKey() {
        return paymentKey;
    }

    public void setPaymentKey(String paymentKey) {
        this.paymentKey = paymentKey;
    }

    public String getOrderId() {
        return orderId;
    }

    public void setOrderId(String orderId) {
        this.orderId = orderId;
    }

    public Long getAmount() {
        return amount;
    }

    public void setAmount(Long amount) {
        this.amount = amount;
    }

    public String getOrderName() {
        return orderName;
    }

    public void setOrderName(String orderName) {
        this.orderName = orderName;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getReceiptUrl() {
        return receiptUrl;
    }

    public void setReceiptUrl(String receiptUrl) {
        this.receiptUrl = receiptUrl;
    }

    @Override
    public String toString() {
        return "PaymentCreateDTO{" +
                "paymentKey='" + paymentKey + '\'' +
                ", orderId='" + orderId + '\'' +
                ", amount=" + amount +
                ", orderName='" + orderName + '\'' +
                ", status='" + status + '\'' +
                ", receiptUrl='" + receiptUrl + '\'' +
                '}';
    }
}
