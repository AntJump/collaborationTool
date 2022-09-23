

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button, Divider } from '@mui/material';
import { deleteModalBoxStyle } from './ModalStyle';


function DeleteModal({open, handleClose, project}) {

    const onClickDeleteButton= ()=>{
        handleClose();
        alert('프로젝트 삭제 완료!')
    }

    return (
        <Modal
        open={open}
        onClose={handleClose}
    >
        <Box sx={deleteModalBoxStyle}>
            <Typography id="modal-title" variant="h6" component="h1">
                정말 삭제 하시겠습니까?
            </Typography>
            <Button color='button' variant="contained" onClick={onClickDeleteButton}>
                예
            </Button>
            <Button sx={{ color : 'black'}} onClick={handleClose}>
                아니요
            </Button>
        </Box>

    </Modal>
    );
}

export default DeleteModal;
