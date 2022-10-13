package com.antjump.ant.project.dto;

/**
 * <pre>
 * Class : ProjectMemberDto
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
public class ProjectMemberDto {
    private int projectMemberId;
    private int fkRolesRoleId;
    private int fkMembersMemberId;
    private int fkProjectsProjectId;

    public ProjectMemberDto() {}
    public ProjectMemberDto(int projectMemberId, int fkRolesRoleId, int fkMembersMemberId, int fkProjectsProjectId) {
        this.projectMemberId = projectMemberId;
        this.fkRolesRoleId = fkRolesRoleId;
        this.fkMembersMemberId = fkMembersMemberId;
        this.fkProjectsProjectId = fkProjectsProjectId;
    }

    public int getProjectMemberId() {
        return projectMemberId;
    }

    public void setProjectMemberId(int projectMemberId) {
        this.projectMemberId = projectMemberId;
    }

    public int getFkRolesRoleId() {
        return fkRolesRoleId;
    }

    public void setFkRolesRoleId(int fkRolesRoleId) {
        this.fkRolesRoleId = fkRolesRoleId;
    }

    public int getFkMembersMemberId() {
        return fkMembersMemberId;
    }

    public void setFkMembersMemberId(int fkMembersMemberId) {
        this.fkMembersMemberId = fkMembersMemberId;
    }

    public int getFkProjectsProjectId() {
        return fkProjectsProjectId;
    }

    public void setFkProjectsProjectId(int fkProjectsProjectId) {
        this.fkProjectsProjectId = fkProjectsProjectId;
    }

    @Override
    public String toString() {
        return "ProjectMemberDto{" +
                "projectMemberId=" + projectMemberId +
                ", fkRolesRoleId=" + fkRolesRoleId +
                ", fkMembersMemberId=" + fkMembersMemberId +
                ", fkProjectsProjectId=" + fkProjectsProjectId +
                '}';
    }
}
