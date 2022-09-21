import * as React from 'react';
import TextField from '@mui/material/TextField';
import { Box } from '@mui/material';

export default function CalendarFinishDate() {

    return (
        <Box sx={{paddingTop: 5, margin: 'auto', display: 'inline-block'}}>
            <TextField
                id="datetime-local"
                label="끝나는 날짜 *"
                type="datetime-local"
                defaultValue="2022-09-19T2:40"
                sx={{ 
                    width: 340
                }}
                InputLabelProps={{
                    shrink: true,
                }}
            />
        </Box>
    );
}