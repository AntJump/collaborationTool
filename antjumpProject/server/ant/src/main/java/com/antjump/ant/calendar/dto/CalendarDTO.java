package com.antjump.ant.calendar.dto;

import java.sql.Time;
import java.util.Date;

/**
 * <pre>
 * Class : calendarDTO
 * Comment: 일정 테이블 DTO
 * History
 * ================================================================
 * DATE             AUTHOR           NOTE
 * ----------------------------------------------------------------
 * 2022-10-05       최은진           최초 생성
 * </pre>
 *
 * @author 최은진(최초 작성자)
 * @version 1(클래스 버전)
 * @see (참고할 class 또는 외부 url)
 */

public class CalendarDTO {

    private int calendarId;                         // 일정 번호
    private String calendarName;                    // 일정 제목
    private Date calendarStartDate;                 // 일정 시작 날짜
    private Date calendarEndDate;                   // 일정 종료 날짜
    private Time calendarStartTime;                 // 일정 시작 시간
    private Time calendarEndTime;                   // 일정 종료 시간
    private String calendarColor;                   // 일정 색
    private String calendarRepeatYn;                // 일정 반복 여부
    private String calendarExplanation;             // 일정 설명
    private Date calendarCycleDate;                 // 알림 주기
    private String calendarLocation;                // 일정 위치
    private String calendarAttenders;               // 일정 참석자
    private String calendarCategory;                // 일정 유형
    private String calendarOpenYn;                  // 일정 공개 여부
    private int fkMembersCalendars;             // 참조한 회원 번호
    private int fkSprintsCalendars;             // 참조한 스프린트 번호

    public CalendarDTO(int calendarId, String calendarName, Date calendarStartDate, Date calendarEndDate,
                       Time calendarStartTime, Time calendarEndTime, String calendarColor, String calendarRepeatYn,
                       String calendarExplanation, Date calendarCycleDate, String calendarLocation,
                       String calendarAttenders, String calendarCategory, String calendarOpenYn,
                       int fkMembersCalendars, int fkSprintsCalendars) {
        this.calendarId = calendarId;
        this.calendarName = calendarName;
        this.calendarStartDate = calendarStartDate;
        this.calendarEndDate = calendarEndDate;
        this.calendarStartTime = calendarStartTime;
        this.calendarEndTime = calendarEndTime;
        this.calendarColor = calendarColor;
        this.calendarRepeatYn = calendarRepeatYn;
        this.calendarExplanation = calendarExplanation;
        this.calendarCycleDate = calendarCycleDate;
        this.calendarLocation = calendarLocation;
        this.calendarAttenders = calendarAttenders;
        this.calendarCategory = calendarCategory;
        this.calendarOpenYn = calendarOpenYn;
        this.fkMembersCalendars = fkMembersCalendars;
        this.fkSprintsCalendars = fkSprintsCalendars;
    }

    public int getCalendarId() {
        return calendarId;
    }

    public void setCalendarId(int calendarId) {
        this.calendarId = calendarId;
    }

    public String getCalendarName() {
        return calendarName;
    }

    public void setCalendarName(String calendarName) {
        this.calendarName = calendarName;
    }

    public Date getCalendarStartDate() {
        return calendarStartDate;
    }

    public void setCalendarStartDate(Date calendarStartDate) {
        this.calendarStartDate = calendarStartDate;
    }

    public Date getCalendarEndDate() {
        return calendarEndDate;
    }

    public void setCalendarEndDate(Date calendarEndDate) {
        this.calendarEndDate = calendarEndDate;
    }

    public Time getCalendarStartTime() {
        return calendarStartTime;
    }

    public void setCalendarStartTime(Time calendarStartTime) {
        this.calendarStartTime = calendarStartTime;
    }

    public Time getCalendarEndTime() {
        return calendarEndTime;
    }

    public void setCalendarEndTime(Time calendarEndTime) {
        this.calendarEndTime = calendarEndTime;
    }

    public String getCalendarColor() {
        return calendarColor;
    }

    public void setCalendarColor(String calendarColor) {
        this.calendarColor = calendarColor;
    }

    public String getCalendarRepeatYn() {
        return calendarRepeatYn;
    }

    public void setCalendarRepeatYn(String calendarRepeatYn) {
        this.calendarRepeatYn = calendarRepeatYn;
    }

    public String getCalendarExplanation() {
        return calendarExplanation;
    }

    public void setCalendarExplanation(String calendarExplanation) {
        this.calendarExplanation = calendarExplanation;
    }

    public Date getCalendarCycleDate() {
        return calendarCycleDate;
    }

    public void setCalendarCycleDate(Date calendarCycleDate) {
        this.calendarCycleDate = calendarCycleDate;
    }

    public String getCalendarLocation() {
        return calendarLocation;
    }

    public void setCalendarLocation(String calendarLocation) {
        this.calendarLocation = calendarLocation;
    }

    public String getCalendarAttenders() {
        return calendarAttenders;
    }

    public void setCalendarAttenders(String calendarAttenders) {
        this.calendarAttenders = calendarAttenders;
    }

    public String getCalendarCategory() {
        return calendarCategory;
    }

    public void setCalendarCategory(String calendarCategory) {
        this.calendarCategory = calendarCategory;
    }

    public String getCalendarOpenYn() {
        return calendarOpenYn;
    }

    public void setCalendarOpenYn(String calendarOpenYn) {
        this.calendarOpenYn = calendarOpenYn;
    }

    public int getFkMembersCalendars() {
        return fkMembersCalendars;
    }

    public void setFkMembersCalendars(int fkMembersCalendars) {
        this.fkMembersCalendars = fkMembersCalendars;
    }

    public int getFkSprintsCalendars() {
        return fkSprintsCalendars;
    }

    public void setFkSprintsCalendars(int fkSprintsCalendars) {
        this.fkSprintsCalendars = fkSprintsCalendars;
    }

    @Override
    public String toString() {
        return "calendarDTO{" +
                "calendarId=" + calendarId +
                ", calendarName='" + calendarName + '\'' +
                ", calendarStartDate=" + calendarStartDate +
                ", calendarEndDate=" + calendarEndDate +
                ", calendarStartTime=" + calendarStartTime +
                ", calendarEndTime=" + calendarEndTime +
                ", calendarColor='" + calendarColor + '\'' +
                ", calendarRepeatYn='" + calendarRepeatYn + '\'' +
                ", calendarExplanation='" + calendarExplanation + '\'' +
                ", calendarCycleDate=" + calendarCycleDate +
                ", calendarLocation='" + calendarLocation + '\'' +
                ", calendarAttenders='" + calendarAttenders + '\'' +
                ", calendarCategory='" + calendarCategory + '\'' +
                ", calendarOpenYn='" + calendarOpenYn + '\'' +
                ", fkMembersCalendars=" + fkMembersCalendars +
                ", fkSprintsCalendars=" + fkSprintsCalendars +
                '}';
    }
}
