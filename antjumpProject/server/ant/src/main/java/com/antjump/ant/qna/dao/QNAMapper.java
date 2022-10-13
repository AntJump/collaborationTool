package com.antjump.ant.qna.dao;

import com.antjump.ant.common.paging.SelectCriteria;
import com.antjump.ant.qna.dto.*;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * <pre>
 * Class : QNAMapper
 * Comment: 인터페이스로 컴파일 시에 QNAMapper.xml과 합쳐져 동작한다.
 * History
 * ================================================================
 * DATE             AUTHOR           NOTE
 * ----------------------------------------------------------------
 * 2022-10-03       부시연           최초 생성
 * </pre>
 *
 * @author 부시연(최초 작성자)
 * @version 1(클래스 버전)
 */
@Mapper
public interface QNAMapper {

    int selectQNATotal();

    List<QNAListDTO> selectQNAListWithPaging(SelectCriteria selectCriteria);

    QNADetailDTO selectQNA(String qnaId);

    int insertQNA(QNACreateDTO qnaCreateDTO);

    int updateQNA(QNAModifyDTO qnaModifyDTO);

    int deleteQNA(String qnaId);

    int insertAdminQNA(QNAAdminCreateDTO qnaAdminCreateDTO);

    int updateAdminQNA(QNAAdminModifyDTO qnaAdminModifyDTO);

    int updateRefQNA(QNAAdminCreateDTO qnaAdminCreateDTO);

    int insertQnaFile(QNACreateDTO qnaCreateDTO);

    void updateQnaFile(QNAModifyDTO qnaModifyDTO);
}
