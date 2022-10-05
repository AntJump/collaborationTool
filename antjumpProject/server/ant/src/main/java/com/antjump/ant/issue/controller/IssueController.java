package com.antjump.ant.issue.controller;

import com.antjump.ant.common.ResponseDto;
import com.antjump.ant.issue.model.dto.IssueDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.antjump.ant.issue.model.service.IssueService;

/**
 * <pre>
 * Class : IssueController
 * Comment: 이슈 및 하위 이슈에 관련된 로직을 수행하는 컨트롤러입니다.
 * History
 * ================================================================
 * DATE             AUTHOR           NOTE
 * ----------------------------------------------------------------
 * 2022-10-05       도연재           최초 생성
 * </pre>
 *
 * @author 홍길동(최초 작성자)
 * @version 1(클래스 버전)
 * @see
 */

@RestController
@RequestMapping("/issues")
public class IssueController {

    private final IssueService issueService;

    @Autowired
    public IssueController (IssueService issueService){
        this.issueService = issueService;
    }

    @GetMapping("/")
    public ResponseEntity <ResponseDto> selectIssues(){

        return ResponseEntity.ok().body(new ResponseDto(HttpStatus.OK, "이슈 조회 성공",  issueService.selectIssues()));
    }

    @PostMapping("/{issueId}")
    public ResponseEntity <ResponseDto> createIssue(@ModelAttribute IssueDto issueDto){

        return ResponseEntity.ok().body(new ResponseDto(HttpStatus.OK, "이슈 생성 성공",  issueService.createIssue()));
    }

    @GetMapping("/")
    public ResponseEntity <ResponseDto> selectIssueById(){

        return ResponseEntity.ok().body(new ResponseDto(HttpStatus.OK, "이슈 상세정보 조회 성공",  issueService.selectIssueById()));
    }

    @PutMapping()
    public ResponseEntity <ResponseDto> modifyIssue(){

        return ResponseEntity.ok().body(new ResponseDto(HttpStatus.OK, "이슈 수정 조회 성공",  issueService.modifyIssue()));
    }


}





/**
package com.antjump.ant.remembrance.controller;

        import com.antjump.ant.common.ResponseDto;
        import com.antjump.ant.remembrance.model.dto.RemembranceDto;
        import com.antjump.ant.remembrance.model.service.RemembranceService;
        import org.springframework.beans.factory.annotation.Autowired;
        import org.springframework.http.HttpStatus;
        import org.springframework.http.ResponseEntity;
        import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/remembrance")
public class RemembranceController {

    private final RemembranceService remembranceService;

    @Autowired
    public RemembranceController(RemembranceService remembranceService) {
        this.remembranceService = remembranceService;
    }

    @GetMapping("/{sprintId}")
    public ResponseEntity<ResponseDto> selectRemembrances(@PathVariable int sprintId) {

        return ResponseEntity.ok().body(new ResponseDto(HttpStatus.OK, "데일리 회고 목록 조회 성공", remembranceService.selectRemembrances(sprintId)));
    }

    @GetMapping("/{remembranceId}")
    public ResponseEntity<ResponseDto> selectArticle(@PathVariable int remembranceId, @RequestParam(name = "remembranceArticle") String remembranceArticle) {

        return ResponseEntity.ok().body(new ResponseDto(HttpStatus.OK, "회고 항목 조회 성공", remembranceService.selectArticle(remembranceId, remembranceArticle)));
    }

    @GetMapping("/")
    public ResponseEntity<ResponseDto> selectFinishedRemembrances(@RequestParam(name = "completedStatus") String completedStatus) {

        return ResponseEntity.ok().body(new ResponseDto(HttpStatus.OK, "완료된 데일리 회고 조회 성공", remembranceService.selectFinishedRemembrances(completedStatus)));
    }

//    @PostMapping("/{sprintId}")
//    public ResponseEntity<ResponseDto> createRemembrance(@PathVariable int sprintId, @RequestBody RemembranceDto remembranceDto) {
//
//        return ResponseEntity.ok().body(new ResponseDto(HttpStatus.OK, "데일리 회고 생성", remembranceService.createRemembrance(remembranceDto)));
//    }

    @PostMapping("/{remembranceId}")
    public ResponseEntity<ResponseDto> createArticle(@PathVariable int remembranceId, @RequestParam(name = "remembranceArticle") String remembranceArticle) {

        return ResponseEntity.ok().body(new ResponseDto(HttpStatus.OK, "회고 항목 생성 성공", remembranceService.createArticle(remembranceId, remembranceArticle)));
    }

}
 */