package com.antjump.ant.project.dto;

/**
 * <pre>
 * Class : ProjectRolesDto
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
 * @see 참고할 class 또는 외부 url
 */
public class ProjectRoleDto {
    private int projectRoleId;
    private String projectRoleName;

    public ProjectRoleDto() {}
    public ProjectRoleDto(int projectRoleId, String projectRoleName) {
        this.projectRoleId = projectRoleId;
        this.projectRoleName = projectRoleName;
    }


    public int getProjectRoleId() {
        return projectRoleId;
    }

    public void setProjectRoleId(int projectRoleId) {
        this.projectRoleId = projectRoleId;
    }

    public String getProjectRoleName() {
        return projectRoleName;
    }

    public void setProjectRoleName(String projectRoleName) {
        this.projectRoleName = projectRoleName;
    }

    @Override
    public String toString() {
        return "ProjectRoleDto{" +
                "projectRoleId=" + projectRoleId +
                ", projectRoleName=" + projectRoleName +
                '}';
    }
}
