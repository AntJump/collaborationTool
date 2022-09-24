import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function CalendarAlarm() {

    const [alarmTime, setAlarmTime] = React.useState('');

    const handleChange = (e) => {
        setAlarmTime(e.target.value);
    };

    return (
        <Box sx={{ display: 'inline-block', marginRight: '4px' }}>
            <FormControl sx={{ m: 1, minWidth: 140 }} size="small">
                <InputLabel id="demo-select-small">알람</InputLabel>
                <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={alarmTime}
                    label="alarmTime"
                    onChange={handleChange}
                >
                    <MenuItem value="">
                        <em>없음</em>
                    </MenuItem>
                    <MenuItem value={10}>10분 전</MenuItem>
                    <MenuItem value={20}>30분 전</MenuItem>
                    <MenuItem value={30}>1시간 전</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}