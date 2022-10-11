package com.antjump.ant.faq.controller;

import com.antjump.ant.common.ResponseDto;
import com.antjump.ant.common.paging.Pagenation;
import com.antjump.ant.common.paging.ResponseDtoWithPaging;
import com.antjump.ant.common.paging.SelectCriteria;
import com.antjump.ant.faq.dto.FAQCreateDTO;
import com.antjump.ant.faq.dto.FAQModifyDTO;
import com.antjump.ant.faq.service.FAQService;
import com.antjump.ant.qna.dto.QNAAdminModifyDTO;
import com.antjump.ant.qna.dto.QNACreateDTO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

/**
 * <pre>
 * Class : FAQController
 * Comment:  뷰 -> 서비스 전달, 유효성 검사, 결과값 뷰로 반환, 로컬 파일 저장 및 변환
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
@RestController
@RequestMapping("faqs")
public class FAQController {

    private static final Logger log = LoggerFactory.getLogger(FAQController.class);

    private final FAQService faqService;

    public FAQController(FAQService faqService) {
        this.faqService = faqService;
    }

    @GetMapping("")
    public ResponseEntity<ResponseDto> selectFaqList() {


        log.info("[FAQController] selectFaqList start ==========");

        return ResponseEntity.ok().body(new ResponseDto(HttpStatus.OK, "조회 성공", faqService.selectFaqList()));
    }

    @GetMapping("{faqId}")
    public ResponseEntity<ResponseDto> selectFAQDetail(@PathVariable String faqId) {

        return ResponseEntity.ok().body(new ResponseDto(HttpStatus.OK, "FAQ 상세 조회 성공", faqService.selectFAQ(faqId)));

    }

    @PostMapping("admin")
    public ResponseEntity<ResponseDto> insertFAQ(@ModelAttribute FAQCreateDTO faqCreateDTO) {

        return ResponseEntity.ok().body(new ResponseDto(HttpStatus.OK, "FAQ 입력 성공", faqService.insertFAQ(faqCreateDTO)));
    }

    @PutMapping("admin")
    public  ResponseEntity<ResponseDto> modifyFAQ(@ModelAttribute FAQModifyDTO faqModifyDTO) {

        return ResponseEntity.ok().body(new ResponseDto(HttpStatus.OK, "FAQ 업데이트 성공", faqService.updateFAQ(faqModifyDTO)));
    }

    @DeleteMapping("{faqId}")
    public ResponseEntity<ResponseDto> deleteFAQ(@PathVariable String faqId) {

        return ResponseEntity.ok().body(new ResponseDto(HttpStatus.OK, "FAQ 삭제 성공", faqService.deleteFAQ(faqId)));
    }
}

