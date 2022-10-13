package com.antjump.ant.project.dto;

/**
 * <pre>
 * Class : InvitationDto
 * Comment: 클래스에 대한 간단 설명
 * History
 * ================================================================
 * DATE             AUTHOR           NOTE
 * ----------------------------------------------------------------
 * 2022-10-10       최윤서           최초 생성
 * </pre>
 *
 * @author 최윤서
 * @version 1
 * @see 참고할 class 또는 외부 url
 */
public class InvitationDto {
    private int invitationId;
    private String invitationEmail;
    private char invitationAuthYn;
    private int fkProjectsProjectId;

    public InvitationDto() {}
    public InvitationDto(int invitationId, String invitationEmail, char invitationAuthYn, int fkProjectsProjectId) {
        this.invitationId = invitationId;
        this.invitationEmail = invitationEmail;
        this.invitationAuthYn = invitationAuthYn;
        this.fkProjectsProjectId = fkProjectsProjectId;
    }

    public int getInvitationId() {
        return invitationId;
    }

    public void setInvitationId(int invitationId) {
        this.invitationId = invitationId;
    }

    public String getInvitationEmail() {
        return invitationEmail;
    }

    public void setInvitationEmail(String invitationEmail) {
        this.invitationEmail = invitationEmail;
    }

    public char getInvitationAuthYn() {
        return invitationAuthYn;
    }

    public void setInvitationAuthYn(char invitationAuthYn) {
        this.invitationAuthYn = invitationAuthYn;
    }

    public int getFkProjectsProjectId() {
        return fkProjectsProjectId;
    }

    public void setFkProjectsProjectId(int fkProjectsProjectId) {
        this.fkProjectsProjectId = fkProjectsProjectId;
    }

    @Override
    public String toString() {
        return "InvitationDto{" +
                "invitationId=" + invitationId +
                ", invitationEmail='" + invitationEmail + '\'' +
                ", invitationAuthYn=" + invitationAuthYn +
                ", fkProjectsProjectId=" + fkProjectsProjectId +
                '}';
    }
}
