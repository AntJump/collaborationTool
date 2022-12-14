package com.antjump.ant.goods.service;

import com.antjump.ant.faq.dto.FAQListDTO;
import com.antjump.ant.goods.dao.GoodsMapper;
import com.antjump.ant.goods.dto.GoodsDetailDTO;
import com.antjump.ant.goods.dto.GoodsPossesionsListDTO;
import com.antjump.ant.goods.dto.GoodsPossessionDetailDTO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * <pre>
 * Class : GoodsService
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
public class GoodsService {

    private static final Logger log = LoggerFactory.getLogger(GoodsService.class);

    private final GoodsMapper goodsMapper;

    public GoodsService(GoodsMapper goodsMapper) {
        this.goodsMapper = goodsMapper;
    }

    public Object selectGoodsDetail(String goodsId) {
        log.info("[QNAService] selectGoods Start ===============");

        GoodsDetailDTO goodsDetailDTO = goodsMapper.selectGoodsDetail(goodsId);

        log.info("[QNAService] selectGoods End ===============");

        return goodsDetailDTO;
    }

    public List<GoodsPossesionsListDTO> selectGoodsPossessionsList(String memberId) {

        log.info("[GoodsService] selectGoodsPossessionsList Start ===================================");

        List<GoodsPossesionsListDTO> goodsPossesionsList = goodsMapper.selectGoodsPossessionsList(memberId);

        log.info("[GoodsService] selectGoodsPossessionsList End ===================================");

        return goodsPossesionsList;
    }

    public Object selectGoodsPossessionDetail(String possessionId) {

        log.info("[GoodsService] selectGoodsPossessionsList Start ===================================");

        GoodsPossessionDetailDTO goodsPossessionDetailDTO = goodsMapper.selectGoodsPossessionDetail(possessionId);

        log.info("[GoodsService] selectGoodsPossessionsList End ===================================");

        return goodsPossessionDetailDTO;
    }
}
