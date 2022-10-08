package com.antjump.ant.issue.model.dto;

/**
 * <pre>
 * Class : IssueDTO
 * Comment: 클래스에 대한 간단 설명
 * History
 * ================================================================
 * DATE             AUTHOR           NOTE
 * ----------------------------------------------------------------
 * 2022-10-07       홍길동           최초 생성
 * </pre>
 *
 * @author 홍길동(최초 작성자)
 * @version 1(클래스 버전)
 * @see
 */
public class IssueDTO {

    private int issueId;

    private int topIssueId;

    private String issueName;

    private String issueSummary;

    private String issueExplanation;

    private String issueDifficulty;

    private String issueStatus;

    private String issueCategory;

    private char issuePriority;

    private char sprintIncludeYN;

    private int projectId;

    private int memberId;

    public IssueDTO(){}

    public IssueDTO(int issueId, int topIssueId, String issueName, String issueSummary, String issueExplanation, String issueDifficulty, String issueStatus, String issueCategory, char issuePriority, char sprintIncludeYN, int projectId, int memberId) {
        this.issueId = issueId;
        this.topIssueId = topIssueId;
        this.issueName = issueName;
        this.issueSummary = issueSummary;
        this.issueExplanation = issueExplanation;
        this.issueDifficulty = issueDifficulty;
        this.issueStatus = issueStatus;
        this.issueCategory = issueCategory;
        this.issuePriority = issuePriority;
        this.sprintIncludeYN = sprintIncludeYN;
        this.projectId = projectId;
        this.memberId = memberId;
    }

    public int getIssueId() {
        return issueId;
    }

    public void setIssueId(int issueId) {
        this.issueId = issueId;
    }

    public int getTopIssueId() {
        return topIssueId;
    }

    public void setTopIssueId(int topIssueId) {
        this.topIssueId = topIssueId;
    }

    public String getIssueName() {
        return issueName;
    }

    public void setIssueName(String issueName) {
        this.issueName = issueName;
    }

    public String getIssueSummary() {
        return issueSummary;
    }

    public void setIssueSummary(String issueSummary) {
        this.issueSummary = issueSummary;
    }

    public String getIssueExplanation() {
        return issueExplanation;
    }

    public void setIssueExplanation(String issueExplanation) {
        this.issueExplanation = issueExplanation;
    }

    public String getIssueDifficulty() {
        return issueDifficulty;
    }

    public void setIssueDifficulty(String issueDifficulty) {
        this.issueDifficulty = issueDifficulty;
    }

    public String getIssueStatus() {
        return issueStatus;
    }

    public void setIssueStatus(String issueStatus) {
        this.issueStatus = issueStatus;
    }

    public String getIssueCategory() {
        return issueCategory;
    }

    public void setIssueCategory(String issueCategory) {
        this.issueCategory = issueCategory;
    }

    public char getIssuePriority() {
        return issuePriority;
    }

    public void setIssuePriority(char issuePriority) {
        this.issuePriority = issuePriority;
    }

    public char getSprintIncludeYN() {
        return sprintIncludeYN;
    }

    public void setSprintIncludeYN(char sprintIncludeYN) {
        this.sprintIncludeYN = sprintIncludeYN;
    }

    public int getProjectId() {
        return projectId;
    }

    public void setProjectId(int projectId) {
        this.projectId = projectId;
    }

    public int getMemberId() {
        return memberId;
    }

    public void setMemberId(int memberId) {
        this.memberId = memberId;
    }

    @Override
    public String toString() {
        return "IssueDTO{" +
                "issueId=" + issueId +
                ", topIssueId=" + topIssueId +
                ", issueName='" + issueName + '\'' +
                ", issueSummary='" + issueSummary + '\'' +
                ", issueExplanation='" + issueExplanation + '\'' +
                ", issueDifficulty='" + issueDifficulty + '\'' +
                ", issueStatus='" + issueStatus + '\'' +
                ", issueCategory='" + issueCategory + '\'' +
                ", issuePriority=" + issuePriority +
                ", sprintIncludeYN=" + sprintIncludeYN +
                ", projectId=" + projectId +
                ", memberId=" + memberId +
                '}';
    }
}
