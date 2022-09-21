import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function CalendarPublicSet() {

    const [PublicSetting, setPublicSetting] = React.useState('');

    const handleChange = (e) => {
        setPublicSetting(e.target.value);
    };

    return (
        <Box sx={{ display: 'inline-block' }}>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-select-small">공개 여부 *</InputLabel>
                <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={PublicSetting}
                    label="PublicSetting"
                    onChange={handleChange}
                >
                    <MenuItem value={10}>전체 공개</MenuItem>
                    <MenuItem value={20}>나만 보기</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}