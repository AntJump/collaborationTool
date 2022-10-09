package com.antjump.ant.project.dto;

/**
 * <pre>
 * Class : ProjectFunctionDto
 * Comment: 클래스에 대한 간단 설명
 * History
 * ================================================================
 * DATE             AUTHOR           NOTE
 * ----------------------------------------------------------------
 * 2022-10-08       최윤서           최초 생성
 * </pre>
 *
 * @author 최윤서
 * @version 1
 */
public class ProjectFunctionDto {
    private int projectFunctionId;
    private String projectCategory;
    private String projectFunctionDetail;

    public ProjectFunctionDto() {}
    public ProjectFunctionDto(int projectFunctionId, String projectCategory, String projectFunctionDetail) {
        this.projectFunctionId = projectFunctionId;
        this.projectCategory = projectCategory;
        this.projectFunctionDetail = projectFunctionDetail;
    }

    public int getProjectFunctionId() {
        return projectFunctionId;
    }

    public void setProjectFunctionId(int projectFunctionId) {
        this.projectFunctionId = projectFunctionId;
    }

    public String getProjectCategory() {
        return projectCategory;
    }

    public void setProjectCategory(String projectCategory) {
        this.projectCategory = projectCategory;
    }

    public String getProjectFunctionDetail() {
        return projectFunctionDetail;
    }

    public void setProjectFunctionDetail(String projectFunctionDetail) {
        this.projectFunctionDetail = projectFunctionDetail;
    }

    @Override
    public String toString() {
        return "ProjectFunctionDto{" +
                "projectFunctionId=" + projectFunctionId +
                ", projectCategory='" + projectCategory + '\'' +
                ", projectFunctionDetail='" + projectFunctionDetail + '\'' +
                '}';
    }
}
