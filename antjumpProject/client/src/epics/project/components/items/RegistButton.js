
import Button from '@mui/material/Button';

import { useState } from 'react';

import RegistModal from '../modals/RegistModal';

function RegistButton() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick = {handleOpen} color="button" variant="contained" size="medium">
                프로젝트 생성
            </Button>
            <RegistModal open = {open} handleClose = {handleClose}/>
        </div>
        
    );
}

export default RegistButton;