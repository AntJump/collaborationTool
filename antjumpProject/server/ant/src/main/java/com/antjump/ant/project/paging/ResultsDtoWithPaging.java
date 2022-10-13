package com.antjump.ant.project.paging;

/**
 * <pre>
 * Class : ResponseDtoWithPaging
 * Comment: 페이징 정보를 담아 response하기 위한 DTO 입니다
 * History
 * ================================================================
 * DATE             AUTHOR           NOTE
 * ----------------------------------------------------------------
 * 2022-10-05       최윤서           최초 생성
 * </pre>
 *
 * @author 최윤서
 * @version 1
 * @see 참고할 class 또는 외부 url
 */
public class ResultsDtoWithPaging {
    private Object data;
    private PagingInfo PagingInfo;

    public ResultsDtoWithPaging() {}

    public ResultsDtoWithPaging(Object data, com.antjump.ant.project.paging.PagingInfo pagingInfo) {
        this.data = data;
        PagingInfo = pagingInfo;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }

    public com.antjump.ant.project.paging.PagingInfo getPagingInfo() {
        return PagingInfo;
    }

    public void setPagingInfo(com.antjump.ant.project.paging.PagingInfo pagingInfo) {
        PagingInfo = pagingInfo;
    }

    @Override
    public String toString() {
        return "ResponseDataDtoWithPaging{" +
                "data=" + data +
                ", PagingInfo=" + PagingInfo +
                '}';
    }
}
