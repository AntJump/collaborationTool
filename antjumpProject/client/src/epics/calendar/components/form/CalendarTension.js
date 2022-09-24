import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function CalendarPublicSet() {

    const [tension, setTension] = React.useState('');

    const handleChange = (e) => {
        setTension(e.target.value);
    };

    return (
        <Box sx={{ display: 'inline-block' }}>
            <FormControl sx={{ m: 1, minWidth: 140 }} size="small">
                <InputLabel id="demo-select-small">상태</InputLabel>
                <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={tension}
                    label="tension"
                    onChange={handleChange}
                >
                    <MenuItem value={10}>바쁨</MenuItem>
                    <MenuItem value={20}>한가함</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}