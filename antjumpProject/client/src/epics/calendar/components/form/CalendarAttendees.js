import * as React from 'react';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export default function CalendarAttendees() {

    const top100Films = [
        {email: 'antjump@mtvs.com'}
    ];

    return(
        <Autocomplete
            multiple
            id="tags-outlined"
            options={top100Films}
            getOptionLabel={(option) => option.email}
            filterSelectedOptions
            sx={{
                width: 700,
                maxWidth: '100%',
                paddingTop: 5,
                margin: 'auto'
            }}
            renderInput={(params) => (
                <TextField
                    {...params}
                    label="참석자"
                    placeholder="추가"
                    fullWidth
                    id="fullWidth"
                />
            )}
        />
    );
}