package com.antjump.ant.goods.dto;

/**
 * <pre>
 * Class : GoodsDetailDTO
 * Comment: 클래스에 대한 간단 설명
 * History
 * ================================================================
 * DATE             AUTHOR           NOTE
 * ----------------------------------------------------------------
 * 2022-10-06       부시연           최초 생성
 * </pre>
 *
 * @author 부시연(최초 작성자)
 * @version 1(클래스 버전)
 */
public class GoodsDetailDTO {

    private String goodsId;
    private String goodsName;
    private int goodsAmount;
    private String goodsPeriod;

    public GoodsDetailDTO() {
    }

    public GoodsDetailDTO(String goodsId, String goodsName, int goodsAmount, String goodsPeriod) {
        this.goodsId = goodsId;
        this.goodsName = goodsName;
        this.goodsAmount = goodsAmount;
        this.goodsPeriod = goodsPeriod;
    }

    public String getGoodsId() {
        return goodsId;
    }

    public void setGoodsId(String goodsId) {
        this.goodsId = goodsId;
    }

    public String getGoodsName() {
        return goodsName;
    }

    public void setGoodsName(String goodsName) {
        this.goodsName = goodsName;
    }

    public int getGoodsAmount() {
        return goodsAmount;
    }

    public void setGoodsAmount(int goodsAmount) {
        this.goodsAmount = goodsAmount;
    }

    public String getGoodsPeriod() {
        return goodsPeriod;
    }

    public void setGoodsPeriod(String goodsPeriod) {
        this.goodsPeriod = goodsPeriod;
    }

    @Override
    public String toString() {
        return "GoodsDetailDTO{" +
                "goodsId='" + goodsId + '\'' +
                ", goodsName='" + goodsName + '\'' +
                ", goodsAmount=" + goodsAmount +
                ", goodsPeriod='" + goodsPeriod + '\'' +
                '}';
    }

}
