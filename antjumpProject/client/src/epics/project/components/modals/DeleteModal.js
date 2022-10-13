

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button, Divider, Stack } from '@mui/material';
import { modalBoxStyle } from '../../../../common/styles/ModalStyle';


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
        <Box sx={modalBoxStyle({w:'20vw',h:'10vh'})}>
            <Typography id="modal-title" variant="h6" component="h1" sx={{ height: '80%', textAlign: 'center'}}>
                정말 삭제 하시겠습니까?
            </Typography>
            <Stack direction='row' spacing ={2} sx={{justifyContent: 'center', verticalAlign: 'bottom'}}>
                <Button color='button' variant="contained" onClick={onClickDeleteButton}>
                    예
                </Button>
                <Button sx={{ color : 'black'}} onClick={handleClose}>
                    아니요
                </Button>
            </Stack>
            
        </Box>

    </Modal>
    );
}

export default DeleteModal;
