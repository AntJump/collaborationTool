
import Button from '@mui/material/Button';

import { useState } from 'react';

import CreateModal from '../modals/CreateModal';

function CreateButton() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick = {handleOpen} color="button" variant="contained" size="medium">
                프로젝트 생성
            </Button>
            <CreateModal open = {open} handleClose = {handleClose}/>
        </div>
        
    );
}

export default CreateButton;