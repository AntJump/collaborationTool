package com.antjump.ant.project.dto;

import com.antjump.ant.member.dto.MemberDto;

/**
 * <pre>
 * Class : ProjectMemberDto
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
public class ProjectMemberAndRoleAndMemberDto {
    private int projectMemberId;            // 프로젝트 참여자 번호
    private ProjectRoleDto fkRolesRoleDto;  // 프로젝트 참여자 역할 정보
    private MemberDto fkMembersMemberDto;   // 프로젝트 참여자 정보
    private int fkProjectsProjectId;        // 참여 프로젝트 번호

    public ProjectMemberAndRoleAndMemberDto() {}
    public ProjectMemberAndRoleAndMemberDto(int projectMemberId, ProjectRoleDto fkRolesRoleDto, MemberDto fkMembersMemberDto, int fkProjectsProjectId) {
        this.projectMemberId = projectMemberId;
        this.fkRolesRoleDto = fkRolesRoleDto;
        this.fkMembersMemberDto = fkMembersMemberDto;
        this.fkProjectsProjectId = fkProjectsProjectId;
    }

    public int getProjectMemberId() {
        return projectMemberId;
    }

    public void setProjectMemberId(int projectMemberId) {
        this.projectMemberId = projectMemberId;
    }

    public ProjectRoleDto getFkRolesRoleDto() {
        return fkRolesRoleDto;
    }

    public void setFkRolesRoleDto(ProjectRoleDto fkRolesRoleDto) {
        this.fkRolesRoleDto = fkRolesRoleDto;
    }

    public MemberDto getFkMembersMemberDto() {
        return fkMembersMemberDto;
    }

    public void setFkMembersMemberDto(MemberDto fkMembersMemberDto) {
        this.fkMembersMemberDto = fkMembersMemberDto;
    }

    public int getFkProjectsProjectId() {
        return fkProjectsProjectId;
    }

    public void setFkProjectsProjectId(int fkProjectsProjectId) {
        this.fkProjectsProjectId = fkProjectsProjectId;
    }

    @Override
    public String toString() {
        return "ProjectMemberAndRoleAndMemberDto{" +
                "projectMemberId=" + projectMemberId +
                ", fkRolesRoleDto=" + fkRolesRoleDto +
                ", fkMembersMemberDto=" + fkMembersMemberDto +
                ", fkProjectsProjectId=" + fkProjectsProjectId +
                '}';
    }
}
