package com.antjump.ant.remembrance.controller;

import com.amazonaws.Response;
import com.antjump.ant.common.ResponseDto;
import com.antjump.ant.remembrance.model.dto.ArticleDto;
import com.antjump.ant.remembrance.model.dto.RemembranceAndArticleDto;
import com.antjump.ant.remembrance.model.dto.RemembranceDto;
import com.antjump.ant.remembrance.model.service.RemembranceService;
import org.apache.el.util.Validation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.sql.Date;

/**
 * <pre>
 * Class : RemembranceController
 * Comment: 데일리 회고 컨트롤러
 * History
 * ================================================================
 * DATE             AUTHOR           NOTE
 * ----------------------------------------------------------------
 * 2022-10-04       이상학           최초 생성
 * </pre>
 *
 * @author 이상학(최초 작성자)
 * @version 1(클래스 버전)
 */
@RestController
@RequestMapping("/remembrances")
public class RemembranceController {

    private final RemembranceService remembranceService;

    @Autowired
    public RemembranceController(RemembranceService remembranceService) {
        this.remembranceService = remembranceService;
    }

    @GetMapping("")
    public ResponseEntity<ResponseDto> selectRemembrances(@RequestParam(name="fkSprintsRemembrances") int fkSprintsRemembrances) {

        return ResponseEntity.ok().body(new ResponseDto(HttpStatus.OK, "회고 리스트 조회 성공", remembranceService.selectRemembrances(fkSprintsRemembrances)));
    }

    @GetMapping("/{id}")
    public ResponseEntity<ResponseDto> selectArticleByRemembranceId(@PathVariable(value = "id") int id, @RequestParam(name="articleType") String articleType) {

        ArticleDto articleDto = new ArticleDto();
        articleDto.setFkRemembrancesArticles(id);
        articleDto.setArticleType(articleType);
        return ResponseEntity.ok().body(new ResponseDto(HttpStatus.OK, "회고 항목 조회 성공", remembranceService.selectArticleByRemembranceId(articleDto)));
    }


    @PostMapping("")
    public ResponseEntity<ResponseDto> createRemembrance(@RequestParam(name="fkSprintsRemembrances") int fkSprintsRemembrances) {

        RemembranceDto remembranceDto = new RemembranceDto();
        remembranceDto.setFkSprintsRemembrances(fkSprintsRemembrances);
        return ResponseEntity.ok().body(new ResponseDto(HttpStatus.OK, "데일리 회고 생성 성공", remembranceService.createRemembrances(remembranceDto)));
    }

    @PostMapping("/")
    public ResponseEntity<ResponseDto> createArticles(@RequestParam(name="sprintId") int sprintId) {

        ArticleDto articleDto = new ArticleDto();
        articleDto.setFkRemembrancesArticles(sprintId);
        return ResponseEntity.ok().body(new ResponseDto(HttpStatus.OK, "회고 항목 생성 성공", remembranceService.createArticles(articleDto)));
    }

    @PutMapping("/{id}")
    public ResponseEntity<ResponseDto> updateArticle(@PathVariable int id, @RequestParam(name="articleId") int articleId, @RequestBody ArticleDto articleDto) {

        articleDto.setFkRemembrancesArticles(id);
        articleDto.setArticleId(articleId);

        return ResponseEntity.ok().body(new ResponseDto(HttpStatus.OK, "화고 항목 수정 성공", remembranceService.updateArticle(articleDto)));

    }

    @DeleteMapping("")
    public ResponseEntity<ResponseDto> deleteRemembrance(@PathVariable int id, @RequestParam(name="sprintId") int sprintId, @RequestParam(name="remembranceDate") Date remembranceDate){

        RemembranceDto remembranceDto = new RemembranceDto();
        remembranceDto.setRemembranceId(id);
        remembranceDto.setFkSprintsRemembrances(sprintId);
        remembranceDto.setRemembranceDate(remembranceDate);
        return ResponseEntity.ok().body(new ResponseDto(HttpStatus.OK, "데일리 회고 삭제 성공", remembranceService.deleteRemembrance(remembranceDto)));
    }

}

