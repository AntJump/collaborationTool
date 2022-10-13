package com.antjump.ant.sprint.model.dao;

import com.antjump.ant.sprint.model.dto.SprintDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * <pre>
 * Class : SprintMapper
 * Comment: 클래스에 대한 간단 설명
 * History
 * ================================================================
 * DATE             AUTHOR           NOTE
 * ----------------------------------------------------------------
 * 2022-10-05       홍길동           최초 생성
 * </pre>
 *
 * @author 홍길동(최초 작성자)
 * @version 1(클래스 버전)
 */

@Mapper
public interface SprintMapper {


    List<SprintDto> selectSprintById(SprintDto sprintInfo);

    List<SprintDto> selectSprintsByStatus(SprintDto sprintInfo);

    List<SprintDto> selectSprintList(String projectId);

    int modifySprintAlarm(SprintDto sprintDto);

    int startSprint(SprintDto sprintDto);

    int createSprint(SprintDto sprintDto);

    int deleteSprint(int id);

    int closeSprint(int id);

}
