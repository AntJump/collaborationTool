package com.antjump.ant.faq.dao;

import com.antjump.ant.faq.dto.FAQCreateDTO;
import com.antjump.ant.faq.dto.FAQDetailDTO;
import com.antjump.ant.faq.dto.FAQListDTO;
import com.antjump.ant.faq.dto.FAQModifyDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * <pre>
 * Class : FAQMapper
 * Comment: 인터페이스로 컴파일 시에 FAQMapper.xml과 합쳐져 동작한다.
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
public interface FAQMapper {
    List<FAQListDTO> selectFaqList();

    FAQDetailDTO selectFAQ(String faqId);

    int insertFAQ(FAQCreateDTO faqCreateDTO);

    int updateFAQ(FAQModifyDTO faqModifyDTO);

    int deleteFAQ(String faqId);
}
