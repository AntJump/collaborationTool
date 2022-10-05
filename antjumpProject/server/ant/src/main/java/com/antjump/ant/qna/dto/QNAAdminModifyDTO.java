package com.antjump.ant.qna.dto;

import java.sql.Timestamp;

/**
 * <pre>
 * Class : QNAAdminModifyDTO
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
public class QNAAdminModifyDTO {


    private int qnaId;
    private String qnaTitle;
    private String qnaContent;
    private Timestamp qnaModifyTime;
    private int adminId;
    private String adminName;
    private int qnaCategoryNo;
    private String qnaCategoryName;

    public QNAAdminModifyDTO() {
    }

    public QNAAdminModifyDTO(int qnaId, String qnaTitle, String qnaContent, Timestamp qnaModifyTime, int adminId, String adminName, int qnaCategoryNo, String qnaCategoryName) {
        this.qnaId = qnaId;
        this.qnaTitle = qnaTitle;
        this.qnaContent = qnaContent;
        this.qnaModifyTime = qnaModifyTime;
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

    public Timestamp getQnaModifyTime() {
        return qnaModifyTime;
    }

    public void setQnaModifyTime(Timestamp qnaModifyTime) {
        this.qnaModifyTime = qnaModifyTime;
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
        return "QNAAdminModifyDTO{" +
                "qnaId=" + qnaId +
                ", qnaTitle='" + qnaTitle + '\'' +
                ", qnaContent='" + qnaContent + '\'' +
                ", qnaModifyTime=" + qnaModifyTime +
                ", adminId=" + adminId +
                ", adminName='" + adminName + '\'' +
                ", qnaCategoryNo=" + qnaCategoryNo +
                ", qnaCategoryName='" + qnaCategoryName + '\'' +
                '}';
    }

}
