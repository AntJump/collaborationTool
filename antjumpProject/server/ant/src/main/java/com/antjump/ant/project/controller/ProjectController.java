package com.antjump.ant.project.controller;

import com.antjump.ant.common.ResponseDto;
import com.antjump.ant.member.dto.MemberDto;
import com.antjump.ant.project.dto.*;
import com.antjump.ant.project.paging.ResultsDtoWithPaging;
import com.antjump.ant.project.paging.ProjectSelectCriteria;
import com.antjump.ant.project.service.ProjectService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static com.antjump.ant.project.utils.DateUtil.getCurrentDateWithFormating;
import static com.antjump.ant.project.paging.ProjectPagenation.getPagingInfo;

/**
 * <pre>
 * Class : ProjectController
 * Comment: 프로젝트, 프로젝트 팀원 관련 로직을 수행할 컨틀로러 입니다
 * History
 * ================================================================
 * DATE             AUTHOR           NOTE
 * ----------------------------------------------------------------
 * 2022-10-03       최윤서           최초 생성
 * 2022-10-06       최윤서           프로젝트 CRUD 컨트롤러 작성 완료
 * 2022-10-07       최윤서           프로젝트 팀원 CRUD 컨트롤러 작성 시작
 * </pre>
 *
 * @author 최윤서
 * @version 1
 * @see
 */

@Controller
@RequestMapping("/")
public class ProjectController {

    private final ProjectService projectService;

    public ProjectController(ProjectService projectService){
        this.projectService = projectService;
    }

    @GetMapping("/projects-all")
    public ResponseEntity<ResponseDto> selectAllProjectListWithPaging(@RequestParam(name = "currentPage", defaultValue = "1") int currentPage,
                                                                      @RequestParam(name="limit") int limit,
                                                                      @RequestParam(name="buttonCount") int buttonCount,
                                                                      @RequestParam(name="user") int userId){

        System.out.println("==============[ProjectController] selectAllProjectListWithPaging ======================");
        System.out.println("currentPage:"+currentPage+", limit:"+limit+", buttonCount:"+buttonCount);


        // 모든 프로젝트 수를 읽어와
        int totalCount = projectService.selectAllProjectTotalCount(userId);
        System.out.println("totalCount:"+totalCount);


        // 페이징 처리 정보 계산 -> 그 외 조회 조건을 가져다 SelectCriteria 객체 생성
        ProjectSelectCriteria projectSelectCriteria = new ProjectSelectCriteria(getPagingInfo(limit, currentPage, buttonCount, totalCount),null, userId);
        System.out.println("selectCriteria:"+ projectSelectCriteria);

        // 조회 조건을 가지고 내가 참여중인 모든 프로젝트 조회
        List<ProjectDto> projectList = projectService.selectAllProjectListWithPaging(projectSelectCriteria);
        System.out.println("projectList:"+projectList);
        return ResponseEntity.ok().body(
                new ResponseDto(
                        HttpStatus.OK
                        , "모든 프로젝트 목록 조회 성공"
                        , new ResultsDtoWithPaging(projectList, projectSelectCriteria.getPagingInfo())
                )
        );
    }

    @GetMapping("/projects-my")
    public ResponseEntity<ResponseDto> selectMyProjectListWithPaging(@RequestParam(name = "currentPage", defaultValue = "1") int currentPage,
                                                                      @RequestParam(name="limit") int limit,
                                                                      @RequestParam(name="buttonCount") int buttonCount,
                                                                      @RequestParam(name = "status") String status,
                                                                     @RequestParam(name="user") int userId){

        System.out.println("==============[ProjectController] selectMyProjectListWithPaging ======================");
        System.out.println("currentPage:"+currentPage+", limit:"+limit+", buttonCount:"+buttonCount+", status:"+status);

        ProjectSelectCriteria projectSelectCriteria = new ProjectSelectCriteria();
        projectSelectCriteria.setUser(userId);
        projectSelectCriteria.setStatus(status);
        System.out.println("selectCriteria:"+ projectSelectCriteria);

        // 모든 프로젝트 수를 읽어와
        int totalCount = projectService.selectMyProjectTotalCount(projectSelectCriteria);
        System.out.println("totalCount:"+totalCount);

        // 페이징 처리 정보를 계산해 SelectCriteria 객체 생성
        projectSelectCriteria.setPagingInfo(getPagingInfo(limit, currentPage, buttonCount, totalCount));

        System.out.println("selectCriteria:"+ projectSelectCriteria);
        // 조회 조건을 가지고 내가 참여중인 모든 프로젝트 조회
        List<ProjectDto> projectList = projectService.selectMyProjectListWithPaging(projectSelectCriteria);
        System.out.println("projectList:"+projectList);
        return ResponseEntity.ok().body(
                new ResponseDto(
                        HttpStatus.OK
                        , "내 프로젝트 목록 조회 성공"
                        , new ResultsDtoWithPaging(projectList, projectSelectCriteria.getPagingInfo())
                )
        );
    }

    @GetMapping("/projects/{id}")
    public ResponseEntity<ResponseDto> selectProjectInfoById(@PathVariable("id") int projectId){
        return ResponseEntity.ok().body(
                new ResponseDto(
                        HttpStatus.OK
                        , String.valueOf(projectId)+"번 프로젝트 조회 성공"
                        ,  projectService.selectProjectById(projectId)
                )
        );
    }

