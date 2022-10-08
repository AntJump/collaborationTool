package com.antjump.ant.qna.dto;

import java.sql.Timestamp;

/**
 * <pre>
 * Class : QNAAdminCreateDTO
 * Comment: 전송하기 위해 사용한 객체
 * History
 * ================================================================
 * DATE             AUTHOR           NOTE
 * ----------------------------------------------------------------
 * 2022-10-05       부시연           최초 생성
 * </pre>
 *
 * @author 부시연(최초 작성자)
 * @version 1(클래스 버전)
 */
public class QNAAdminCreateDTO {

    private int qnaId;
    private String qnaTitle;
    private String qnaContent;
    private Timestamp qnaWriteTime;
    private Timestamp qnaModifyTime;
    private int refQnaId;
    private int adminId;
    private String adminName;
    private int qnaCategoryNo;
    private String qnaCategoryName;

    public QNAAdminCreateDTO() {
    }

    public QNAAdminCreateDTO(int qnaId, String qnaTitle, String qnaContent, Timestamp qnaWriteTime, Timestamp qnaModifyTime, int refQnaId, int adminId, String adminName, int qnaCategoryNo, String qnaCategoryName) {
        this.qnaId = qnaId;
        this.qnaTitle = qnaTitle;
        this.qnaContent = qnaContent;
        this.qnaWriteTime = qnaWriteTime;
        this.qnaModifyTime = qnaModifyTime;
        this.refQnaId = refQnaId;
        this.adminId = adminId;
        this.adminName = adminName;
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

    public int getRefQnaId() {
        return refQnaId;
    }

    public void setRefQnaId(int refQnaId) {
        this.refQnaId = refQnaId;
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
        return "QNAAdminCreateDTO{" +
                "qnaId=" + qnaId +
                ", qnaTitle='" + qnaTitle + '\'' +
                ", qnaContent='" + qnaContent + '\'' +
                ", qnaWriteTime=" + qnaWriteTime +
                ", qnaModifyTime=" + qnaModifyTime +
                ", refQnaId=" + refQnaId +
                ", adminId=" + adminId +
                ", adminName='" + adminName + '\'' +
                ", qnaCategoryNo=" + qnaCategoryNo +
                ", qnaCategoryName='" + qnaCategoryName + '\'' +
                '}';
    }

}
