package com.antjump.ant.common.paging;
/**
 * <pre>
 * Class : ResponseDtoWithPaging
 * Comment:
 * History
 * ================================================================
 * DATE             AUTHOR           NOTE
 * ----------------------------------------------------------------
 * 2022-10-04       부시연           최초 생성
 * </pre>
 *
 * @author 부시연(최초 작성자)
 * @version 1(클래스 버전)
 */
public class ResponseDtoWithPaging {

    private Object data;
    private SelectCriteria pageInfo;

    public ResponseDtoWithPaging() {
    }

    public ResponseDtoWithPaging(Object data, SelectCriteria pageInfo) {
        this.data = data;
        this.pageInfo = pageInfo;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }

    public SelectCriteria getPageInfo() {
        return pageInfo;
    }

    public void setPageInfo(SelectCriteria pageInfo) {
        this.pageInfo = pageInfo;
    }

    @Override
    public String toString() {
        return "ResponseDtoWithPaging{" +
                "data=" + data +
                ", pageInfo=" + pageInfo +
                '}';
    }
}
