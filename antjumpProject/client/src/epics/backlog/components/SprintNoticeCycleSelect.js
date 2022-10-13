
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { useState } from "react";

function SprintNoticeCycleSelect(){

    const [select, setSelect] = useState(1);
    const handleChange= (e)=>{
        setSelect(e.target.value);
    }
    
    return (
        <FormControl fullWidth>
            <InputLabel id="select-label">알림 주기 *</InputLabel>
            <Select
                labelId="select-label"
                defaultValue={select}
                label='알림 주기 *'
                onChange={handleChange}
                name = "sprintCycleDate"
            >
                <MenuItem value={1}>1일 주기</MenuItem>
                <MenuItem value={3}>3일 주기</MenuItem>
                <MenuItem value={7}>7일 주기</MenuItem>
                <MenuItem value={10}>10일 주기</MenuItem>
            </Select>
        </FormControl>
    );
}

export default SprintNoticeCycleSelect;