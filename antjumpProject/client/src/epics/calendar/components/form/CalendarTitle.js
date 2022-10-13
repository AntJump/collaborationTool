import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function CalendarTitle() {

    return (
        <Box
            component="form"
            noValidate
            autoComplete="off"
            sx={{
                width: 700,
                maxWidth: '100%',
                paddingTop: 5,
                margin: 'auto'
            }}
        >
            <TextField
                id="outlined-multiline-static, fullWidth"
                label="일정 제목 *"
                multiline
                fullWidth
            />
        </Box>
    );
}