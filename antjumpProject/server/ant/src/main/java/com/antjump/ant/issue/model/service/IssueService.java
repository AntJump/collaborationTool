package com.antjump.ant.issue.model.service;

import com.antjump.ant.issue.model.dao.IssueMapper;
import com.antjump.ant.issue.model.dto.IssueDTO;
import com.antjump.ant.issue.model.dto.IssueReplyDTO;
import com.antjump.ant.sprint.model.dto.SprintDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * <pre>
 * Class : IssueService
 * Comment: 클래스에 대한 간단 설명
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
@Service
public class IssueService {

    private final IssueMapper issueMapper;

    @Autowired
    public IssueService(IssueMapper issueMapper){
        this.issueMapper = issueMapper;
    }

    //이슈목록 조회
    public List<IssueDTO> selectIssues() {

        List<IssueDTO> issueList = issueMapper.selectIssues();

        return issueList;

    }

    //완료된 백로그 목록 조회
    public List<IssueDTO> selectCompletedIssues() {

        List<IssueDTO> completedIssueList = issueMapper.selectCompletedIssues();

        return completedIssueList;

    }

    //이슈 상세조회
    public List<IssueDTO> selectIssueById(int issueId) {

        List<IssueDTO> issueList = issueMapper.selectIssueById(issueId);

        System.out.println("Service issueList : " + issueList);

        return issueList;
    }

    //이슈 생성
    @Transactional
    public boolean createIssue(IssueDTO newIssue) throws Exception {

        int result = issueMapper.createIssue(newIssue);
        if(result <= 0) {
            throw new Exception("이슈 생성 실패!");
        }

        return true;
    }

    //이슈 수정
    @Transactional
    public boolean modifyIssue(IssueDTO issueDTO) throws  Exception {

        int result = issueMapper.modifyIssue(issueDTO);
        if(result <= 0) {
            throw new Exception("이슈 수정 실패!");
        }

        return true;
    }

    //이슈 삭제
    @Transactional
    public boolean deleteIssue(int issueId) throws Exception {

        int result = issueMapper.deleteIssue(issueId);
        if(result <= 0) {
            throw new Exception("이슈 삭제 실패!");
        }

        return true;
    }

    //스프린트에 포함된 이슈의 진행상태 변경
    @Transactional
    public boolean modifyIssueStatus(IssueDTO issueDTO) throws Exception {

        int result = issueMapper.modifyIssueStatus(issueDTO);
        if(result <= 0) {
            throw new Exception("스프린트에 포함된 이슈의 진행상태 변경 실패!");
        }
        return true;
    }

    //이슈 댓글 조회
    public List<IssueReplyDTO> selectIssueReply(int issueId) {

        List<IssueReplyDTO> issueReplyList = issueMapper.selectIssueReply(issueId);

        return issueReplyList;

    }

    //이슈 댓글 생성
    @Transactional
    public boolean createIssueReply(IssueReplyDTO newIssueReply) throws Exception {

        int result = issueMapper.createIssueReply(newIssueReply);
        if(result <= 0) {
            throw new Exception("댓글 생성 실패!");
        }

        return true;
    }

    //이슈 댓글 수정
    @Transactional
    public boolean modifyIssueReply(IssueReplyDTO issueReplyDTO) throws  Exception {

        int result = issueMapper.modifyIssueReply(issueReplyDTO);
        if(result <= 0) {
            throw new Exception("댓글 수정 실패!");
        }

        return true;
    }

    //이슈 댓글 삭제
    @Transactional
    public boolean deleteIssueReply(int issueReplyId) throws Exception {

        int result = issueMapper.deleteIssueReply(issueReplyId);
        if(result <= 0) {
            throw new Exception("댓글 삭제 실패!");
        }

        return true;
    }
}