    @PostMapping("/projects" )
    public ResponseEntity<ResponseDto> createProject(@RequestBody ProjectDto projectDto,
                                                     @RequestParam(value = "user") int userId){

        // 생성자(PM) id 세팅
        projectDto.setFkMembersMemberId(userId);

        // 생성한 날짜(현재 날짜) 세팅
        projectDto.setProjectProduceDate(getCurrentDateWithFormating("yyyy-MM-dd"));

        return ResponseEntity.ok().body(
                new ResponseDto(
                        HttpStatus.OK
                        , "프로젝트 생성 성공?"
                        ,  projectService.createProject(projectDto)
                )
        );
    }

    @PutMapping ("/projects/{id}")
    public ResponseEntity<ResponseDto> modifyProject(@RequestBody ProjectDto projectDto,
                                                     @PathVariable("id") int projectId){
        projectDto.setProjectId(projectId);
        return ResponseEntity.ok().body(
                new ResponseDto(
                        HttpStatus.OK
                        , "프로젝트 수정 성공?"
                        ,  projectService.modifyProject(projectDto)
                )
        );
    }

    /* 프로젝트 완전 삭제 api */
    @DeleteMapping  ("/projects/{id}")
    public ResponseEntity<ResponseDto> deleteProject(@PathVariable("id") int projectId){

        return ResponseEntity.ok().body(
                new ResponseDto(
                        HttpStatus.OK
                        , String.valueOf(projectId)+"번 프로젝트 삭제 성공?"
                        ,  projectService.deleteProject(projectId)
                )
        );
    }


    /* 프로젝트 임시 삭제 api */
    @PatchMapping  ("/projects/{id}/temp-delete")
    public ResponseEntity<ResponseDto> temporarilyDeleteProject(@PathVariable("id") int projectId){

        return ResponseEntity.ok().body(
                new ResponseDto(
                        HttpStatus.OK
                        , String.valueOf(projectId)+"번 프로젝트 삭제 성공?"
                        ,  projectService.temporarilyDeleteProject(projectId)
                )
        );
    }



    @PatchMapping("/projects/{id}")
    public ResponseEntity<ResponseDto> restoreProject(@PathVariable("id") int projectId){

        return ResponseEntity.ok().body(
                new ResponseDto(
                        HttpStatus.OK
                        , String.valueOf(projectId)+"번 프로젝트 복원 성공?"
                        ,  projectService.restoreProject(projectId)
                )
        );
    }


    @GetMapping("/project-members/user")
    public ResponseEntity<ResponseDto> selectProjectMemberInfoByUserId(@RequestParam(value = "projectId") int projectId,
                                                                       @RequestParam(value = "user") int userId){

        ProjectMemberDto projectMemberDto = new ProjectMemberDto();
        projectMemberDto.setFkMembersMemberId(userId);
        projectMemberDto.setFkProjectsProjectId(projectId);

        return ResponseEntity.ok().body(
                new ResponseDto(
                        HttpStatus.OK
                        , "접속 유저의 프로젝트 팀원 정보 조회 성공"
                        ,  projectService.selectProjectMember(projectMemberDto)
                )
        );
    }


    @GetMapping("/project-members")
    public ResponseEntity<ResponseDto> selectProjectMemberList(@RequestParam(value = "projectId") int projectId){
        return ResponseEntity.ok().body(
                new ResponseDto(
                        HttpStatus.OK
                        , "프로젝트 팀원 목록 조회 성공"
                        ,  projectService.selectProjectMemberList(projectId)
                )
        );
    }



    @PatchMapping("/project-members/{id}")
    public ResponseEntity<ResponseDto> modifyRoleOfProjectMember(@PathVariable(value = "id") int projectMemberId,
                                                                 @RequestParam(value = "roleId") int roleId){


        ProjectMemberDto projectMemberDto = new ProjectMemberDto();
        projectMemberDto.setProjectMemberId(projectMemberId);
        projectMemberDto.setFkRolesRoleId(roleId);

        return ResponseEntity.ok().body(
                new ResponseDto(
                        HttpStatus.OK
                        , String.valueOf(projectMemberId)+"번 팀원 역할 변경 성공"
                        , projectService.modifyRoleOfProjectMember(projectMemberDto)
                )
        );
    }

    @GetMapping("/project-roles")
    public ResponseEntity<ResponseDto> selectProjectRoleList(){
        return ResponseEntity.ok().body(
                new ResponseDto(
                        HttpStatus.OK
                        , "프로젝트 역할 리스트 조회 성공"
                        , projectService.selectProjectRoleList()
                )
        );
    }

    @GetMapping("/project-members/{id}/right")
    public ResponseEntity<ResponseDto> selectAcceptRightListOfProjectMember( @PathVariable(value = "id") int projectMemberId,
                                                                         @RequestParam(value="function") String functionCategory
                                                                        /*, @AuthenticationPrincipal MemberDto user*/){


        Map<String, Object> map = new HashMap<>();
        map.put("projectMemberId", projectMemberId);
        map.put("functionCategory", functionCategory);

        return ResponseEntity.ok().body(
                new ResponseDto(
                        HttpStatus.OK
                        , "프로젝트 팀원 역할과 기능에 따른 권한 조회 성공 "
                        , projectService.selectAcceptRightListOfProjectMember(map)
                )
        );

    }




}
