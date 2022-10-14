package com.antjump.ant.remembrance.model.service;

import com.antjump.ant.remembrance.model.dao.RemembranceMapper;
import com.antjump.ant.remembrance.model.dto.ArticleDto;
import com.antjump.ant.remembrance.model.dto.RemembranceAndArticleDto;
import com.antjump.ant.remembrance.model.dto.RemembranceDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * <pre>
 * Class : RemembranceService
 * Comment: 클래스에 대한 간단 설명
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
@Service
public class RemembranceService {

    private final RemembranceMapper remembranceMapper;

    @Autowired
    public RemembranceService(RemembranceMapper remembranceMapper) {
        this.remembranceMapper = remembranceMapper;
    }

    public Object selectRemembrances(int fkSprintsRemembrances) {
        List<RemembranceAndArticleDto> remembranceList = remembranceMapper.selectRemembrances(fkSprintsRemembrances);

        return remembranceList;
    }

    public Object selectArticleByRemembranceId(ArticleDto articleDto) {

        List<ArticleDto> articleInfo = remembranceMapper.selectArticleByRemembranceId(articleDto);

        return articleInfo;
    }

    @Transactional
    public Object createRemembrances(RemembranceDto remembranceDto) {

        String response = "회고 생성 실패";
        int result = remembranceMapper.createRemembrances(remembranceDto);

        if(result > 0) {
            response = "회고 생성 성공";
        }

        return response;
    }

    @Transactional
    public Object createArticles(ArticleDto articleDto) {

        String response = "회고 생성 실패";
        int result = 0;

        articleDto.setArticleType("Liked");
        result += remembranceMapper.createArticles(articleDto);

        articleDto.setArticleType("Learned");
        result += remembranceMapper.createArticles(articleDto);

        articleDto.setArticleType("Lacked");
        result += remembranceMapper.createArticles(articleDto);

        if(result > 2) {
            response = "회고 생성 성공";
        }

        return response;

    }

    @Transactional
    public Object updateArticle(ArticleDto articleDto) {

        String response = "항목 수정 실패";

        int result = remembranceMapper.updateArticle(articleDto);

        if(result > 0) {
            response = "항목 수정 성공";
        }

        return response;

    }

    @Transactional
    public Object deleteRemembrance(RemembranceDto remembranceDto) {

        String response = "회고 삭제 실패";

        int result = remembranceMapper.deleteRemembrance(remembranceDto);

        if(result > 0) {
            response = "회고 삭제 성공";
        }

        return response;
    }

}

