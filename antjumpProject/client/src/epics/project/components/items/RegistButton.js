
import {Button, Box} from '@mui/material';

import { useState } from 'react';

import RegistModal from '../modals/RegistModal';

function RegistButton() {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Button 
                onClick = {handleOpen} 
                color="button" variant="contained" size="medium" 
                sx={{float: 'right', m: 2}}
            >
                프로젝트 생성
            </Button>
            <RegistModal open = {open} handleClose = {handleClose}/>
        </>
        
    );
}

export default RegistButton;