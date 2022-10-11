package com.antjump.ant.project.dto;

/**
 * <pre>
 * Class : ProjectGrade
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
 * @see 참고할 class 또는 외부 url
 */
public class ProjectGradeDto {
    private int projectGradeId;
    private char projectCreateYn;
    private char projectUpdateYn;
    private char projectDeleteYn;
    private char projectReadYn;
    private int fkRolesRoleId;
    private int fkFunctionsFunctionId;

    public ProjectGradeDto() {}
    public ProjectGradeDto(int projectGradeId, char projectCreateYn, char projectUpdateYn, char projectDeleteYn, char projectReadYn, int fkRolesRoleId, int fkFunctionsFunctionId) {
        this.projectGradeId = projectGradeId;
        this.projectCreateYn = projectCreateYn;
        this.projectUpdateYn = projectUpdateYn;
        this.projectDeleteYn = projectDeleteYn;
        this.projectReadYn = projectReadYn;
        this.fkRolesRoleId = fkRolesRoleId;
        this.fkFunctionsFunctionId = fkFunctionsFunctionId;
    }

    public int getProjectGradeId() {
        return projectGradeId;
    }

    public void setProjectGradeId(int projectGradeId) {
        this.projectGradeId = projectGradeId;
    }

    public char getProjectCreateYn() {
        return projectCreateYn;
    }

    public void setProjectCreateYn(char projectCreateYn) {
        this.projectCreateYn = projectCreateYn;
    }

    public char getProjectUpdateYn() {
        return projectUpdateYn;
    }

    public void setProjectUpdateYn(char projectUpdateYn) {
        this.projectUpdateYn = projectUpdateYn;
    }

    public char getProjectDeleteYn() {
        return projectDeleteYn;
    }

    public void setProjectDeleteYn(char projectDeleteYn) {
        this.projectDeleteYn = projectDeleteYn;
    }

    public char getProjectReadYn() {
        return projectReadYn;
    }

    public void setProjectReadYn(char projectReadYn) {
        this.projectReadYn = projectReadYn;
    }

    public int getFkRolesRoleId() {
        return fkRolesRoleId;
    }

    public void setFkRolesRoleId(int fkRolesRoleId) {
        this.fkRolesRoleId = fkRolesRoleId;
    }

    public int getFkFunctionsFunctionId() {
        return fkFunctionsFunctionId;
    }

    public void setFkFunctionsFunctionId(int fkFunctionsFunctionId) {
        this.fkFunctionsFunctionId = fkFunctionsFunctionId;
    }

    @Override
    public String toString() {
        return "ProjectGradeDto{" +
                "projectGradeId=" + projectGradeId +
                ", projectCreateYn=" + projectCreateYn +
                ", projectUpdateYn=" + projectUpdateYn +
                ", projectDeleteYn=" + projectDeleteYn +
                ", projectReadYn=" + projectReadYn +
                ", fkRolesRoleId=" + fkRolesRoleId +
                ", fkFunctionsFunctionId=" + fkFunctionsFunctionId +
                '}';
    }
}
