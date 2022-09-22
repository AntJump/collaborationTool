import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function CalendarDetailInfo() {

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
            label="일정 설명"
            multiline
            rows={10}
            fullWidth
        />
        </Box>
    );
}