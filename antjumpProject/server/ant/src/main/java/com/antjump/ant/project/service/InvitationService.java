package com.antjump.ant.project.service;

import com.antjump.ant.member.dto.MemberDto;
import com.antjump.ant.project.dao.InvitationMapper;
import com.antjump.ant.project.dao.ProjectMapper;
import com.antjump.ant.project.dto.InvitationDto;
import com.antjump.ant.project.dto.ProjectMemberDto;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

/**
 * <pre>
 * Class : InvitationService
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
@Service
public class InvitationService  {

    private final InvitationMapper invitationMapper;
    private final ProjectMapper projectMapper;
    public InvitationService(InvitationMapper invitationMapper, ProjectMapper projectMapper){
        this.invitationMapper = invitationMapper;
        this.projectMapper = projectMapper;
    }


    public int invitationConfirmation(InvitationDto invitationDto) {
        return invitationMapper.invitationConfirmation(invitationDto);
    }

    @Transactional
    public Object registInvitationInfo(InvitationDto invitationDto) {
        return (invitationMapper.registInvitationInfo(invitationDto) > 0) ? "프로젝트 초대 정보 등록 성공" : "프로젝트 초대 정보 등록 실패" ;
    }

    public boolean checkIsRegisteredByInvitation(InvitationDto invitationDto) {
        int result = invitationMapper.checkIsRegisteredByInvitation(invitationDto);
        return result == 1 ? true : false;
    }


    public Object registerProjectMemberByInvitation(InvitationDto invitationDto) {

        // 회원인지 확인
        MemberDto memberDto = projectMapper.findMemberIdByEmail(invitationDto.getInvitationEmail());
        if(memberDto == null){
            return "회원이 아닙니다";
        }

        // 이미 등록된 팀원 인지 확인
        boolean isRegistered  = checkIsRegisteredByInvitation(invitationDto);
        System.out.println("isRegistered:" + isRegistered);
        if(isRegistered){
            return "이미 "+String.valueOf(invitationDto.getFkProjectsProjectId())+"번 프로젝트에 등록된 회원입니다";
        }


        // 팀원 정보 dto  생성
        ProjectMemberDto projectMemberDto = new ProjectMemberDto();
        projectMemberDto.setFkMembersMemberId(memberDto.getMemberId());
        projectMemberDto.setFkProjectsProjectId(invitationDto.getFkProjectsProjectId());
        projectMemberDto.setFkRolesRoleId(3);

        int result =  projectMapper.registProjectMember(projectMemberDto);
        return (result>0) ? "프로젝트 팀원 등록 성공" : "프로젝트 팀원 등록 실패";
    }

    public Object selectInvitationList(int projectId) {
        return invitationMapper.selectInvitationList(projectId);
    }

    public Object deleteInvitationInfoById(int invitationId ){
        int result = invitationMapper.deleteInvitationInfoById(invitationId);
        return (result>0) ? "초대 정보 삭제 성공" : "초대 정보 삭제 실패";
    }
}
