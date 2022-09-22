import { useState } from "react";
import { MenuItem } from "@mui/material";
import DeleteModal from "../modals/DeleteModal";

function DeleteMenuItem({project}){
    
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <>
            <MenuItem onClick={handleOpen} disableRipple>
                프로젝트 삭제
            </MenuItem>
            <DeleteModal open = {open} handleClose = {handleClose} project={project}/>
        </>
    );
}

export default DeleteMenuItem;