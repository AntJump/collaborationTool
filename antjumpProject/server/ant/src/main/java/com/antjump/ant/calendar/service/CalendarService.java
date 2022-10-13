package com.antjump.ant.calendar.service;

import com.antjump.ant.calendar.dao.CalendarMapper;
import com.antjump.ant.calendar.dto.CalendarDTO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * <pre>
 * Class : CalendarService
 * Comment: 캘린더 service
 * History
 * ================================================================
 * DATE             AUTHOR           NOTE
 * ----------------------------------------------------------------
 * 2022-10-05       최은진           최초 생성
 * </pre>
 *
 * @author 최은진(최초 작성자)
 * @version 1(클래스 버전)
 * @see (참고할 class 또는 외부 url)
 */

@Service
public class CalendarService {

    private static final Logger log = LoggerFactory.getLogger(CalendarService.class);

    private final CalendarMapper calendarMapper;

    public CalendarService(CalendarMapper calendarMapper) { this.calendarMapper = calendarMapper; }

    /* 일정 전체 조회 */
    public List<CalendarDTO> findAllPlan() {

        return calendarMapper.findAllPlan();
    }

    /* 일정 추가 */
    @Transactional
    public Object insertPlan(CalendarDTO calendarDTO) {

        String response = "일정 추가 실패";

        int result = calendarMapper.insertPlan(calendarDTO);

        if(result > 0) {
            response = "일정 추가 성공";
        }

        return response;
    }

    /* 일정 수정 */
    @Transactional
    public Object updatePlan(CalendarDTO calendarDTO) {

        String response = "일정 수정 실패";

        int result = calendarMapper.updatePlan(calendarDTO);

        if(result > 0) {
            response = "일정 수정 성공";
        }

        return response;
    }

    /* 일정 삭제 */
    @Transactional
    public Object deletePlan(int calendarId) {

        int result = calendarMapper.deletePlan(calendarId);

        return (result > 0) ? "일정 삭제 성공" : "일정 삭제 실패";
    }

    /* 일정 id로 일정 조회 */
    public Object findPlanById(int calendarId) {

        return calendarMapper.findPlanById(calendarId);
    }

}
