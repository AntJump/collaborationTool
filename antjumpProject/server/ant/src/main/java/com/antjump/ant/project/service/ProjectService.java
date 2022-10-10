package com.antjump.ant.project.service;

import com.antjump.ant.project.dao.ProjectMapper;
import com.antjump.ant.project.dto.*;
import com.antjump.ant.project.paging.SelectCriteria;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 * Class : ProjectService
 * Comment: 프로젝트 관련 서비스 입니다
 * History
 * ================================================================
 * DATE             AUTHOR           NOTE
 * ----------------------------------------------------------------
 * 2022-10-04       최윤서           최초 생성
 * 2022-10-06       최윤서           프로젝트 CRUD 서비스 구현
 * 2022-10-07       최윤서           프로젝트 팀원 CRUD 서비스 구현 시작
 * </pre>
 *
 * @author 최윤서
 * @version 1
 * @see 참고할 class 또는 외부 url
 */
@Service
public class ProjectService {

    private final ProjectMapper projectMapper;

    public ProjectService(ProjectMapper projectMapper) {
        this.projectMapper = projectMapper;
    }
    public int selectAllProjectTotalCount(int userId) {
        return projectMapper.selectAllProjectTotalCount(userId);
    }


    public List<ProjectDto> selectAllProjectListWithPaging(SelectCriteria selectCriteria) {
        return projectMapper.selectAllProjectListWithPaging(selectCriteria);
    }

    public int selectMyProjectTotalCount(SelectCriteria selectCriteria) {
        return projectMapper.selectMyProjectTotalCount(selectCriteria);
    }

    public List<ProjectDto> selectMyProjectListWithPaging(SelectCriteria selectCriteria) {
        return projectMapper.selectMyProjectListWithPaging(selectCriteria);
    }

    public ProjectAndMemberDto selectProjectById(int projectId) {
        return projectMapper.selectProjectById(projectId);
    }

    @Transactional
    public Object createProject(ProjectDto projectDto) {
        int createResult = projectMapper.createProject(projectDto);

        boolean registProjectManagerResult = false;
        if(createResult >0){
            // PM 정보 생성
            ProjectMemberDto projectMemberDto = new ProjectMemberDto();
            projectMemberDto.setFkProjectsProjectId(projectDto.getProjectId());
            projectMemberDto.setFkRolesRoleId(1);
            projectMemberDto.setFkMembersMemberId(projectDto.getFkMembersMemberId());

            // PM 정보 등록
            registProjectManagerResult = registProjectMember(projectMemberDto);
        }else{
            return  "프로젝트 생성 실패 ㅠ";
        }

        return registProjectManagerResult ? "프로젝트 생성 및 PM 등록 완료" : "PM 등록 실패" ;
    }

    public Object modifyProject(ProjectDto projectDto) {
        int result = projectMapper.modifyProject(projectDto);
        return (result > 0) ? "프로젝트 수정 성공!" : "프로젝트 수정 실패 ㅠ";
    }

    public Object temporarilyDeleteProject(int projectId){
        int result = projectMapper.temporarilyDeleteProject(projectId);
        return (result > 0 ) ? "프로젝트 임시 삭제 성공!" : "프로젝트 임시 삭제 실패 ㅠ";
     }
    public Object deleteProject(int projectId) {
        int result = projectMapper.deleteProject(projectId);
        return (result > 0) ? "프로젝트 삭제 성공!" : "프로젝트 삭제 실패 ㅠ";
    }

    public Object restoreProject(int projectId) {
        int result = projectMapper.restoreProject(projectId);
        return (result > 0) ? "프로젝트 복원 성공!" : "프로젝트 복원 실패 ㅠ";
    }






    public Object selectProjectMemberList(int projectId) {
        return projectMapper.selectProjectMemberList(projectId);
    }

    public Object selectProjectMember(ProjectMemberDto projectMemberDto) {
        return projectMapper.selectProjectMember(projectMemberDto);
    }

    @Transactional
    public Object modifyRoleOfProjectMember(ProjectMemberDto projectMemberDto) {
        int result = projectMapper.modifyRoleOfProjectMember(projectMemberDto);
        return result > 0 ? "역할 변경 성공!" : "역할 변경 실패 ㅠ";
    }

    public Object selectAcceptRightListOfProjectMember(Map<String, Object> map) {
        return projectMapper.selectAcceptRightListOfProjectMember(map);
    }

    public Object selectProjectRoleList(){
        return projectMapper.selectProjectRoleList();
    }



    @Transactional
    public boolean registProjectMember(ProjectMemberDto projectMemberDto){
        int result = projectMapper.registProjectMember(projectMemberDto);
         return (result > 0) ? true : false;
    }
}
