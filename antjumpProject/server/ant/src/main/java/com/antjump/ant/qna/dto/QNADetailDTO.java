package com.antjump.ant.qna.dto;

import org.springframework.web.multipart.MultipartFile;

import java.sql.Timestamp;

/**
 * <pre>
 * Class : QNADetailDTO
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
public class QNADetailDTO {

    private int qnaId;
    private String qnaTitle;
    private String qnaContent;
    private Timestamp qnaModifyTime;
    private int memberId;
    private String memberName;
    private int adminId;
    private String adminName;
    private int qnaDepth;
    private char qnaStatus;
    private Integer refQnaId;
    private int qnaCategoryNo;
    private String  qnaCategoryName;
    private MultipartFile qnaFile;
    private String qnaFileUrl;

    public QNADetailDTO() {
    }

    public QNADetailDTO(int qnaId, String qnaTitle, String qnaContent, Timestamp qnaModifyTime, int memberId, String memberName, int adminId, String adminName, int qnaDepth, char qnaStatus, Integer refQnaId, int qnaCategoryNo, String qnaCategoryName, MultipartFile qnaFile, String qnaFileUrl) {
        this.qnaId = qnaId;
        this.qnaTitle = qnaTitle;
        this.qnaContent = qnaContent;
        this.qnaModifyTime = qnaModifyTime;
        this.memberId = memberId;
        this.memberName = memberName;
        this.adminId = adminId;
        this.adminName = adminName;
        this.qnaDepth = qnaDepth;
        this.qnaStatus = qnaStatus;
        this.refQnaId = refQnaId;
        this.qnaCategoryNo = qnaCategoryNo;
        this.qnaCategoryName = qnaCategoryName;
        this.qnaFile = qnaFile;
        this.qnaFileUrl = qnaFileUrl;
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

    public String getQnaContent() {
        return qnaContent;
    }

    public void setQnaContent(String qnaContent) {
        this.qnaContent = qnaContent;
    }

    public Timestamp getQnaModifyTime() {
        return qnaModifyTime;
    }

    public void setQnaModifyTime(Timestamp qnaModifyTime) {
        this.qnaModifyTime = qnaModifyTime;
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

    public int getAdminId() {
        return adminId;
    }

    public void setAdminId(int adminId) {
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

    public char getQnaStatus() {
        return qnaStatus;
    }

    public void setQnaStatus(char qnaStatus) {
        this.qnaStatus = qnaStatus;
    }

    public Integer getRefQnaId() {
        return refQnaId;
    }

    public void setRefQnaId(Integer refQnaId) {
        this.refQnaId = refQnaId;
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

    public MultipartFile getQnaFile() {
        return qnaFile;
    }

    public void setQnaFile(MultipartFile qnaFile) {
        this.qnaFile = qnaFile;
    }

    public String getQnaFileUrl() {
        return qnaFileUrl;
    }

    public void setQnaFileUrl(String qnaFileUrl) {
        this.qnaFileUrl = qnaFileUrl;
    }

    @Override
    public String toString() {
        return "QNADetailDTO{" +
                "qnaId=" + qnaId +
                ", qnaTitle='" + qnaTitle + '\'' +
                ", qnaContent='" + qnaContent + '\'' +
                ", qnaModifyTime=" + qnaModifyTime +
                ", memberId=" + memberId +
                ", memberName='" + memberName + '\'' +
                ", adminId=" + adminId +
                ", adminName='" + adminName + '\'' +
                ", qnaDepth=" + qnaDepth +
                ", qnaStatus=" + qnaStatus +
                ", refQnaId=" + refQnaId +
                ", qnaCategoryNo=" + qnaCategoryNo +
                ", qnaCategoryName='" + qnaCategoryName + '\'' +
                ", qnaFile=" + qnaFile +
                ", qnaFileUrl='" + qnaFileUrl + '\'' +
                '}';
    }

}