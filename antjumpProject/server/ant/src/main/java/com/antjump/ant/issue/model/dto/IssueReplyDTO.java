package com.antjump.ant.issue.model.dto;

import java.sql.Timestamp;

/**
 * <pre>
 * Class : issueReplyDTO
 * Comment: 클래스에 대한 간단 설명
 * History
 * ================================================================
 * DATE             AUTHOR           NOTE
 * ----------------------------------------------------------------
 * 2022-10-10       홍길동           최초 생성
 * </pre>
 *
 * @author 홍길동(최초 작성자)
 * @version 1(클래스 버전)
 * @see
 */
public class IssueReplyDTO {

    private int issueReplyId;

    private int issueId;

    private Timestamp issueReplyTime;

    private String issueReplyContent;

    private int memberId;

    public IssueReplyDTO(){}

    public IssueReplyDTO(int issueReplyId, int issueId, Timestamp issueReplyTime, String issueReplyContent, int memberId) {
        this.issueReplyId = issueReplyId;
        this.issueId = issueId;
        this.issueReplyTime = issueReplyTime;
        this.issueReplyContent = issueReplyContent;
        this.memberId = memberId;
    }

    public int getIssueReplyId() {
        return issueReplyId;
    }

    public void setIssueReplyId(int issueReplyId) {
        this.issueReplyId = issueReplyId;
    }

    public int getIssueId() {
        return issueId;
    }

    public void setIssueId(int issueId) {
        this.issueId = issueId;
    }

    public Timestamp getIssueReplyTime() {
        return issueReplyTime;
    }

    public void setIssueReplyTime(Timestamp issueReplyTime) {
        this.issueReplyTime = issueReplyTime;
    }

    public String getIssueReplyContent() {
        return issueReplyContent;
    }

    public void setIssueReplyContent(String issueReplyContent) {
        this.issueReplyContent = issueReplyContent;
    }

    public int getMemberId() {
        return memberId;
    }

    public void setMemberId(int memberId) {
        this.memberId = memberId;
    }

    @Override
    public String toString() {
        return "issueReplyDTO{" +
                "issueReplyId=" + issueReplyId +
                ", issueId=" + issueId +
                ", issueReplyTime=" + issueReplyTime +
                ", issueReplyContent='" + issueReplyContent + '\'' +
                ", memberId=" + memberId +
                '}';
    }
}
