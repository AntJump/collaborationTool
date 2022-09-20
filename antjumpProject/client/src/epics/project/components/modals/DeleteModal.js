

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button, Divider } from '@mui/material';
import { modalBoxstyle } from './ModalStyle';


function DeleteModal({open, handleModalClose, project}) {
    return (
        <Modal
        open={open}
        onClose={handleModalClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
    >
        <Box sx={modalBoxstyle}>
          <Typography id="modal-title" variant="h6" component="h1">
             정말 삭제 하시겠습니까?
          </Typography>
            <Button color='button' variant="contained">
                예
            </Button>
            <Button color='button' variant="containded">
                아니요
            </Button>
        </Box>

    </Modal>
    );
}

export default DeleteModal;
