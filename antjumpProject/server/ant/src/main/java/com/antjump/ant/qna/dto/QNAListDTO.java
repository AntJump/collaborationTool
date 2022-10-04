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

    private int qnaNo;
    private String qnaTitle;
    private Timestamp qnaModifyTime;
    private int memberId;
    private String memberName;
    private int qnaDepth;
    private Integer refQnaId;
    private int qnaCategoryNo;
    private String  qnaCategoryName;
    private MultipartFile qnaFile;
    private String qnaFileUrl;

    public QNAListDTO() {
    }

    public QNAListDTO(int qnaNo, String qnaTitle, Timestamp qnaModifyTime, int memberId, String memberName, int qnaDepth, Integer refQnaId, int qnaCategoryNo, String qnaCategoryName, MultipartFile qnaFile, String qnaFileUrl) {
        this.qnaNo = qnaNo;
        this.qnaTitle = qnaTitle;
        this.qnaModifyTime = qnaModifyTime;
        this.memberId = memberId;
        this.memberName = memberName;
        this.qnaDepth = qnaDepth;
        this.refQnaId = refQnaId;
        this.qnaCategoryNo = qnaCategoryNo;
        this.qnaCategoryName = qnaCategoryName;
        this.qnaFile = qnaFile;
        this.qnaFileUrl = qnaFileUrl;
    }

    public int getQnaNo() {
        return qnaNo;
    }

    public void setQnaNo(int qnaNo) {
        this.qnaNo = qnaNo;
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
        return "QNAListDTO{" +
                "qnaNo=" + qnaNo +
                ", qnaTitle='" + qnaTitle + '\'' +
                ", qnaModifyTime=" + qnaModifyTime +
                ", memberId=" + memberId +
                ", memberName='" + memberName + '\'' +
                ", qnaDepth=" + qnaDepth +
                ", refQnaId=" + refQnaId +
                ", qnaCategoryNo=" + qnaCategoryNo +
                ", qnaCategoryName='" + qnaCategoryName + '\'' +
                ", qnaFile=" + qnaFile +
                ", qnaFileUrl='" + qnaFileUrl + '\'' +
                '}';
    }

}
