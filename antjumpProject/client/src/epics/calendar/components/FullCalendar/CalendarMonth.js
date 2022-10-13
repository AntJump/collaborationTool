import React, { Component, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import CalendarMonthCss from './CalendarMonth.css';
import CalendarModifyModal from '../modal/CalendarModifyModal';
import interactionPlugin from '@fullcalendar/interaction';

function CalendarMonth() {

        const [open, setOpen] = useState(false);
        const handleOpen = () => setOpen(true);
        const handleClose = () => setOpen(false);

        return (
                <>
                        <FullCalendar
                                defaultView="dayGridMonth"
                                plugins={[ dayGridPlugin, interactionPlugin ]}
                                locale='ko'
                                headerToolbar={{center: 'title prev,next today', start:'', end: ''}}
                                events={[
                                        {
                                                title: '일정',
                                                color: '#004392',
                                                start: '2022-10-04',
                                                end: '2022-10-05'
                                        }
                                ]}
                                eventClick={handleOpen}
                                editable='true'
                                droppable='true'
                        />
                        <CalendarModifyModal open = {open} handleClose = {handleClose}/>
                </>
        );
}

export default CalendarMonth;