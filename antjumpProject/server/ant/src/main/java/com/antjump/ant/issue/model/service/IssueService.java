package com.antjump.ant.issue.model.service;

import com.antjump.ant.issue.model.dao.IssueMapper;
import com.antjump.ant.issue.model.dto.IssueDTO;
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


    public List<IssueDTO> selectIssues() {

        List<IssueDTO> issueList = issueMapper.selectIssues();

        return issueList;

    }

    @Transactional
    public boolean createIssue(IssueDTO newIssue) throws Exception {

        int result = issueMapper.createIssue(newIssue);
        if(result <= 0) {
            throw new Exception("이슈 생성 실패!");
        }

        return true;
    }

    @Transactional
    public boolean deleteIssue(String issueName) throws Exception {

        int result = issueMapper.deleteIssue(issueName);
        if(result <= 0) {
            throw new Exception("이슈 삭제 실패!");
        }

        return true;
    }
//
//    public Object selectIssueById(int issueId) {
//    }
//
//    public Object modifyIssue(IssueDTO issueDTO) {
//    }
//
//    public Object deleteIssue(int issueId) {
//    }
}
