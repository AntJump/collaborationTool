package com.antjump.ant.faq.service;

import com.antjump.ant.faq.dao.FAQMapper;
import com.antjump.ant.faq.dto.FAQCreateDTO;
import com.antjump.ant.faq.dto.FAQDetailDTO;
import com.antjump.ant.faq.dto.FAQListDTO;
import com.antjump.ant.faq.dto.FAQModifyDTO;
import com.antjump.ant.qna.dto.QNACreateDTO;
import com.antjump.ant.qna.dto.QNADetailDTO;
import com.antjump.ant.qna.dto.QNAModifyDTO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * <pre>
 * Class : FAQService
 * Comment:  연결을 열거나 닫고, 비지니스 로직 수행하거나 트랜잭션 제어
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
@Service
public class FAQService {

    private static final Logger log = LoggerFactory.getLogger(FAQService.class);

    private final FAQMapper faqMapper;

    public FAQService(FAQMapper faqMapper) { this.faqMapper = faqMapper; }

    public List<FAQListDTO> selectFaqList() {

        log.info("[FAQService] selectFaqList Start ===================================");

        List<FAQListDTO> faqList = faqMapper.selectFaqList();

        log.info("[FAQService] selectFaqList End ===================================");

        return faqList;
    };


    public FAQDetailDTO selectFAQ(String faqId) {
        log.info("[QNAService] selectFAQ Start ===============");

        FAQDetailDTO faqDetailDTO = faqMapper.selectFAQ(faqId);
        log.info("[QNAService] selectFAQ End ===============");

        return faqDetailDTO;

    }

    @Transactional
    public Object insertFAQ(FAQCreateDTO faqCreateDTO) {

        log.info("[FAQService] insertFAQ Start ===============");
        log.info("[FAQService] faqCreateDTO : " + faqCreateDTO);

        int result = faqMapper.insertFAQ(faqCreateDTO);

        return (result > 0) ? "FAQ 입력 성공" : "FAQ 입력 실패";
    }

    @Transactional
    public Object updateFAQ(FAQModifyDTO faqModifyDTO) {

        log.info("[FAQService] updateFAQ Start ===============");
        log.info("[FAQService] faqModifyDTO : " + faqModifyDTO);

        int result = faqMapper.updateFAQ(faqModifyDTO);

        return (result > 0) ? "FAQ 수정 성공" : "FAQ 수정 실패";

    }

    @Transactional
    public Object deleteFAQ(String faqId) {

        log.info("[FAQService] deleteFAQ Start ===============");
        int result = faqMapper.deleteFAQ(faqId);

        log.info("[FAQService] deleteFAQ End ===============");

        return (result > 0) ? "FAQ 삭제 성공" : "FAQ 삭제 실패";

    }


}
