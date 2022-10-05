package com.antjump.ant.sprint.controller;

import com.antjump.ant.common.ResponseDto;
import com.antjump.ant.sprint.model.dto.AlarmDto;
import com.antjump.ant.sprint.model.dto.SprintAndAlarmDto;
import com.antjump.ant.sprint.model.dto.SprintDto;
import com.antjump.ant.sprint.model.service.SprintService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/sprints")
public class SprintController {

    private final SprintService sprintService;

    @Autowired
    public SprintController(SprintService sprintService) {
        this.sprintService = sprintService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<ResponseDto> selectSprintById(@PathVariable String id) {

        return ResponseEntity.ok().body(new ResponseDto(HttpStatus.OK, "스프린트 정보 조회 성공", sprintService.selectSprintById(id)));
    }

    @GetMapping("/")
    public ResponseEntity<ResponseDto> selectSprintsByStatus(@RequestParam(name = "sprintStatus") String sprintStatus) {

        return ResponseEntity.ok().body(new ResponseDto(HttpStatus.OK, "진행 상태에 따른 스프린트 조회 성공", sprintService.selectSprintsByStatus(sprintStatus)));
    }

    @PostMapping("/")
    public ResponseEntity<ResponseDto> createSprint(@RequestBody SprintDto sprintDto) {

        return ResponseEntity.ok().body(new ResponseDto(HttpStatus.OK, "스프린트 생성 성공", sprintService.createSprint(sprintDto)));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ResponseDto> startSprint(@PathVariable(name = "id") int id, @RequestBody SprintAndAlarmDto sprintAndAlarmDto) {

        return ResponseEntity.ok().body(new ResponseDto(HttpStatus.OK, "스프린트 시작 성공", sprintService.startSprint(id, sprintAndAlarmDto)));
    }

    @PatchMapping("/alarm")
    public ResponseEntity<ResponseDto> modifySprintAlarm(@RequestBody AlarmDto alarmDto) {

        return ResponseEntity.ok().body(new ResponseDto(HttpStatus.OK, "알림 주기 수정 성공", sprintService.modifySprintAlarm(alarmDto)));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<ResponseDto> deleteSprint(@PathVariable int id) {

        return ResponseEntity.ok().body(new ResponseDto(HttpStatus.OK, "스프린트 삭제 성공", sprintService.deleteSprint(id)));
    }

}