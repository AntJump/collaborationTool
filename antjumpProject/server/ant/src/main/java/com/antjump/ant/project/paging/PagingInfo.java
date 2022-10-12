package com.antjump.ant.project.paging;

/**
 * <pre>
 * Class : PagingInfo
 * Comment: 페이징 처리를 위한 정보를 담을 class
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
public class PagingInfo {

    private int limit;                             // 한 페이지 당 row 수
    private int currentPage;                       // 현재 페이지 번호
    private int buttonCount;                       // 보여지는 번호 개수
    private int totalCount;                        // 총 row 개수

    private int maxPage;                           // 맨 마지막 페이지 번호 (== 총 페이지 수)
    private int startPage;                         // 보여지는 시작 페이지 번호
    private int endPage;                          // 보여지는 마지막 페이지 번호
    private int offset;                          // 조회할 row 시작 번호


    public PagingInfo(int limit, int currentPage, int buttonCount, int totalCount, int maxPage, int startPage, int endPage, int offset) {
        this.limit = limit;
        this.currentPage = currentPage;
        this.buttonCount = buttonCount;
        this.totalCount = totalCount;
        this.maxPage = maxPage;
        this.startPage = startPage;
        this.endPage = endPage;
        this.offset = offset;
    }

    public int getLimit() {
        return limit;
    }

    public void setLimit(int limit) {
        this.limit = limit;
    }

    public int getCurrentPage() {
        return currentPage;
    }

    public void setCurrentPage(int currentPage) {
        this.currentPage = currentPage;
    }

    public int getButtonCount() {
        return buttonCount;
    }

    public void setButtonCount(int buttonCount) {
        this.buttonCount = buttonCount;
    }

    public int getTotalCount() {
        return totalCount;
    }

    public void setTotalCount(int totalCount) {
        this.totalCount = totalCount;
    }

    public int getMaxPage() {
        return maxPage;
    }

    public void setMaxPage(int maxPage) {
        this.maxPage = maxPage;
    }

    public int getStartPage() {
        return startPage;
    }

    public void setStartPage(int startPage) {
        this.startPage = startPage;
    }

    public int getEndPage() {
        return endPage;
    }

    public void setEndPage(int endPage) {
        this.endPage = endPage;
    }

    public int getOffset() {
        return offset;
    }

    public void setOffset(int offset) {
        this.offset = offset;
    }

    @Override
    public String toString() {
        return "PagingInfo{" +
                "limit=" + limit +
                ", currentPage=" + currentPage +
                ", buttonCount=" + buttonCount +
                ", totalCount=" + totalCount +
                ", maxPage=" + maxPage +
                ", startPage=" + startPage +
                ", endPage=" + endPage +
                ", offset=" + offset +
                '}';
    }
}
