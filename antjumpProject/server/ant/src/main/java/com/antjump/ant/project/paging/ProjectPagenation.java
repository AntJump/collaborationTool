package com.antjump.ant.project.paging;

/**
 * <pre>
 * Class : pagenation
 * Comment: 페이지네이션 관련 기본 정보를 받아 목록 조회를 위한 현재 페이징 정보(SelectCriteria 객체)를 생성합니다
 * History
 * ================================================================
 * DATE             AUTHOR           NOTE
 * ----------------------------------------------------------------
 * 2022-10-04       최윤서           최초 생성
 * </pre>
 *
 * @author 최윤서
 * @version 1
 * @see
 */
public class ProjectPagenation {

    // 현재 페이지 위치를 받아 페이징 처리 정보를 생성한다
    public static PagingInfo getPagingInfo(int limit, int currentPage, int buttonCount, int totalCount) {

        // 마지막 페이지 번호(총 페이지 수) 계산
        int maxPage = (int) Math.ceil((double) totalCount / limit);

        // 보이는 시작 페이지 번호
        int startPage = ((int) Math.ceil((double) currentPage / buttonCount) - 1) * buttonCount + 1;

        // 보이는 마지막 페이지 번호
        int endPage = startPage + buttonCount - 1;
        if (endPage > maxPage) {  // 계산한 결과가 총 페이지 수 보다 클 경우
            endPage = maxPage;  // 마지막 페이지 번호에 해당한다
        }

        // 조회한 데이터가 없을 경우 endPage, maxPage를 시작 페이지와 일치시킨다
        if (maxPage == 0 && endPage == 0) {
            maxPage = startPage;
            endPage = startPage;
        }

        //  조회할 시작 row 번호
        int offset = (currentPage - 1) * limit ;

        return new PagingInfo(limit, currentPage, buttonCount, totalCount, maxPage, startPage, endPage, offset);
    }
}