import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Divider, Button } from '@mui/material';
import { modalBoxstyle } from './ModalStyle';
import ProjectInputForm from '../Containers/ProjectInputForm';



export default function RegistModal({open, handleClose}) {


  return (
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
    >
        <Box sx={modalBoxstyle}>
        <Button onClick={handleClose} color="button" variant='contained'>
            X
          </Button>
          <Typography id="modal-title" variant="h6" component="h2">
            프로젝트 생성
          </Typography>
          <Divider sx={{ my: 3 }} />
          <ProjectInputForm id = "modal-description"/>
        </Box>
    </Modal>
  );
}
