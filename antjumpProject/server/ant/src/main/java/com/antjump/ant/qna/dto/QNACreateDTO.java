package com.antjump.ant.qna.dto;

import org.springframework.web.multipart.MultipartFile;

import java.sql.Timestamp;

/**
 * <pre>
 * Class : QNACreateDTO
 * Comment:  전송하기 위해 사용한 객체
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
public class QNACreateDTO {

    private int qnaId;
    private String qnaTitle;
    private String qnaContent;
    private Timestamp qnaWriteTime;
    private Timestamp qnaModifyTime;
    private int memberId;
    private String memberName;
    private int qnaCategoryNo;
    private String qnaCategoryName;
    private MultipartFile qnaFile;
    private String qnaFileUrl;
    private String qnaOriginalName;
    private String qnaSaveName;

    public QNACreateDTO() {
    }

    public QNACreateDTO(int qnaId, String qnaTitle, String qnaContent, Timestamp qnaWriteTime, Timestamp qnaModifyTime, int memberId, String memberName, int qnaCategoryNo, String qnaCategoryName, MultipartFile qnaFile, String qnaFileUrl, String qnaOriginalName, String qnaSaveName) {
        this.qnaId = qnaId;
        this.qnaTitle = qnaTitle;
        this.qnaContent = qnaContent;
        this.qnaWriteTime = qnaWriteTime;
        this.qnaModifyTime = qnaModifyTime;
        this.memberId = memberId;
        this.memberName = memberName;
        this.qnaCategoryNo = qnaCategoryNo;
        this.qnaCategoryName = qnaCategoryName;
        this.qnaFile = qnaFile;
        this.qnaFileUrl = qnaFileUrl;
        this.qnaOriginalName = qnaOriginalName;
        this.qnaSaveName = qnaSaveName;
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

    public Timestamp getQnaWriteTime() {
        return qnaWriteTime;
    }

    public void setQnaWriteTime(Timestamp qnaWriteTime) {
        this.qnaWriteTime = qnaWriteTime;
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

    public String getQnaOriginalName() {
        return qnaOriginalName;
    }

    public void setQnaOriginalName(String qnaOriginalName) {
        this.qnaOriginalName = qnaOriginalName;
    }

    public String getQnaSaveName() {
        return qnaSaveName;
    }

    public void setQnaSaveName(String qnaSaveName) {
        this.qnaSaveName = qnaSaveName;
    }

    @Override
    public String toString() {
        return "QNACreateDTO{" +
                "qnaId=" + qnaId +
                ", qnaTitle='" + qnaTitle + '\'' +
                ", qnaContent='" + qnaContent + '\'' +
                ", qnaWriteTime=" + qnaWriteTime +
                ", qnaModifyTime=" + qnaModifyTime +
                ", memberId=" + memberId +
                ", memberName='" + memberName + '\'' +
                ", qnaCategoryNo=" + qnaCategoryNo +
                ", qnaCategoryName='" + qnaCategoryName + '\'' +
                ", qnaFile=" + qnaFile +
                ", qnaFileUrl='" + qnaFileUrl + '\'' +
                ", qnaOriginalName='" + qnaOriginalName + '\'' +
                ", qnaSaveName='" + qnaSaveName + '\'' +
                '}';
    }

}
