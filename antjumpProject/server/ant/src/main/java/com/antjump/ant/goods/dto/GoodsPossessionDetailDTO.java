package com.antjump.ant.goods.dto;

import java.sql.Date;
import java.sql.Timestamp;

/**
 * <pre>
 * Class : GoodsPossessionDTO
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
public class GoodsPossessionDetailDTO {
    private int goodsPossessionId;
    private char goodsUseYn;
    private Date goodsStartDate;
    private Date goodsEndDate;
    private int goodsRemainingDate;
    private String goodsName;
    private Timestamp paymentTime;

    public GoodsPossessionDetailDTO() {
    }

    public GoodsPossessionDetailDTO(int goodsPossessionId, char goodsUseYn, Date goodsStartDate, Date goodsEndDate, int goodsRemainingDate, String goodsName, Timestamp paymentTime) {
        this.goodsPossessionId = goodsPossessionId;
        this.goodsUseYn = goodsUseYn;
        this.goodsStartDate = goodsStartDate;
        this.goodsEndDate = goodsEndDate;
        this.goodsRemainingDate = goodsRemainingDate;
        this.goodsName = goodsName;
        this.paymentTime = paymentTime;
    }

    public int getGoodsPossessionId() {
        return goodsPossessionId;
    }

    public void setGoodsPossessionId(int goodsPossessionId) {
        this.goodsPossessionId = goodsPossessionId;
    }

    public char getGoodsUseYn() {
        return goodsUseYn;
    }

    public void setGoodsUseYn(char goodsUseYn) {
        this.goodsUseYn = goodsUseYn;
    }

    public Date getGoodsStartDate() {
        return goodsStartDate;
    }

    public void setGoodsStartDate(Date goodsStartDate) {
        this.goodsStartDate = goodsStartDate;
    }

    public Date getGoodsEndDate() {
        return goodsEndDate;
    }

    public void setGoodsEndDate(Date goodsEndDate) {
        this.goodsEndDate = goodsEndDate;
    }

    public int getGoodsRemainingDate() {
        return goodsRemainingDate;
    }

    public void setGoodsRemainingDate(int goodsRemainingDate) {
        this.goodsRemainingDate = goodsRemainingDate;
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
        return "GoodsPossessionDetailDTO{" +
                "goodsPossessionId=" + goodsPossessionId +
                ", goodsUseYn=" + goodsUseYn +
                ", goodsStartDate=" + goodsStartDate +
                ", goodsEndDate=" + goodsEndDate +
                ", goodsRemainingDate=" + goodsRemainingDate +
                ", goodsName='" + goodsName + '\'' +
                ", paymentTime=" + paymentTime +
                '}';
    }

}