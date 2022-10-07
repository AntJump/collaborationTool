package com.antjump.ant.project.dao;

import com.antjump.ant.project.dto.ProjectAndMemberDto;
import com.antjump.ant.project.dto.ProjectDto;
import com.antjump.ant.project.dto.ProjectMemberDto;
import com.antjump.ant.project.paging.SelectCriteria;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * <pre>
 * Class : ProjectMapper
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
}
