package com.antjump.ant.remembrance.model.dto;

import java.sql.Date;

/**
 * <pre>
 * Class : RemembranceDto
 * Comment: 클래스에 대한 간단 설명
 * History
 * ================================================================
 * DATE             AUTHOR           NOTE
 * ----------------------------------------------------------------
 * 2022-10-04       이상학           최초 생성
 * </pre>
 *
 * @author 이상학(최초 작성자)
 * @version 1(클래스 버전)
 */
    public class RemembranceDto {

    private int remembranceId;
    private Date remembranceDate;
    private String remembranceArticle;
    private String remembranceTitle;
    private String remembranceContent;
    private int fkSprintsRemembrances;

    public RemembranceDto() {}

    public RemembranceDto(int remembranceId, Date remembranceDate, String remembranceArticle, String remembranceTitle, String remembranceContent, int fkSprintsRemembrances) {
        this.remembranceId = remembranceId;
        this.remembranceDate = remembranceDate;
        this.remembranceArticle = remembranceArticle;
        this.remembranceTitle = remembranceTitle;
        this.remembranceContent = remembranceContent;
        this.fkSprintsRemembrances = fkSprintsRemembrances;
    }

    public int getRemembranceId() {
        return remembranceId;
    }

    public void setRemembranceId(int remembranceId) {
        this.remembranceId = remembranceId;
    }

    public Date getRemembranceDate() {
        return remembranceDate;
    }

    public void setRemembranceDate(Date remembranceDate) {
        this.remembranceDate = remembranceDate;
    }

    public String getRemembranceArticle() {
        return remembranceArticle;
    }

    public void setRemembranceArticle(String remembranceArticle) {
        this.remembranceArticle = remembranceArticle;
    }

    public String getRemembranceTitle() {
        return remembranceTitle;
    }

    public void setRemembranceTitle(String remembranceTitle) {
        this.remembranceTitle = remembranceTitle;
    }

    public String getRemembranceContent() {
        return remembranceContent;
    }

    public void setRemembranceContent(String remembranceContent) {
        this.remembranceContent = remembranceContent;
    }

    public int getFkSprintsRemembrances() {
        return fkSprintsRemembrances;
    }

    public void setFkSprintsRemembrances(int fkSprintsRemembrances) {
        this.fkSprintsRemembrances = fkSprintsRemembrances;
    }

    @Override
    public String toString() {
        return "RemembranceDto{" +
                "remembranceId=" + remembranceId +
                ", remembranceDate=" + remembranceDate +
                ", remembranceArticle='" + remembranceArticle + '\'' +
                ", remembranceTitle='" + remembranceTitle + '\'' +
                ", remembranceContent='" + remembranceContent + '\'' +
                ", fkSprintsRemembrances=" + fkSprintsRemembrances +
                '}';
    }
}
