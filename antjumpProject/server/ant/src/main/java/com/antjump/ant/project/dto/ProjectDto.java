package com.antjump.ant.project.dto;

import java.util.Date;

/**
 * <pre>
 * Class : ProjectDto
 * Comment: 클래스에 대한 간단 설명
 * History
 * ================================================================
 * DATE             AUTHOR           NOTE
 * ----------------------------------------------------------------
 * 2022-10-05       최윤서           최초 생성
 * </pre>
 *
 * @author 최윤서
 * @version 1
 * @see
 */
public class ProjectDto {
    private int projectId;
    private String projectKey;
    private String projectName;
    private String projectSummary;
    private String projectExplanation;
    private String projectProduceDate;
    private char projectEnableYn;
    private String projectStatus;
    private int fkMembersMemberId;

    public ProjectDto (){}

    public ProjectDto(int projectId, String projectKey, String projectName, String projectSummary, String projectExplanation, String projectProduceDate, char projectEnableYn, String projectStatus, int fkMembersMemberId) {
        this.projectId = projectId;
        this.projectKey = projectKey;
        this.projectName = projectName;
        this.projectSummary = projectSummary;
        this.projectExplanation = projectExplanation;
        this.projectProduceDate = projectProduceDate;
        this.projectEnableYn = projectEnableYn;
        this.projectStatus = projectStatus;
        this.fkMembersMemberId = fkMembersMemberId;
    }

    public String getProjectStatus() {
        return projectStatus;
    }

    public void setProjectStatus(String projectStatus) {
        this.projectStatus = projectStatus;
    }

    public int getProjectId() {
        return projectId;
    }

    public void setProjectId(int projectId) {
        this.projectId = projectId;
    }

    public String getProjectKey() {
        return projectKey;
    }

    public void setProjectKey(String projectKey) {
        this.projectKey = projectKey;
    }

    public String getProjectName() {
        return projectName;
    }

    public void setProjectName(String projectName) {
        this.projectName = projectName;
    }

    public String getProjectSummary() {
        return projectSummary;
    }

    public void setProjectSummary(String projectSummary) {
        this.projectSummary = projectSummary;
    }

    public String getProjectExplanation() {
        return projectExplanation;
    }

    public void setProjectExplanation(String projectExplanation) {
        this.projectExplanation = projectExplanation;
    }

    public String getProjectProduceDate() {
        return projectProduceDate;
    }

    public void setProjectProduceDate(String projectProduceDate) {
        this.projectProduceDate = projectProduceDate;
    }

    public char getProjectEnableYn() {
        return projectEnableYn;
    }

    public void setProjectEnableYn(char projectEnableYn) {
        this.projectEnableYn = projectEnableYn;
    }

    public int getFkMembersMemberId() {
        return fkMembersMemberId;
    }

    public void setFkMembersMemberId(int fkMembersMemberId) {
        this.fkMembersMemberId = fkMembersMemberId;
    }

    @Override
    public String toString() {
        return "ProjectDto{" +
                "projectId=" + projectId +
                ", projectKey='" + projectKey + '\'' +
                ", projectName='" + projectName + '\'' +
                ", projectSummary='" + projectSummary + '\'' +
                ", projectExplanation='" + projectExplanation + '\'' +
                ", projectProduceDate=" + projectProduceDate +
                ", projectEnableYn=" + projectEnableYn +
                ", projectStatus=" + projectStatus +
                ", fkMembersMemberId=" + fkMembersMemberId +
                '}';
    }
}
