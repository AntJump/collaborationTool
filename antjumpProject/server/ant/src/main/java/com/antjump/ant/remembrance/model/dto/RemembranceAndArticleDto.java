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
public class RemembranceAndArticleDto {

    private int remembranceId;
    private Date remembranceDate;
    private int fkSprintsRemembrances;
    private ArticleDto articleInfo;

    public RemembranceAndArticleDto() {}

    public RemembranceAndArticleDto(int remembranceId, Date remembranceDate, int fkSprintsRemembrances, ArticleDto articleInfo) {
        this.remembranceId = remembranceId;
        this.remembranceDate = remembranceDate;
        this.fkSprintsRemembrances = fkSprintsRemembrances;
        this.articleInfo = articleInfo;
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

    public int getFkSprintsRemembrances() {
        return fkSprintsRemembrances;
    }

    public void setFkSprintsRemembrances(int fkSprintsRemembrances) {
        this.fkSprintsRemembrances = fkSprintsRemembrances;
    }

    public ArticleDto getArticleInfo() {
        return articleInfo;
    }

    public void setArticleInfo(ArticleDto articleInfo) {
        this.articleInfo = articleInfo;
    }

    @Override
    public String toString() {
        return "RemembranceAndArticleDto{" +
                "remembranceId=" + remembranceId +
                ", remembranceDate=" + remembranceDate +
                ", fkSprintsRemembrances=" + fkSprintsRemembrances +
                ", articleInfo=" + articleInfo +
                '}';
    }
}
