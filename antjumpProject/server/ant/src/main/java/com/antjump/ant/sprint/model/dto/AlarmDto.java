package com.antjump.ant.sprint.model.dto;

import java.sql.Date;

/**
 * <pre>
 * Class : AlarmDto
 * Comment: 클래스에 대한 간단 설명
 * History
 * ================================================================
 * DATE             AUTHOR           NOTE
 * ----------------------------------------------------------------
 * 2022-10-04       이상학           최초 생성
 * </pre>
 *
 * @author 이상학(최초 작성자)
 * @version 1(클래스 버전)
 */
public class AlarmDto {

    private int sprintAlarmId;
    private Date sprintCycleDate;
    private int fkSprintsAlarms;

    public AlarmDto() {}

    public AlarmDto(int sprintAlarmId, Date sprintCycleDate, int fkSprintsAlarms) {
        this.sprintAlarmId = sprintAlarmId;
        this.sprintCycleDate = sprintCycleDate;
        this.fkSprintsAlarms = fkSprintsAlarms;
    }

    public int getSprintAlarmId() {
        return sprintAlarmId;
    }

    public void setSprintAlarmId(int sprintAlarmId) {
        this.sprintAlarmId = sprintAlarmId;
    }

    public Date getSprintCycleDate() {
        return sprintCycleDate;
    }

    public void setSprintCycleDate(Date sprintCycleDate) {
        this.sprintCycleDate = sprintCycleDate;
    }

    public int getFkSprintsAlarms() {
        return fkSprintsAlarms;
    }

    public void setFkSprintsAlarms(int fkSprintsAlarms) {
        this.fkSprintsAlarms = fkSprintsAlarms;
    }

    @Override
    public String toString() {
        return "AlarmDto{" +
                "sprintAlarmId=" + sprintAlarmId +
                ", sprintCycleDate=" + sprintCycleDate +
                ", fkSprintsAlarms=" + fkSprintsAlarms +
                '}';
    }
}
