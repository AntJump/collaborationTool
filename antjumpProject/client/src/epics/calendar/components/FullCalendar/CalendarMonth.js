import React, { Component, useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import CalendarMonthCss from './CalendarMonth.css';
import interactionPlugin from '@fullcalendar/interaction';
import { useSelector, useDispatch } from 'react-redux';
import { getCalendars } from '../../../../apis/CalendarAPICalls';
import { useNavigate } from 'react-router-dom';

function CalendarMonth() {

    const navigate = useNavigate();

    //리덕스
    const dispatch = useDispatch();
    const calendars = useSelector(state => state.calendarReducer);
    const calendarList = calendars.data;

    console.log("calendarList :", calendarList);
    useEffect(
        () => {
            dispatch(getCalendars());
        }, []
    );

    // 세부 정보 이동
    const onClickDetail = (calendarId) => {
        navigate(`plan/${calendarId}`, { replace: false })
    }

    return (
        <>
            <FullCalendar
                defaultView="dayGridMonth"
                plugins={[ dayGridPlugin, interactionPlugin ]}
                locale='ko'
                headerToolbar={{center: 'title prev,next today', start:'', end: ''}}
                events={ 
                    calendarList && calendarList.map((calendar) => {
                        return {
                            title: calendar.calendarName,
                            color: calendar.calendarColor,
                            start: calendar.calendarStartDate,
                            end: calendar.calendarEndDate,
                        }
                    })
                }
                
                eventClick={() => {
                        calendarList && calendarList.map((calendar) => {
                            onClickDetail(calendar.calendarId)
                    })
                }}
                editable='true'
                droppable='true'
            />
        </>

    );
}

export default CalendarMonth;