package com.antjump.ant.project.controller;

import com.antjump.ant.common.ResponseDto;
import com.antjump.ant.member.dto.MemberDto;
import com.antjump.ant.project.dto.ProjectDto;
import com.antjump.ant.project.paging.ResultsDtoWithPaging;
import com.antjump.ant.project.paging.SelectCriteria;
import com.antjump.ant.project.service.ProjectService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import java.awt.*;
import java.util.List;

import static com.antjump.ant.project.date.DateOperation.getCurrentDateWithFormating;
import static com.antjump.ant.project.paging.Pagenation.getPagingInfo;

/**
 * <pre>
 * Class : ProjectController
 * Comment: 프로젝트, 프로젝트 팀원 관련 로직을 수행할 컨틀로러 입니다
 * History
 * ================================================================
 * DATE             AUTHOR           NOTE
 * ----------------------------------------------------------------
 * 2022-10-03       최윤서           최초 생성
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
                                                                      @RequestParam(name="buttonCount") int buttonCount
                                                                      /*,@AuthenticationPrincipal MemberDto user*/){

        System.out.println("==============[ProjectController] selectAllProjectListWithPaging ======================");
        System.out.println("currentPage:"+currentPage+", limit:"+limit+", buttonCount:"+buttonCount);


        MemberDto user = new MemberDto();
        user.setMemberId(2);


        // 모든 프로젝트 수를 읽어와
        int totalCount = projectService.selectAllProjectTotalCount(user.getMemberId());
        System.out.println("totalCount:"+totalCount);


        // 페이징 처리 정보 계산 -> 그 외 조회 조건을 가져다 SelectCriteria 객체 생성
        SelectCriteria selectCriteria = new SelectCriteria(getPagingInfo(limit, currentPage, buttonCount, totalCount),null, user.getMemberId());
        System.out.println("selectCriteria:"+selectCriteria);

        // 조회 조건을 가지고 내가 참여중인 모든 프로젝트 조회
        List<ProjectDto> projectList = projectService.selectAllProjectListWithPaging(selectCriteria);
        System.out.println("projectList:"+projectList);
        return ResponseEntity.ok().body(
                new ResponseDto(
                        HttpStatus.OK
                        , "모든 프로젝트 목록 조회 성공"
                        , new ResultsDtoWithPaging(projectList,selectCriteria.getPagingInfo())
                )
        );
    }

    @GetMapping("/projects-my")
    public ResponseEntity<ResponseDto> selectMyProjectListWithPaging(@RequestParam(name = "currentPage", defaultValue = "1") int currentPage,
                                                                      @RequestParam(name="limit") int limit,
                                                                      @RequestParam(name="buttonCount") int buttonCount,
                                                                      @RequestParam(name = "status") String status
                                                                      /*,@AuthenticationPrincipal MemberDto user*/){

        System.out.println("==============[ProjectController] selectMyProjectListWithPaging ======================");
        System.out.println("currentPage:"+currentPage+", limit:"+limit+", buttonCount:"+buttonCount+", status:"+status);
        MemberDto user = new MemberDto();
        user.setMemberId(2);

        SelectCriteria selectCriteria = new SelectCriteria();
        selectCriteria.setUser(user.getMemberId());
        selectCriteria.setStatus(status);
        System.out.println("selectCriteria:"+selectCriteria);

        // 모든 프로젝트 수를 읽어와
        int totalCount = projectService.selectMyProjectTotalCount(selectCriteria);
        System.out.println("totalCount:"+totalCount);

        // 페이징 처리 정보를 계산해 SelectCriteria 객체 생성
        selectCriteria.setPagingInfo(getPagingInfo(limit, currentPage, buttonCount, totalCount));

        System.out.println("selectCriteria:"+selectCriteria);
        // 조회 조건을 가지고 내가 참여중인 모든 프로젝트 조회
        List<ProjectDto> projectList = projectService.selectMyProjectListWithPaging(selectCriteria);
        System.out.println("projectList:"+projectList);
        return ResponseEntity.ok().body(
                new ResponseDto(
                        HttpStatus.OK
                        , "모든 프로젝트 목록 조회 성공"
                        , new ResultsDtoWithPaging(projectList,selectCriteria.getPagingInfo())
                )
        );
    }

    @GetMapping("/projects/{id}")
    public ResponseEntity<ResponseDto> selectProjectById(@PathVariable("id") int projectId){
        return ResponseEntity.ok().body(
                new ResponseDto(
                        HttpStatus.OK
                        , String.valueOf(projectId)+"번 프로젝트 조회 성공"
                        ,  projectService.selectProjectById(projectId)
                )
        );
    }

    @PostMapping("/projects")
    public ResponseEntity<ResponseDto> createProject(@ModelAttribute ProjectDto projectDto/*, @AuthenticationPrincipal MemberDto user*/){

        MemberDto user = new MemberDto();
        user.setMemberId(2);

        // 생성자의 memberId 세팅
        projectDto.setFkMembersMemberId(user.getMemberId());

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
    public ResponseEntity<ResponseDto> modifyProject(@ModelAttribute ProjectDto projectDto, @PathVariable("id") int projectId){
        projectDto.setProjectId(projectId);
        return ResponseEntity.ok().body(
                new ResponseDto(
                        HttpStatus.OK
                        , "프로젝트 수정 성공?"
                        ,  projectService.modifyProject(projectDto)
                )
        );
    }

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

}
