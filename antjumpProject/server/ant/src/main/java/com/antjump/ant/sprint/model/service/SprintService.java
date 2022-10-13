package com.antjump.ant.sprint.model.service;

import com.antjump.ant.sprint.model.dao.SprintMapper;
import com.antjump.ant.sprint.model.dto.SprintDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * <pre>
 * Class : SprintService
 * Comment: 클래스에 대한 간단 설명
 * History
 * ================================================================
 * DATE             AUTHOR           NOTE
 * ----------------------------------------------------------------
 * 2022-10-04       이상학           최초 생성
 * </pre>
 *
 * @author 이상학(최초 작성자)
 * @version 1(클래스 버전)
 */

@Service
public class SprintService {

    private final SprintMapper sprintMapper;

    @Autowired
    public SprintService(SprintMapper sprintMapper){
        this.sprintMapper = sprintMapper;
    }

    public List<SprintDto> selectSprintById(SprintDto sprintInfo) {

        List<SprintDto> sprintList = sprintMapper.selectSprintById(sprintInfo);


        return sprintList;
    }

    public Object selectSprintsByStatus(SprintDto sprintInfo) {


        List<SprintDto> sprintList = sprintMapper.selectSprintsByStatus(sprintInfo);


        return sprintList;
    }

    public Object selectSprintList(String projectId) {

        List<SprintDto> sprintList = sprintMapper.selectSprintList(projectId);

        return sprintList;
    }

    @Transactional
    public Object modifySprintAlarm(SprintDto sprintDto) {

        String response = "알람 수정 실패";

        int result = sprintMapper.modifySprintAlarm(sprintDto);

        if(result > 0) {
            response = "알람 수정 성공";
        }

        return response;
    }

    @Transactional
    public Object createSprint(SprintDto sprintDto) {

        String response = "스프린트 생성 실패";

        int result = sprintMapper.createSprint(sprintDto);

        if(result > 0) {
            response = "스프린트 생성 성공";
        }

        return response;
    }

    @Transactional
    public Object startSprint(SprintDto sprintDto) {

        String response = "스프린트 시작 실패";

        int result = sprintMapper.startSprint(sprintDto);

        if(result > 0) {
            response = "스프린트 시작 성공";
        }

        return response;
    }

    @Transactional
    public Object deleteSprint(int id) {

        String response = "스프린트 삭제 실패";

        int result = sprintMapper.deleteSprint(id);

        if(result > 0) {
            response = "스프린트 삭제 성공";
        }

        return response;
    }

    public Object closeSprint(int id) {

        String response = "스프린트 완료 실패";

        int result = sprintMapper.closeSprint(id);

        if(result > 0) {
            response = "스프린트 완료 성공";
        }

        return response;
    }
}
