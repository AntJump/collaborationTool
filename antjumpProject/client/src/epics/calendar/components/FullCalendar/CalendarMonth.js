import React, { Component } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import CalendarMonthCss from './CalendarMonth.css';

function CalendarMonth() {

        return (
                <FullCalendar
                    defaultView="dayGridMonth"
                    plugins={[ dayGridPlugin ]}
                    locale='ko'
                    headerToolbar={{center: 'title prev,next today', start:'', end: ''}}
                />
        );
}

export default CalendarMonth;