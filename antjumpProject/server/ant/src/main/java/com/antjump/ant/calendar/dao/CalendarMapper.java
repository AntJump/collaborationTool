package com.antjump.ant.calendar.dao;

import com.antjump.ant.calendar.dto.CalendarDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * <pre>
 * Class : CalendarMapper
 * Comment: 클래스에 대한 간단 설명
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

@Mapper
public interface CalendarMapper {

    /* 모든 일정 조회 */
    List<CalendarDTO> findAllPlan();

    /* 일정 추가 */
    int insertPlan(CalendarDTO calendarDTO);

    /* 일정 수정 */
    int updatePlan(CalendarDTO calendarDTO);

    /* 일정 삭제 */
    int deletePlan(int calendarId);

    /* 일정 id로 일정 조회 */
    Object findPlanById(int calendarId);

}
