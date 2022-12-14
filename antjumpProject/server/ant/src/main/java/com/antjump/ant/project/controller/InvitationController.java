package com.antjump.ant.project.controller;

import com.antjump.ant.common.ResponseDto;
import com.antjump.ant.project.dto.InvitationDto;
import com.antjump.ant.project.dto.ProjectAndMemberDto;
import com.antjump.ant.project.dto.ProjectDto;
import com.antjump.ant.project.service.InvitationService;
import com.antjump.ant.project.service.JwtService;
import com.antjump.ant.project.service.MailService;
import com.antjump.ant.project.service.ProjectService;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import javax.mail.MessagingException;

/**
 * <pre>
 * Class : InviteController
 * Comment:  프로젝트 팀원 초대 관련 컨트롤러 입니다
 * History
 * ================================================================
 * DATE             AUTHOR           NOTE
 * ----------------------------------------------------------------
 * 2022-10-03       최윤서           최초 생성
 * </pre>
 *
 * @author 최윤서
 * @version 1
 */

@Controller
@RequestMapping("/invitations")
public class InvitationController {

    private final ProjectService projectService;
    private final InvitationService invitationService;
    private final JwtService jwtService;
    private final MailService mailService;

    public InvitationController(ProjectService projectService, InvitationService invitationService, JwtService jwtService, MailService mailService){
        this.projectService = projectService;
        this.invitationService = invitationService;
        this.jwtService = jwtService;
        this.mailService = mailService;
    }
    @PostMapping("")
    ResponseEntity<ResponseDto> inviteProjectMemberByEmail(@RequestBody InvitationDto invitationDto,@Value("${spring.mail.username}") String senderEmail) throws MessagingException {

        System.out.println("[InvitationController] inviteProjectMemberByEmail==================");
        System.out.println("invitationDto : "+invitationDto);

        // jwt 초대 토큰 발행
        String invitationToken = jwtService.generateInvitationToken(invitationDto);
        System.out.println("invitationToken: "+invitationToken);

        ProjectAndMemberDto projectAndMemberDto = projectService.selectProjectById(invitationDto.getFkProjectsProjectId());
        System.out.println("projectAndMemberDto: "+projectAndMemberDto);

        // 메일 발송
        mailService.sendMail(senderEmail,invitationDto.getInvitationEmail(), "ANT 협업툴으로부터 온 초대장", "<h1> '"+projectAndMemberDto.getProjectName()+"' 프로젝트에 초대 되었습니다</h1> <a href=http://localhost:3000/invited/"+invitationToken+">초대 링크 클릭</a>");

        return ResponseEntity.ok().body(
                new ResponseDto(
                        HttpStatus.OK
                        , "프로젝트 초대 성공?"
                        , invitationService.registInvitationInfo(invitationDto)
                )
        );
    }

    @PatchMapping("/{token}")
    ResponseEntity<ResponseDto> verifyInvitationByToken(@PathVariable(value = "token") String invitationToken){

        System.out.println("[InvitationController] verifyInvitationByToken ====================");
        System.out.println("token :" + invitationToken);

        // 초대 토큰 검증
        InvitationDto invitationDto = null;
        if(jwtService.verifyInvitationToken(invitationToken)){
            invitationDto =  jwtService.getInvitationDtoFromToken(invitationToken);
            System.out.println("invitationDto :" + invitationDto);
        } else{
            return ResponseEntity.ok().body(new ResponseDto(HttpStatus.OK, "초대 토큰 검증", "실패"));
        }

       // 초대 확인 처리
       int result = invitationService.invitationConfirmation(invitationDto);
        System.out.println("invitationConfirmation result:" + result);



        // 팀원 등록 처리
        return ResponseEntity.ok().body(
                new ResponseDto(
                        HttpStatus.OK
                        , "프로젝트 팀원 등록 성공?"
                        ,  invitationService.registerProjectMemberByInvitation(invitationDto)
                )
        );

    }

    @GetMapping("")
    ResponseEntity<ResponseDto> selectInvitationList(@RequestParam(value = "projectId") int projectId){
        return ResponseEntity.ok().body(
                new ResponseDto(
                        HttpStatus.OK
                        , "프로젝트 초대 대기 목록 조회 성공"
                        , invitationService.selectInvitationList(projectId)
                )
        );
    }

    @DeleteMapping("/{id}")
    ResponseEntity<ResponseDto> deleteInvitation(@PathVariable(value = "id") int invitationId){
        return ResponseEntity.ok().body(
                new ResponseDto(
                        HttpStatus.OK
                        , "프로젝트 초대 정보 삭제"
                        , invitationService.deleteInvitationInfoById(invitationId)
                )
        );
    }

    @GetMapping("/check/{email}")
    public ResponseEntity<ResponseDto> selectMemberByEmail(@PathVariable(value = "email") String email){
        return ResponseEntity.ok().body(
                new ResponseDto(
                        HttpStatus.OK
                        , "회원 id 조회 성공"
                        ,  projectService.findMemberIdByEmail(email)
                )
        );
    }
}
