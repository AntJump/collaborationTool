
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Chip } from "@mui/material";
import FaceIcon from '@mui/icons-material/Face';
import { useState } from "react";
import { projectMembers } from "../../project/datas/MemberList";

function SprintMemberSelect({required}){
    console.log(required);

    const defaultValue = required? 1:"";
    const members = projectMembers;
    let label = required ? "필수 *" : "선택";
    const [select, setSelect] = useState("");

    const handleChange= (e)=>{
        console.log(e.target.value);
        setSelect(e.target.value);
        console.log(select);
    }

    
    // const dispatch = useDispatch();
    // useEffect(
    //     ()=>{
    //         dispatch();
    //     },
    //     []
    // 


    return (
        <FormControl fullWidth >
            <InputLabel id="select-label">{label}</InputLabel>
            <Select
                defatultValue = {defaultValue}
                labelId = "select-label"
                id = "select"
                label={label}
                value={select}
                onChange={handleChange}
                sx={{width:'250px', height: '50px'}}
            >
                <MenuItem value="">상위 이슈 담당자로 자동 배정</MenuItem>
                {members.map(member => <MenuItem key={member.memberId} value={member.memberId}>  <FaceIcon/>{member.userName}<Chip label={member.userEmail}/> </MenuItem> )}
            </Select>
        </FormControl>
    );
}

export default SprintMemberSelect;