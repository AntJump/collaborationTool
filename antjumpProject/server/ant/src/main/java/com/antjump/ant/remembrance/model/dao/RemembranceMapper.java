package com.antjump.ant.remembrance.model.dao;

import com.antjump.ant.remembrance.model.dto.ArticleDto;
import com.antjump.ant.remembrance.model.dto.RemembranceAndArticleDto;
import com.antjump.ant.remembrance.model.dto.RemembranceDto;
import org.apache.ibatis.annotations.Mapper;

import java.sql.Date;
import java.util.List;

/**
 * <pre>
 * Class : RemembranceMapper
 * Comment: 클래스에 대한 간단 설명
 * History
 * ================================================================
 * DATE             AUTHOR           NOTE
 * ----------------------------------------------------------------
 * 2022-10-07       홍길동           최초 생성
 * </pre>
 *
 * @author 홍길동(최초 작성자)
 * @version 1(클래스 버전)
 */
@Mapper
public interface RemembranceMapper {

    List<RemembranceAndArticleDto> selectRemembrances(int fkSprintsRemembrances);

    List<ArticleDto> selectArticleByRemembranceId(ArticleDto articleDto);

    int createRemembrances(RemembranceDto remembranceDto);

    int createArticles(ArticleDto articleDto);

    int updateArticle(ArticleDto articleDto);

    int deleteRemembrance(RemembranceDto remembranceDto);

//    List<RemembranceDto> selectRemembranceInfo(RemembranceDto remembranceInfo);
//
//    List<RemembranceDto> selectFinishedRemembrances(String sprintId);
//
//    int createRemembrances(RemembranceDto remembranceDto);
//
//    int updateRemembrance(RemembranceDto remembranceDto);
//
//    int deleteRemembrances(Date remembranceDate);
}
