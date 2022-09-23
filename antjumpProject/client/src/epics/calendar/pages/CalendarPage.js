import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import CalendarHeader from '../components/calendarcommon/header/CalendarHeader';
import CalendarSearchCategory from '../components/calendarcommon/header/CalendarSearchCategory';
import CalendarAddBtn from '../components/calendarcommon/header/CalendarAddBtn';
import Box from '@mui/material/box';
import { Paper } from "@mui/material";
import CalendarMonth from '../components/FullCalendar/CalendarMonth';
import CalendarModifyModal from '../components/modal/CalendarModifyModal';

function CalendarPage() {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    '& > :not(style)': {
                    m: 1,
                    width: '100%',
                    height: 70,
                    },
                }}
            >
                <Paper variant="outlined">
                    <div style={{display: 'flex', justifyContent: 'left', marginRight: '10px' }}>
                        <CalendarHeader/>
                        <CalendarSearchCategory/>
                        <div style={{marginLeft: 'auto', marginRight: '10px' }}>
                            <button onClick={handleOpen}>임시 수정 버튼</button>
                            <CalendarModifyModal open = {open} handleClose = {handleClose}/>
                            <NavLink to="add" style={{textDecoration: 'none'}}> <CalendarAddBtn/> </NavLink>
                        </div>
                    </div>
                </Paper>
            </Box>
            <CalendarMonth/>
        </>
    );
}

export default CalendarPage;