package com.antjump.ant.qna.controller;

import com.antjump.ant.qna.service.QNAService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * <pre>
 * Class : QNAController
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
@RequestMapping("")
public class QNAController {

    private static final Logger log = LoggerFactory.getLogger(QNAController.class);

    private final QNAService qnaService;

    public QNAController(QNAService qnaService) {
        this.qnaService = qnaService;
    }
}
