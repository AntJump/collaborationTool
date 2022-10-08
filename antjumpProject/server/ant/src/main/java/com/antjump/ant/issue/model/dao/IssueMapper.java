package com.antjump.ant.issue.model.dao;

import com.antjump.ant.issue.model.dto.IssueDTO;
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

     List<IssueDTO> selectIssues();

     int createIssue(IssueDTO newIssue);

     int deleteIssue(String issueName);
}
