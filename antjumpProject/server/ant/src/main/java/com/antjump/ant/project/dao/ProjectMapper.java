package com.antjump.ant.project.dao;

import com.antjump.ant.member.dto.MemberDto;
import com.antjump.ant.project.dto.*;
import com.antjump.ant.project.paging.SelectCriteria;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

/**
 * <pre>
 * Class : ProjectMapper
 * Comment: 클래스에 대한 간단 설명
 * History
 * ================================================================
 * DATE             AUTHOR           NOTE
 * ----------------------------------------------------------------
 * 2022-10-05       최윤서           최초 생성
 * 2022-10-06       최윤서           프로젝트 CRUD 매퍼 코드 작성 완료
 * </pre>
 *
 * @author 최윤서
 * @version 1
 * @see 참고할 class 또는 외부 url
 */

@Mapper
public interface ProjectMapper {
    int selectAllProjectTotalCount(int userId);

    List<ProjectDto> selectAllProjectListWithPaging(SelectCriteria selectCriteria);

    int selectMyProjectTotalCount(SelectCriteria selectCriteria);

    List<ProjectDto> selectMyProjectListWithPaging(SelectCriteria selectCriteria);

    ProjectAndMemberDto selectProjectById(int projectId);

    int createProject(ProjectDto projectDto);

    int modifyProject(ProjectDto projectDto);

    int deleteProject(int projectId);

    int restoreProject(int projectId);

    int registProjectMember(ProjectMemberDto projectMemberDto);

    int temporarilyDeleteProject(int projectId);

    List<ProjectMemberAndRoleAndMemberDto> selectProjectMemberList(int projectId);

    ProjectMemberAndRoleAndMemberDto selectProjectMember(ProjectMemberDto projectMemberDto);

    int modifyRoleOfProjectMember(ProjectMemberDto projectMemberDto);


    List<ProjectGradeAndFunctionDto> selectAcceptRightListOfProjectMember(Map<String, Object> map);

    List<ProjectRoleDto> selectProjectRoleList();

    MemberDto findMemberIdByEmail(String email);
}
