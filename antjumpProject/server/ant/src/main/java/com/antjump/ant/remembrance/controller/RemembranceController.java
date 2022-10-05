//package com.antjump.ant.remembrance.controller;
//
//import com.antjump.ant.common.ResponseDto;
//import com.antjump.ant.remembrance.model.dto.RemembranceDto;
//import com.antjump.ant.remembrance.model.service.RemembranceService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//
///**
// * <pre>
// * Class : RemembranceController
// * Comment: 데일리 회고 컨트롤러
// * History
// * ================================================================
// * DATE             AUTHOR           NOTE
// * ----------------------------------------------------------------
// * 2022-10-04       이상학           최초 생성
// * </pre>
// *
// * @author 이상학(최초 작성자)
// * @version 1(클래스 버전)
// */
//@RestController
//@RequestMapping("/remembrance")
//public class RemembranceController {
//
//    private final RemembranceService remembranceService;
//
//    @Autowired
//    public RemembranceController(RemembranceService remembranceService) {
//        this.remembranceService = remembranceService;
//    }
//
//    @GetMapping("/")
//    public ResponseEntity<ResponseDto> selectRemembrances(@RequestParam(name="sprintId") int sprintId) {
//
//        return ResponseEntity.ok().body(new ResponseDto(HttpStatus.OK, "회고 항목 조회 성공", remembranceService.selectRemembrances(sprintId)));
//    }
//
//    @GetMapping("/{id}")
//    public ResponseEntity<ResponseDto> selectRemembranceInfo(@PathVariable int id, @RequestParam(name = "remembranceArticle") String remembranceArticle) {
//
//        return ResponseEntity.ok().body(new ResponseDto(HttpStatus.OK, "회고 상세 정보 조회 성공", remembranceService.selectArticle(id, remembranceArticle)));
//    }
//
//    @GetMapping("/")
//    public ResponseEntity<ResponseDto> selectFinishedRemembrances(@RequestParam(name = "sprintId") String sprintId, @RequestParam(name = "completedStatus") String completedStatus) {
//
//        return ResponseEntity.ok().body(new ResponseDto(HttpStatus.OK, "완료된 데일리 회고 조회 성공", remembranceService.selectFinishedRemembrances(sprintId, completedStatus)));
//    }
//
//    @PostMapping("/{id}")
//    public ResponseEntity<ResponseDto> createRemembrance(@PathVariable int id, @RequestBody RemembranceDto remembranceDto) {
//
//        return ResponseEntity.ok().body(new ResponseDto(HttpStatus.OK, "회고 항목 생성 성공", remembranceService.createRemembrance(id, remembranceDto)));
//    }
//
//    @PutMapping("{id}")
//    public ResponseEntity<ResponseDto> updateRemembrance(@PathVariable int id, @RequestBody RemembranceDto remembranceDto) {
//
//        return ResponseEntity.ok().body(new ResponseDto(HttpStatus.OK, "회고 항목 수정 완료", remembranceService.updateRemembrance(id, remembranceDto)));
//    }
//
//    @DeleteMapping("{id}")
//    public ResponseEntity<ResponseDto> deleteRemembrance(@PathVariable int id) {
//
//        return ResponseEntity.ok().body(new ResponseDto(HttpStatus.OK, "회고 항목 삭제 완료", remembranceService.deleteRemembrance(id)));
//    }
//}
