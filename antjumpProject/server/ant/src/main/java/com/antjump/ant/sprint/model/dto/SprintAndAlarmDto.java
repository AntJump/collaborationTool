package com.antjump.ant.sprint.model.dto;

import java.sql.Date;

/**
 * <pre>
 * Class : SprintAndAlarmDto
 * Comment: 클래스에 대한 간단 설명
 * History
 * ================================================================
 * DATE             AUTHOR           NOTE
 * ----------------------------------------------------------------
 * 2022-10-05       이상학           최초 생성
 * </pre>
 *
 * @author 이상학(최초 작성자)
 * @version 1(클래스 버전)
 */
public class SprintAndAlarmDto {

    private int sprintId;
    private String sprintKey;
    private String sprintStatus;
    private Date sprintStartDate;
    private Date sprintEndDate;
    private Date sprintActualEndDate;
    private String sprintGoal;
    private int fkProjectsSprints;
    private int fkMembersSprints;
    private AlarmDto alarmDto;

    public SprintAndAlarmDto() {}

    public SprintAndAlarmDto(int sprintId, String sprintKey, String sprintStatus, Date sprintStartDate, Date sprintEndDate, Date sprintActualEndDate, String sprintGoal, int fkProjectsSprints, int fkMembersSprints, AlarmDto alarmDto) {
        this.sprintId = sprintId;
        this.sprintKey = sprintKey;
        this.sprintStatus = sprintStatus;
        this.sprintStartDate = sprintStartDate;
        this.sprintEndDate = sprintEndDate;
        this.sprintActualEndDate = sprintActualEndDate;
        this.sprintGoal = sprintGoal;
        this.fkProjectsSprints = fkProjectsSprints;
        this.fkMembersSprints = fkMembersSprints;
        this.alarmDto = alarmDto;
    }

    public int getSprintId() {
        return sprintId;
    }

    public void setSprintId(int sprintId) {
        this.sprintId = sprintId;
    }

    public String getSprintKey() {
        return sprintKey;
    }

    public void setSprintKey(String sprintKey) {
        this.sprintKey = sprintKey;
    }

    public String getSprintStatus() {
        return sprintStatus;
    }

    public void setSprintStatus(String sprintStatus) {
        this.sprintStatus = sprintStatus;
    }

    public Date getSprintStartDate() {
        return sprintStartDate;
    }

    public void setSprintStartDate(Date sprintStartDate) {
        this.sprintStartDate = sprintStartDate;
    }

    public Date getSprintEndDate() {
        return sprintEndDate;
    }

    public void setSprintEndDate(Date sprintEndDate) {
        this.sprintEndDate = sprintEndDate;
    }

    public Date getSprintActualEndDate() {
        return sprintActualEndDate;
    }

    public void setSprintActualEndDate(Date sprintActualEndDate) {
        this.sprintActualEndDate = sprintActualEndDate;
    }

    public String getSprintGoal() {
        return sprintGoal;
    }

    public void setSprintGoal(String sprintGoal) {
        this.sprintGoal = sprintGoal;
    }

    public int getFkProjectsSprints() {
        return fkProjectsSprints;
    }

    public void setFkProjectsSprints(int fkProjectsSprints) {
        this.fkProjectsSprints = fkProjectsSprints;
    }

    public int getFkMembersSprints() {
        return fkMembersSprints;
    }

    public void setFkMembersSprints(int fkMembersSprints) {
        this.fkMembersSprints = fkMembersSprints;
    }

    public AlarmDto getAlarmDto() {
        return alarmDto;
    }

    public void setAlarmDto(AlarmDto alarmDto) {
        this.alarmDto = alarmDto;
    }

    @Override
    public String toString() {
        return "SprintAndAlarmDto{" +
                "sprintId=" + sprintId +
                ", sprintKey='" + sprintKey + '\'' +
                ", sprintStatus='" + sprintStatus + '\'' +
                ", sprintStartDate=" + sprintStartDate +
                ", sprintEndDate=" + sprintEndDate +
                ", sprintActualEndDate=" + sprintActualEndDate +
                ", sprintGoal='" + sprintGoal + '\'' +
                ", fkProjectsSprints=" + fkProjectsSprints +
                ", fkMembersSprints=" + fkMembersSprints +
                ", alarmDto=" + alarmDto +
                '}';
    }
}
