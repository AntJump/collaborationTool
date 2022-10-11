package com.antjump.ant.payment.dto;

import java.sql.Timestamp;

/**
 * <pre>
 * Class : PaymentDetailDTO
 * Comment: 전송하기 위해 사용한 객체
 * History
 * ================================================================
 * DATE             AUTHOR           NOTE
 * ----------------------------------------------------------------
 * 2022-10-06       부시연           최초 생성
 * </pre>
 *
 * @author 부시연(최초 작성자)
 * @version 1(클래스 버전)
 */
public class PaymentDetailDTO {

    private int paymentId;
    private Timestamp paymentTime;
    private String paymentKey;
    private String paymentStatus;
    private int orderId;
    private int orderAmount;
    private int memberId;
    private String memberName;
    private String memberEmail;
    private String memberPhone;
    private String refundReason;

    public PaymentDetailDTO() {
    }

    public PaymentDetailDTO(int paymentId, Timestamp paymentTime, String paymentKey, String paymentStatus, int orderId, int orderAmount, int memberId, String memberName, String memberEmail, String memberPhone, String refundReason) {
        this.paymentId = paymentId;
        this.paymentTime = paymentTime;
        this.paymentKey = paymentKey;
        this.paymentStatus = paymentStatus;
        this.orderId = orderId;
        this.orderAmount = orderAmount;
        this.memberId = memberId;
        this.memberName = memberName;
        this.memberEmail = memberEmail;
        this.memberPhone = memberPhone;
        this.refundReason = refundReason;
    }

    public int getPaymentId() {
        return paymentId;
    }

    public void setPaymentId(int paymentId) {
        this.paymentId = paymentId;
    }

    public Timestamp getPaymentTime() {
        return paymentTime;
    }

    public void setPaymentTime(Timestamp paymentTime) {
        this.paymentTime = paymentTime;
    }

    public String getPaymentKey() {
        return paymentKey;
    }

    public void setPaymentKey(String paymentKey) {
        this.paymentKey = paymentKey;
    }

    public String getPaymentStatus() {
        return paymentStatus;
    }

    public void setPaymentStatus(String paymentStatus) {
        this.paymentStatus = paymentStatus;
    }

    public int getOrderId() {
        return orderId;
    }

    public void setOrderId(int orderId) {
        this.orderId = orderId;
    }

    public int getOrderAmount() {
        return orderAmount;
    }

    public void setOrderAmount(int orderAmount) {
        this.orderAmount = orderAmount;
    }

    public int getMemberId() {
        return memberId;
    }

    public void setMemberId(int memberId) {
        this.memberId = memberId;
    }

    public String getMemberName() {
        return memberName;
    }

    public void setMemberName(String memberName) {
        this.memberName = memberName;
    }

    public String getMemberEmail() {
        return memberEmail;
    }

    public void setMemberEmail(String memberEmail) {
        this.memberEmail = memberEmail;
    }

    public String getMemberPhone() {
        return memberPhone;
    }

    public void setMemberPhone(String memberPhone) {
        this.memberPhone = memberPhone;
    }

    public String getRefundReason() {
        return refundReason;
    }

    public void setRefundReason(String refundReason) {
        this.refundReason = refundReason;
    }

    @Override
    public String toString() {
        return "PaymentDetailDTO{" +
                "paymentId=" + paymentId +
                ", paymentTime=" + paymentTime +
                ", paymentKey='" + paymentKey + '\'' +
                ", paymentStatus='" + paymentStatus + '\'' +
                ", orderId=" + orderId +
                ", orderAmount=" + orderAmount +
                ", memberId=" + memberId +
                ", memberName='" + memberName + '\'' +
                ", memberEmail='" + memberEmail + '\'' +
                ", memberPhone='" + memberPhone + '\'' +
                ", refundReason='" + refundReason + '\'' +
                '}';
    }

}