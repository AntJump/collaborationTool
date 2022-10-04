package com.antjump.ant.qna.controller;

import com.antjump.ant.common.ResponseDto;
import com.antjump.ant.common.paging.Pagenation;
import com.antjump.ant.common.paging.ResponseDtoWithPaging;
import com.antjump.ant.common.paging.SelectCriteria;
import com.antjump.ant.qna.service.QNAService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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
@RequestMapping("qnas")
public class QNAController {

    private static final Logger log = LoggerFactory.getLogger(QNAController.class);

    private final QNAService qnaService;

    public QNAController(QNAService qnaService) {
        this.qnaService = qnaService;
    }

    @GetMapping("list")
    public ResponseEntity<ResponseDto> selectQNAListWithPaging(@RequestParam(name = "offset", defaultValue = "1") String offset) {

        log.info("[QNAController] selectQNAListWithPaging : " + offset);

        int totalCount = qnaService.selectQNATotal();
        int limit = 10;
        int buttonAmount = 5;

        SelectCriteria selectCriteria = Pagenation.getSelectCriteria(Integer.parseInt(offset), totalCount, limit, buttonAmount);

        log.info("[QNAController] selectCriteria : " + selectCriteria);

        ResponseDtoWithPaging responseDtoWithPaging = new ResponseDtoWithPaging();
        responseDtoWithPaging.setPageInfo(selectCriteria);
        responseDtoWithPaging.setData(qnaService.selectQNAListWithPaging(selectCriteria));

        return ResponseEntity.ok().body(new ResponseDto(HttpStatus.OK, "조회 성공", responseDtoWithPaging));

    }
}
