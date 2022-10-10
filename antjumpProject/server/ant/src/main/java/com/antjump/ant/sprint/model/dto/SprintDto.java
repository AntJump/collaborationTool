package com.antjump.ant.sprint.model.dto;

import java.sql.Date;

/**
 * <pre>
 * Class : SprintDto
 * Comment: 스프린트 DTO
 * History
 * ================================================================
 * DATE             AUTHOR           NOTE
 * ----------------------------------------------------------------
 * 2022-10-04       이상학           최초 생성
 * </pre>
 *
 * @author 이상학(최초 작성자)
 * @version 1(클래스 버전)
 * @see
 */
public class SprintDto {
    private int sprintId;
    private String sprintName;
    private String sprintStatus;
    private Date sprintStartDate;
    private Date sprintEndDate;
    private Date sprintActualEndDate;
    private String sprintGoal;
    private String sprintAlarmCycle;
    private int fkProjectsSprints;
    private int fkMembersSprints;

    public SprintDto() {}

    public SprintDto(int sprintId, String sprintName, String sprintStatus, Date sprintStartDate, Date sprintEndDate, Date sprintActualEndDate, String sprintGoal, String sprintAlarmCycle, int fkProjectsSprints, int fkMembersSprints) {
        this.sprintId = sprintId;
        this.sprintName = sprintName;
        this.sprintStatus = sprintStatus;
        this.sprintStartDate = sprintStartDate;
        this.sprintEndDate = sprintEndDate;
        this.sprintActualEndDate = sprintActualEndDate;
        this.sprintGoal = sprintGoal;
        this.sprintAlarmCycle = sprintAlarmCycle;
        this.fkProjectsSprints = fkProjectsSprints;
        this.fkMembersSprints = fkMembersSprints;
    }


    public int getSprintId() {
        return sprintId;
    }

    public void setSprintId(int sprintId) {
        this.sprintId = sprintId;
    }

    public String getSprintName() {
        return sprintName;
    }

    public void setSprintName(String sprintName) {
        this.sprintName = sprintName;
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

    public String getSprintAlarmCycle() {
        return sprintAlarmCycle;
    }

    public void setSprintAlarmCycle(String sprintAlarmCycle) {
        this.sprintAlarmCycle = sprintAlarmCycle;
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

    @Override
    public String toString() {
        return "SprintDto{" +
                "sprintId=" + sprintId +
                ", sprintName='" + sprintName + '\'' +
                ", sprintStatus='" + sprintStatus + '\'' +
                ", sprintStartDate=" + sprintStartDate +
                ", sprintEndDate=" + sprintEndDate +
                ", sprintActualEndDate=" + sprintActualEndDate +
                ", sprintGoal='" + sprintGoal + '\'' +
                ", sprintAlarmCycle='" + sprintAlarmCycle + '\'' +
                ", fkProjectsSprints=" + fkProjectsSprints +
                ", fkMembersSprints=" + fkMembersSprints +
                '}';
    }
}
