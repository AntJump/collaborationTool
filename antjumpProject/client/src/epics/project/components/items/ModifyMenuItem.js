import { useState } from "react";
import { MenuItem } from "@mui/material";
import ModifyModal from "../modals/ModifyModal";
function ModifyMenuItem({project}){
    
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <>
            <MenuItem onClick={handleOpen} disableRipple>
                정보 수정
            </MenuItem>
            <ModifyModal open = {open} handleClose = {handleClose} project={project}/>
        </>
    );
}

export default ModifyMenuItem;