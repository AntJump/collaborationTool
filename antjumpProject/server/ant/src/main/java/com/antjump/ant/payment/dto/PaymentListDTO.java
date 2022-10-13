package com.antjump.ant.payment.dto;

import java.sql.Timestamp;

/**
 * <pre>
 * Class : PaymentListDTO
 * Comment: 전송하기 위해 사용한 객체
 * History
 * ================================================================
 * DATE             AUTHOR           NOTE
 * ----------------------------------------------------------------
 * 2022-10-07       부시연           최초 생성
 * </pre>
 *
 * @author 부시연(최초 작성자)
 * @version 1(클래스 버전)
 */
public class PaymentListDTO {
    private int paymentId;
    private Timestamp paymentTime;
    private String paymentKey;
    private String paymentStatus;
    private int memberId;
    private String memberName;
    private Character refundYn;

    public PaymentListDTO() {
    }

    public PaymentListDTO(int paymentId, Timestamp paymentTime, String paymentKey, String paymentStatus, int memberId, String memberName, Character refundYn) {
        this.paymentId = paymentId;
        this.paymentTime = paymentTime;
        this.paymentKey = paymentKey;
        this.paymentStatus = paymentStatus;
        this.memberId = memberId;
        this.memberName = memberName;
        this.refundYn = refundYn;
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

    public Character getRefundYn() {
        return refundYn;
    }

    public void setRefundYn(Character refundYn) {
        this.refundYn = refundYn;
    }

    @Override
    public String toString() {
        return "PaymentListDTO{" +
                "paymentId=" + paymentId +
                ", paymentTime=" + paymentTime +
                ", paymentKey='" + paymentKey + '\'' +
                ", paymentStatus='" + paymentStatus + '\'' +
                ", memberId=" + memberId +
                ", memberName='" + memberName + '\'' +
                ", refundYn=" + refundYn +
                '}';
    }

}