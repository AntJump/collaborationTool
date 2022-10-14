package com.antjump.ant.remembrance.model.dto;

/**
 * <pre>
 * Class : ArticleDto
 * Comment: 클래스에 대한 간단 설명
 * History
 * ================================================================
 * DATE             AUTHOR           NOTE
 * ----------------------------------------------------------------
 * 2022-10-13       홍길동           최초 생성
 * </pre>
 *
 * @author 홍길동(최초 작성자)
 * @version 1(클래스 버전)
 * @see
 */
public class ArticleDto {

    private int articleId;
    private String articleTitle;
    private String articleContent;
    private String articleType;
    private int fkRemembrancesArticles;

    public ArticleDto() {}

    public ArticleDto(int articleId, String articleTitle, String articleContent, String articleType, int fkRemembrancesArticles) {
        this.articleId = articleId;
        this.articleTitle = articleTitle;
        this.articleContent = articleContent;
        this.articleType = articleType;
        this.fkRemembrancesArticles = fkRemembrancesArticles;
    }

    public int getArticleId() {
        return articleId;
    }

    public void setArticleId(int articleId) {
        this.articleId = articleId;
    }

    public String getArticleTitle() {
        return articleTitle;
    }

    public void setArticleTitle(String articleTitle) {
        this.articleTitle = articleTitle;
    }

    public String getArticleContent() {
        return articleContent;
    }

    public void setArticleContent(String articleContent) {
        this.articleContent = articleContent;
    }

    public String getArticleType() {
        return articleType;
    }

    public void setArticleType(String articleType) {
        this.articleType = articleType;
    }

    public int getFkRemembrancesArticles() {
        return fkRemembrancesArticles;
    }

    public void setFkRemembrancesArticles(int fkRemembrancesArticles) {
        this.fkRemembrancesArticles = fkRemembrancesArticles;
    }

    @Override
    public String toString() {
        return "ArticleDto{" +
                "articleId=" + articleId +
                ", articleTitle='" + articleTitle + '\'' +
                ", articleContent='" + articleContent + '\'' +
                ", articleType='" + articleType + '\'' +
                ", fkRemembrancesArticles=" + fkRemembrancesArticles +
                '}';
    }
}
