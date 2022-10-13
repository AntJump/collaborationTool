package com.antjump.ant.project.dto;

import com.antjump.ant.member.dto.MemberDto;

import java.util.Date;

/**
 * <pre>
 * Class : ProjectAndMemberDto
 * Comment: 클래스에 대한 간단 설명
 * History
 * ================================================================
 * DATE             AUTHOR           NOTE
 * ----------------------------------------------------------------
 * 2022-10-06       최윤서           최초 생성
 * </pre>
 *
 * @author 최윤서
 * @version 1
 * @see 참고할 class 또는 외부 url
 */
public class ProjectAndMemberDto {

    private int projectId;
    private String projectKey;
    private String projectName;
    private String projectSummary;
    private String projectExplanation;
    private String projectProduceDate;
    private char projectEnableYn;
    private String projectStatus;
    private MemberDto fkMembersMemberDto;       // 프로젝트 생성자(PM) 정보

    public ProjectAndMemberDto(){}
    public ProjectAndMemberDto(int projectId, String projectKey, String projectName, String projectSummary, String projectExplanation, String projectProduceDate, char projectEnableYn, String projectStatus, MemberDto fkMembersMemberDto) {
        this.projectId = projectId;
        this.projectKey = projectKey;
        this.projectName = projectName;
        this.projectSummary = projectSummary;
        this.projectExplanation = projectExplanation;
        this.projectProduceDate = projectProduceDate;
        this.projectEnableYn = projectEnableYn;
        this.projectStatus = projectStatus;
        this.fkMembersMemberDto = fkMembersMemberDto;
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

    public String getProjectStatus() {
        return projectStatus;
    }

    public void setProjectStatus(String projectStatus) {
        this.projectStatus = projectStatus;
    }

    public MemberDto getFkMembersMemberDto() {
        return fkMembersMemberDto;
    }

    public void setFkMembersMemberDto(MemberDto fkMembersMemberDto) {
        this.fkMembersMemberDto = fkMembersMemberDto;
    }

    @Override
    public String toString() {
        return "ProjectAndMemberDto{" +
                "projectId=" + projectId +
                ", projectKey='" + projectKey + '\'' +
                ", projectName='" + projectName + '\'' +
                ", projectSummary='" + projectSummary + '\'' +
                ", projectExplanation='" + projectExplanation + '\'' +
                ", projectProduceDate=" + projectProduceDate +
                ", projectEnableYn=" + projectEnableYn +
                ", projectStatus=" + projectStatus +
                ", fkMembersMemberDto=" + fkMembersMemberDto +
                '}';
    }
}
