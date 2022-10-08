package com.antjump.ant.remembrance.model.service;

import com.antjump.ant.remembrance.model.dao.RemembranceMapper;
import com.antjump.ant.remembrance.model.dto.RemembranceDto;
import com.antjump.ant.sprint.model.dao.SprintMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.sql.Date;
import java.util.List;

/**
 * <pre>
 * Class : RemembranceService
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
public class RemembranceService {

    private final RemembranceMapper remembranceMapper;

    @Autowired
    public RemembranceService(RemembranceMapper remembranceMapper) {
        this.remembranceMapper = remembranceMapper;
    }

    public Object selectRemembrances(int sprintId) {
        List<RemembranceDto> remembranceList = remembranceMapper.selectRemembrances(sprintId);

        return remembranceList;
    }

    public Object selectRemembranceInfo(RemembranceDto remembranceInfo) {

        List<RemembranceDto> remembranceList = remembranceMapper.selectRemembranceInfo(remembranceInfo);

        return remembranceList;
    }

//    public Object selectFinishedRemembrances(String sprintId) {
//
//        List<RemembranceDto> finishedRemembranceList = remembranceMapper.selectFinishedRemembrances(sprintId);
//
//        return finishedRemembranceList;
//    }

    @Transactional
    public Object createRemembrances(int sprintId, Date date) {

        String response = "회고 항목 생성 실패";
        RemembranceDto remembranceDto = new RemembranceDto();

        int result = 0;

        remembranceDto.setFkSprintsRemembrances(sprintId);
        remembranceDto.setRemembranceDate(date);

        remembranceDto.setRemembranceArticle("Liked");
        result += remembranceMapper.createRemembrances(remembranceDto);

        remembranceDto.setRemembranceArticle("Learned");
        result += remembranceMapper.createRemembrances(remembranceDto);

        remembranceDto.setRemembranceArticle("Lacked");
        result += remembranceMapper.createRemembrances(remembranceDto);

        if(result > 2) {
            response = "회고 항목 생성 성공";
        }
        return response;
    }

    @Transactional
    public Object updateRemembrance(int id, RemembranceDto remembranceDto) {

        String response = "회고 수정 실패";

        remembranceDto.setRemembranceId(id);

        int result = remembranceMapper.updateRemembrance(remembranceDto);

        if(result > 0) {
            response = "회고 수정 성공";
        }

        return response;
    }

    @Transactional
    public Object deleteRemembrances(Date remembranceDate) {

        String response = "회고 삭제 실패";

        int result = remembranceMapper.deleteRemembrances(remembranceDate);

        if(result > 0) {
            response="회고 삭제 성공";
        }

        return response;
    }
}

