package com.antjump.ant.issue.controller;

import com.antjump.ant.common.ResponseDto;
import com.antjump.ant.issue.model.dto.IssueDTO;
import com.antjump.ant.issue.model.dto.IssueReplyDTO;
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

//    @GetMapping("")
//    public ResponseEntity <ResponseDto> selectIssues(){
//
//        return ResponseEntity.ok().body(new ResponseDto(HttpStatus.OK, "백로그 목록 내 이슈 조회 성공",  issueService.selectIssues()));
//    }

    @GetMapping("")
    public ResponseEntity <ResponseDto> selectIssues(){

        return ResponseEntity.ok().body(new ResponseDto(HttpStatus.OK, "백로그 목록 내 이슈 조회 성공",  issueService.selectIssues()));
    }

    @GetMapping("/completed")
    public ResponseEntity <ResponseDto> selectCompletedIssues(){

        return ResponseEntity.ok().body(new ResponseDto(HttpStatus.OK, "완료된 백로그 목록 내 이슈 조회 성공",  issueService.selectCompletedIssues()));
    }

   @PostMapping("")
    public ResponseEntity <ResponseDto> createIssue(@RequestBody IssueDTO newIssue) throws Exception {

        return ResponseEntity.ok().body(new ResponseDto(HttpStatus.OK, "이슈 생성 성공",  issueService.createIssue(newIssue)));
    }


    @GetMapping("/{issueId}")
    public ResponseEntity <ResponseDto> selectIssueById(@PathVariable int issueId){

        return ResponseEntity.ok().body(new ResponseDto(HttpStatus.OK, "이슈 상세정보 조회 성공",  issueService.selectIssueById(issueId)));
    }

    @PutMapping("/{issueId}")
    public ResponseEntity <ResponseDto> modifyIssue(@PathVariable int issueId, @RequestBody IssueDTO issueDTO) throws Exception{

        issueDTO.setIssueId(issueId);

        return ResponseEntity.ok().body(new ResponseDto(HttpStatus.OK, "이슈 수정 성공",  issueService.modifyIssue(issueDTO)));
    }
    @DeleteMapping("/{issueId}")
    public ResponseEntity <ResponseDto> deleteIssue(@PathVariable int issueId) throws Exception{

        return ResponseEntity.ok().body(new ResponseDto(HttpStatus.OK, "이슈 삭제 성공",  issueService.deleteIssue(issueId)));
    }

    @PatchMapping("/{issueId}")
    public ResponseEntity <ResponseDto> modifyIssueStatus(@PathVariable int issueId, @RequestBody IssueDTO issueDTO) throws  Exception{

        issueDTO.setIssueId(issueId);
        return ResponseEntity.ok().body(new ResponseDto(HttpStatus.OK, "스프린트에 포함된 이슈 수정 성공",  issueService.modifyIssueStatus(issueDTO)));
    }

    @GetMapping("/{issueId}/replies")
    public ResponseEntity <ResponseDto> selectIssueReply(@PathVariable int issueId){

        return ResponseEntity.ok().body(new ResponseDto(HttpStatus.OK, "이슈 내 댓글 조회 성공",  issueService.selectIssueReply(issueId)));
    }

    @PostMapping("/{issueId}/replies")
    public ResponseEntity <ResponseDto> createIssueReply(@PathVariable int issueId, @RequestBody IssueReplyDTO newIssueReply) throws Exception {

        newIssueReply.setIssueId(issueId);

        return ResponseEntity.ok().body(new ResponseDto(HttpStatus.OK, "이슈 내 댓글 생성 성공",  issueService.createIssueReply(newIssueReply)));
    }

    @PutMapping("/{issueId}/replies")
    public ResponseEntity <ResponseDto> modifyIssueReply(@PathVariable int issueReplyId, @RequestBody IssueReplyDTO issueReplyDTO) throws Exception{

        issueReplyDTO.setIssueReplyId(issueReplyId);

        return ResponseEntity.ok().body(new ResponseDto(HttpStatus.OK, "댓글 수정 성공",  issueService.modifyIssueReply(issueReplyDTO)));
    }
    @DeleteMapping("/{issueId}/replies")
    public ResponseEntity <ResponseDto> deleteIssueReply(@PathVariable int issueReplyId) throws  Exception{

        return ResponseEntity.ok().body(new ResponseDto(HttpStatus.OK, "댓글 삭제 성공",  issueService.deleteIssueReply(issueReplyId)));
    }

}

