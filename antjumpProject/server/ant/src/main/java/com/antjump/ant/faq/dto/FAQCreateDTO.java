package com.antjump.ant.faq.dto;

import java.sql.Timestamp;

/**
 * <pre>
 * Class : FAQCreateDTO
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
public class FAQCreateDTO {

    private String faqTitle;
    private String faqContent;
    private Timestamp faqWriteTime;
    private int faqCategoryNo;
    private int adminId;

    public FAQCreateDTO() {
    }

    public FAQCreateDTO(String faqTitle, String faqContent, Timestamp faqWriteTime, int faqCategoryNo, int adminId) {
        this.faqTitle = faqTitle;
        this.faqContent = faqContent;
        this.faqWriteTime = faqWriteTime;
        this.faqCategoryNo = faqCategoryNo;
        this.adminId = adminId;
    }

    public String getFaqTitle() {
        return faqTitle;
    }

    public void setFaqTitle(String faqTitle) {
        this.faqTitle = faqTitle;
    }

    public String getFaqContent() {
        return faqContent;
    }

    public void setFaqContent(String faqContent) {
        this.faqContent = faqContent;
    }

    public Timestamp getFaqWriteTime() {
        return faqWriteTime;
    }

    public void setFaqWriteTime(Timestamp faqWriteTime) {
        this.faqWriteTime = faqWriteTime;
    }

    public int getFaqCategoryNo() {
        return faqCategoryNo;
    }

    public void setFaqCategoryNo(int faqCategoryNo) {
        this.faqCategoryNo = faqCategoryNo;
    }

    public int getAdminId() {
        return adminId;
    }

    public void setAdminId(int adminId) {
        this.adminId = adminId;
    }

    @Override
    public String toString() {
        return "FAQCreateDTO{" +
                "faqTitle='" + faqTitle + '\'' +
                ", faqContent='" + faqContent + '\'' +
                ", faqWriteTime=" + faqWriteTime +
                ", faqCategoryNo=" + faqCategoryNo +
                ", adminId=" + adminId +
                '}';
    }
}