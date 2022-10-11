package com.antjump.ant.issue.model.dao;

import com.antjump.ant.issue.model.dto.IssueDTO;
import com.antjump.ant.issue.model.dto.IssueReplyDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * <pre>
 * Class : IssueMapper
 * Comment: 클래스에 대한 간단 설명
 * History
 * ================================================================
 * DATE             AUTHOR           NOTE
 * ----------------------------------------------------------------
 * 2022-10-08       홍길동           최초 생성
 * </pre>
 *
 * @author 홍길동(최초 작성자)
 * @version 1(클래스 버전)
 * @see
 */

@Mapper
public interface IssueMapper {

     //백로그 목록 조회
     List<IssueDTO> selectIssues();

     //완료된 백로그 목록 조회
     List<IssueDTO> selectCompletedIssues();

     //이슈 상제 조회
     List<IssueDTO> selectIssueById(int issueId);

     //이슈 생성
     int createIssue(IssueDTO newIssue);

     //이슈 수정
     int modifyIssue(IssueDTO issueDTO);

     //이슈 삭제
     int deleteIssue(int issueId);

     //스프린트에 포함된 이슈의 진행상태 변경
     int modifyIssueStatus(IssueDTO issueDTO);

     //댓글 조회
     List<IssueReplyDTO> selectIssueReply(int issueId);

     //댓글 생성
     int createIssueReply(IssueReplyDTO newIssueReply);

     //댓글 수정
     int modifyIssueReply(IssueReplyDTO issueReplyDTO);

     //댓글 삭제
     int deleteIssueReply(int issueReplyId);

}
