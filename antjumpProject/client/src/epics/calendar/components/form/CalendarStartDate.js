import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';

export default function CalendarStartDate() {

    return (
        <Box sx={{paddingTop: 5, display: 'inline-block', paddingRight: 2.5}}>
            <TextField
                id="datetime-local"
                label="시작 날짜 *"
                type="datetime-local"
                defaultValue="2022-09-19T2:40"
                sx={{ width: 340 }}
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </Box>
    );
}