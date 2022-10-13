package com.antjump.ant.goods.dao;

import com.antjump.ant.goods.dto.GoodsDetailDTO;
import com.antjump.ant.goods.dto.GoodsPossesionsListDTO;
import com.antjump.ant.goods.dto.GoodsPossessionDetailDTO;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

/**
 * <pre>
 * Class : GoodsMapper
 * Comment: 인터페이스로 컴파일 시에 GoodsMapper.xml과 합쳐져 동작한다.
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
public interface GoodsMapper {
    GoodsDetailDTO selectGoodsDetail(String goodsId);

    List<GoodsPossesionsListDTO> selectGoodsPossessionsList(String memberId);

    GoodsPossessionDetailDTO selectGoodsPossessionDetail(String possessionId);
}
