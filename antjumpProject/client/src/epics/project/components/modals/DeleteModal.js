

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button, Divider, Stack } from '@mui/material';
import { modalBoxStyle } from '../../../../common/styles/ModalStyle';

import { callProjectTemporaryDeleteApi } from '../../../../apis/ProjectAPICalls';
import { useDispatch } from 'react-redux';

function DeleteModal({open, handleClose, projectId}) {
    const dispatch = useDispatch()
    const onClickDeleteButton= ()=>{
        
        dispatch(callProjectTemporaryDeleteApi({projectId: projectId})); 
        handleClose();

    }

    return (
        <Modal
            open={open}
            onClose={handleClose}
        >
        <Box sx={modalBoxStyle({w:'40vw',h:'15vh'})}>
            <Typography id="modal-title" variant="h6" component="h1" sx={{ height: '80%', textAlign: 'center'}}>
                정말 삭제 하시겠습니까?<br/>
                휴지통에서 15일 이내로 복구 할 수 있습니다.
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
