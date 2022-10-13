package com.antjump.ant.goods.dto;

import java.sql.Date;
import java.sql.Timestamp;

/**
 * <pre>
 * Class : GoodsPossesionsListDTO
 * Comment: 전송하기 위해 사용한 객체
 * History
 * ================================================================
 * DATE             AUTHOR           NOTE
 * ----------------------------------------------------------------
 * 2022-10-11       부시연           최초 생성
 * </pre>
 *
 * @author 부시연(최초 작성자)
 * @version 1(클래스 버전)
 */
public class GoodsPossesionsListDTO {
    private int goodsPossessionId;
    private String goodsName;
    private Timestamp paymentTime;

    public GoodsPossesionsListDTO() {
    }

    public GoodsPossesionsListDTO(int goodsPossessionId, String goodsName, Timestamp paymentTime) {
        this.goodsPossessionId = goodsPossessionId;
        this.goodsName = goodsName;
        this.paymentTime = paymentTime;
    }

    public int getGoodsPossessionId() {
        return goodsPossessionId;
    }

    public void setGoodsPossessionId(int goodsPossessionId) {
        this.goodsPossessionId = goodsPossessionId;
    }

    public String getGoodsName() {
        return goodsName;
    }

    public void setGoodsName(String goodsName) {
        this.goodsName = goodsName;
    }

    public Timestamp getPaymentTime() {
        return paymentTime;
    }

    public void setPaymentTime(Timestamp paymentTime) {
        this.paymentTime = paymentTime;
    }

    @Override
    public String toString() {
        return "GoodsPossesionsListDTO{" +
                "goodsPossessionId=" + goodsPossessionId +
                ", goodsName='" + goodsName + '\'' +
                ", paymentTime=" + paymentTime +
                '}';
    }

}