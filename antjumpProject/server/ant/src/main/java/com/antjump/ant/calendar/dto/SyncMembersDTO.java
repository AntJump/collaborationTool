package com.antjump.ant.calendar.dto;

/**
 * <pre>
 * Class : SyncMembersDTO
 * Comment: 동기화한 팀원 목록 DTO
 * History
 * ================================================================
 * DATE             AUTHOR           NOTE
 * ----------------------------------------------------------------
 * 2022-10-06       최은진           최초 생성
 * </pre>
 *
 * @author 최은진(최초 작성자)
 * @version 1(클래스 버전)
 * @see (참고할 class 또는 외부 url)
 */
public class SyncMembersDTO {

    private int syncMemberId;                           /* 동기화 팀원 목록 번호 */
    private int fkProjectMembersSyncs1;                 /* 동기화 본인 회원 번호 */
    private int fkProjectMembersSyncs2;                 /* 동기화 대상 회원 번호 */

    public SyncMembersDTO() {}

    public SyncMembersDTO(int syncMemberId, int fkProjectMembersSyncs1, int fkProjectMembersSyncs2) {
        this.syncMemberId = syncMemberId;
        this.fkProjectMembersSyncs1 = fkProjectMembersSyncs1;
        this.fkProjectMembersSyncs2 = fkProjectMembersSyncs2;
    }

    public int getSyncMemberId() {
        return syncMemberId;
    }

    public void setSyncMemberId(int syncMemberId) {
        this.syncMemberId = syncMemberId;
    }

    public int getFkProjectMembersSyncs1() {
        return fkProjectMembersSyncs1;
    }

    public void setFkProjectMembersSyncs1(int fkProjectMembersSyncs1) {
        this.fkProjectMembersSyncs1 = fkProjectMembersSyncs1;
    }

    public int getFkProjectMembersSyncs2() {
        return fkProjectMembersSyncs2;
    }

    public void setFkProjectMembersSyncs2(int fkProjectMembersSyncs2) {
        this.fkProjectMembersSyncs2 = fkProjectMembersSyncs2;
    }

    @Override
    public String toString() {
        return "SyncMembersDTO{" +
                "syncMemberId=" + syncMemberId +
                ", fkProjectMembersSyncs1=" + fkProjectMembersSyncs1 +
                ", fkProjectMembersSyncs2=" + fkProjectMembersSyncs2 +
                '}';
    }
}
