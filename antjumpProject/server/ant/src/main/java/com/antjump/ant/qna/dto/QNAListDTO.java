package com.antjump.ant.qna.dto;

import org.springframework.web.multipart.MultipartFile;

import java.sql.Timestamp;

/**
 * <pre>
 * Class : QNAList
 * Comment: 전송하기 위해 사용한 객체
 * History
 * ================================================================
 * DATE             AUTHOR           NOTE
 * ----------------------------------------------------------------
 * 2022-10-04       부시연           최초 생성
 * </pre>
 *
 * @author 부시연(최초 작성자)
 * @version 1(클래스 버전)
 */
public class QNAListDTO {

    private int qnaId;
    private String qnaTitle;
    private Timestamp qnaModifyTime;
    private Integer memberId;
    private String memberName;
    private Integer adminId;
    private String adminName;
    private int qnaDepth;
    private Integer refQnaId;
    private String qnaStatus;
    private int qnaCategoryNo;
    private String  qnaCategoryName;

    public QNAListDTO() {
    }

    public QNAListDTO(int qnaId, String qnaTitle, Timestamp qnaModifyTime, Integer memberId, String memberName, Integer adminId, String adminName, int qnaDepth, Integer refQnaId, String qnaStatus, int qnaCategoryNo, String qnaCategoryName) {
        this.qnaId = qnaId;
        this.qnaTitle = qnaTitle;
        this.qnaModifyTime = qnaModifyTime;
        this.memberId = memberId;
        this.memberName = memberName;
        this.adminId = adminId;
        this.adminName = adminName;
        this.qnaDepth = qnaDepth;
        this.refQnaId = refQnaId;
        this.qnaStatus = qnaStatus;
        this.qnaCategoryNo = qnaCategoryNo;
        this.qnaCategoryName = qnaCategoryName;
    }

    public int getQnaId() {
        return qnaId;
    }

    public void setQnaId(int qnaId) {
        this.qnaId = qnaId;
    }

    public String getQnaTitle() {
        return qnaTitle;
    }

    public void setQnaTitle(String qnaTitle) {
        this.qnaTitle = qnaTitle;
    }

    public Timestamp getQnaModifyTime() {
        return qnaModifyTime;
    }

    public void setQnaModifyTime(Timestamp qnaModifyTime) {
        this.qnaModifyTime = qnaModifyTime;
    }

    public Integer getMemberId() {
        return memberId;
    }

    public void setMemberId(Integer memberId) {
        this.memberId = memberId;
    }

    public String getMemberName() {
        return memberName;
    }

    public void setMemberName(String memberName) {
        this.memberName = memberName;
    }

    public Integer getAdminId() {
        return adminId;
    }

    public void setAdminId(Integer adminId) {
        this.adminId = adminId;
    }

    public String getAdminName() {
        return adminName;
    }

    public void setAdminName(String adminName) {
        this.adminName = adminName;
    }

    public int getQnaDepth() {
        return qnaDepth;
    }

    public void setQnaDepth(int qnaDepth) {
        this.qnaDepth = qnaDepth;
    }

    public Integer getRefQnaId() {
        return refQnaId;
    }

    public void setRefQnaId(Integer refQnaId) {
        this.refQnaId = refQnaId;
    }

    public String getQnaStatus() {
        return qnaStatus;
    }

    public void setQnaStatus(String qnaStatus) {
        this.qnaStatus = qnaStatus;
    }

    public int getQnaCategoryNo() {
        return qnaCategoryNo;
    }

    public void setQnaCategoryNo(int qnaCategoryNo) {
        this.qnaCategoryNo = qnaCategoryNo;
    }

    public String getQnaCategoryName() {
        return qnaCategoryName;
    }

    public void setQnaCategoryName(String qnaCategoryName) {
        this.qnaCategoryName = qnaCategoryName;
    }

    @Override
    public String toString() {
        return "QNAListDTO{" +
                "qnaId=" + qnaId +
                ", qnaTitle='" + qnaTitle + '\'' +
                ", qnaModifyTime=" + qnaModifyTime +
                ", memberId=" + memberId +
                ", memberName='" + memberName + '\'' +
                ", adminId=" + adminId +
                ", adminName='" + adminName + '\'' +
                ", qnaDepth=" + qnaDepth +
                ", refQnaId=" + refQnaId +
                ", qnaStatus='" + qnaStatus + '\'' +
                ", qnaCategoryNo=" + qnaCategoryNo +
                ", qnaCategoryName='" + qnaCategoryName + '\'' +
                '}';
    }
}
