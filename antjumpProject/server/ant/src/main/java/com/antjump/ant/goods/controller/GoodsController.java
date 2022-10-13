package com.antjump.ant.goods.controller;

import com.antjump.ant.common.ResponseDto;
import com.antjump.ant.goods.service.GoodsService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * <pre>
 * Class : GoodsController
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
@RequestMapping("goods")
public class GoodsController {

    private static final Logger log = LoggerFactory.getLogger(GoodsController.class);

    private final GoodsService goodsService;

    public GoodsController(GoodsService goodsService) {
        this.goodsService = goodsService;
    }

    @GetMapping("{goodsId}")
    public ResponseEntity<ResponseDto> selectGoodsDetail(@PathVariable String goodsId) {

        return ResponseEntity.ok().body(new ResponseDto(HttpStatus.OK, "상품 상세 조회 성공", goodsService.selectGoodsDetail(goodsId)));

    }

    @GetMapping("possession")
    public ResponseEntity<ResponseDto> selectGoodsPossessionsList() {

        return ResponseEntity.ok().body(new ResponseDto(HttpStatus.OK, "보유 상품 리스트 조회 성공", goodsService.selectGoodsPossessionsList()));

    }

    @GetMapping("possession/{possessionId}")
    public ResponseEntity<ResponseDto> selectGoodsPossessionDetail(@PathVariable String possessionId) {

        return ResponseEntity.ok().body(new ResponseDto(HttpStatus.OK, "보유 상품 상세 조회 성공", goodsService.selectGoodsPossessionDetail(possessionId)));

    }
}
