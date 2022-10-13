package com.antjump.ant.sprint.controller;

import com.antjump.ant.common.ResponseDto;
import com.antjump.ant.sprint.model.dto.SprintDto;
import com.antjump.ant.sprint.model.service.SprintService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * <pre>
 * Class : SprintController
 * Comment: 스프린트 컨트롤러
 * History
 * ================================================================
 * DATE             AUTHOR           NOTE
 * ----------------------------------------------------------------
 * 2022-10-04       이상학           최초 생성
 * </pre>
 *
 * @author 이상학(최초 작성자)
 * @version 1(클래스 버전)
 * @see
 */

@RestController
@RequestMapping("/sprints")
public class SprintController {

    private final SprintService sprintService;

    @Autowired
    public SprintController(SprintService sprintService) {
        this.sprintService = sprintService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<ResponseDto> selectSprintById(@PathVariable int id) {

        List<SprintDto> sprintList = sprintService.selectSprintById(id);

        System.out.println("sprintList : " + sprintList);

        return ResponseEntity.ok().body(new ResponseDto(HttpStatus.OK, "스프린트 정보 조회 성공", sprintList));
    }

    @GetMapping("")
    public ResponseEntity<ResponseDto> selectSprintsByStatus(@RequestParam(name = "status") String sprintStatus) {

        return ResponseEntity.ok().body(new ResponseDto(HttpStatus.OK, "진행 상태에 따른 스프린트 조회 성공", sprintService.selectSprintsByStatus(sprintStatus)));
    }

    @PostMapping("")
    public ResponseEntity<ResponseDto> createSprint(@RequestBody SprintDto sprintDto) {

        System.out.println("스프린트 생성 : " + sprintDto);
        return ResponseEntity.ok().body(new ResponseDto(HttpStatus.CREATED, "스프린트 생성 성공", sprintService.createSprint(sprintDto)));
    }

    @PutMapping("/{id}/start")
    public ResponseEntity<ResponseDto> startSprint(@PathVariable int id, @RequestBody SprintDto sprintDto) {

        sprintDto.setSprintId(id);

        return ResponseEntity.ok().body(new ResponseDto(HttpStatus.OK, "스프린트 시작 성공", sprintService.startSprint(sprintDto)));
    }

    @PatchMapping("/{id}/alarm")
    public ResponseEntity<ResponseDto> modifySprintAlarm(@PathVariable int id, @RequestBody SprintDto sprintDto) {

        sprintDto.setSprintId(id);

        return ResponseEntity.ok().body(new ResponseDto(HttpStatus.OK, "알림 주기 수정 성공", sprintService.modifySprintAlarm(sprintDto)));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ResponseDto> deleteSprint(@PathVariable int id) {

        return ResponseEntity.ok().body(new ResponseDto(HttpStatus.OK, "스프린트 삭제 성공", sprintService.deleteSprint(id)));
    }

    @PutMapping("/{id}/close")
    public ResponseEntity<ResponseDto> closeSprint(@PathVariable int id) {

        return ResponseEntity.ok().body(new ResponseDto(HttpStatus.OK, "스프린트 완료 성공", sprintService.closeSprint(id)));
    }

}