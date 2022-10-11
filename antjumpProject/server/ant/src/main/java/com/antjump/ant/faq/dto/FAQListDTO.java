package com.antjump.ant.faq.dto;

import java.sql.Timestamp;

/**
 * <pre>
 * Class : FAQListDTO
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
public class FAQListDTO {

    private int faqId;
    private String faqTitle;
    private Timestamp faqModifyTime;
    private int faqCategoryNo;
    private String faqCategoryName;

    public FAQListDTO() {
    }

    public FAQListDTO(int faqId, String faqTitle, Timestamp faqModifyTime, int faqCategoryNo, String faqCategoryName) {
        this.faqId = faqId;
        this.faqTitle = faqTitle;
        this.faqModifyTime = faqModifyTime;
        this.faqCategoryNo = faqCategoryNo;
        this.faqCategoryName = faqCategoryName;
    }

    public int getFaqId() {
        return faqId;
    }

    public void setFaqId(int faqId) {
        this.faqId = faqId;
    }

    public String getFaqTitle() {
        return faqTitle;
    }

    public void setFaqTitle(String faqTitle) {
        this.faqTitle = faqTitle;
    }

    public Timestamp getFaqModifyTime() {
        return faqModifyTime;
    }

    public void setFaqModifyTime(Timestamp faqModifyTime) {
        this.faqModifyTime = faqModifyTime;
    }

    public int getFaqCategoryNo() {
        return faqCategoryNo;
    }

    public void setFaqCategoryNo(int faqCategoryNo) {
        this.faqCategoryNo = faqCategoryNo;
    }

    public String getFaqCategoryName() {
        return faqCategoryName;
    }

    public void setFaqCategoryName(String faqCategoryName) {
        this.faqCategoryName = faqCategoryName;
    }

    @Override
    public String toString() {
        return "FAQListDTO{" +
                "faqId=" + faqId +
                ", faqTitle='" + faqTitle + '\'' +
                ", faqModifyTime=" + faqModifyTime +
                ", faqCategoryNo=" + faqCategoryNo +
                ", faqCategoryName='" + faqCategoryName + '\'' +
                '}';
    }
}
