import { useState } from "react";
import { MenuItem } from "@mui/material";
import MemberListModal from "../modals/MemberListModal";

function MembersMenuItem({project}){
    
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <>
            <MenuItem onClick={handleOpen} disableRipple>
                팀원 목록
            </MenuItem>
            <MemberListModal open = {open} handleClose = {handleClose} project={project}/>
        </>
    );
}

export default MembersMenuItem;