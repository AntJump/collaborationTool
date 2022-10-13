package com.antjump.ant.calendar.controller;

import com.antjump.ant.calendar.dto.CalendarDTO;
import com.antjump.ant.calendar.service.CalendarService;
import com.antjump.ant.common.ResponseDto;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * <pre>
 * Class : CalendarController
 * Comment: 캘린더 통합 컨트롤러
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

@RestController
@RequestMapping("/calendar")
public class CalendarController {

    private static final Logger log = LoggerFactory.getLogger(CalendarController.class);

    private final CalendarService calendarService;

    @Autowired
    public CalendarController(CalendarService calendarService) { this.calendarService = calendarService; }

    /* 일정 전체 조회 */
    @GetMapping("/plan")
    public ResponseEntity<ResponseDto> findAllPlan() {

        return ResponseEntity.ok().body(new ResponseDto(HttpStatus.OK,
                "조회 성공", calendarService.findAllPlan()));
    }

    /* 일정 추가 */
    @PostMapping("/plan")
    public ResponseEntity<ResponseDto> insertPlan(@RequestBody CalendarDTO calendarDTO) {

        return ResponseEntity.ok().body(new ResponseDto(HttpStatus.OK,
                "일정 추가 성공", calendarService.insertPlan(calendarDTO)));
    }

    /* 일정 수정 */
    @PutMapping("/plan")
    public ResponseEntity<ResponseDto> updatePlan(@RequestBody CalendarDTO calendarDTO) {

        return ResponseEntity.ok().body(new ResponseDto(HttpStatus.OK,
                "일정 수정 성공", calendarService.updatePlan(calendarDTO)));
    }

    /* 일정 삭제 */
    @DeleteMapping("/plan/{calendarId}")
    public ResponseEntity<ResponseDto> deletePlan(@PathVariable int calendarId) {

        return ResponseEntity.ok().body(new ResponseDto(HttpStatus.OK,
                "일정 삭제 성공", calendarService.deletePlan(calendarId)));
    }

    /* 일정 id로 일정 조회 */
    @GetMapping("/plan/{calendarId}")
    public ResponseEntity<ResponseDto> findPlanById(@PathVariable int calendarId) {

        return ResponseEntity.ok().body(new ResponseDto(HttpStatus.OK,
                "일정 조회 성공", calendarService.findPlanById(calendarId)));
    }

}
