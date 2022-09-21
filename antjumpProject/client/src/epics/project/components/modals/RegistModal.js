import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Divider } from '@mui/material';

import ProjectInputForm from '../Containers/ProjectInputForm';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  borderRadius: 10,
  boxShadow: 24,
  p: 4,
};

export default function RegistModal({open, handleClose}) {


  return (
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
    >
        <Box sx={style}>
          <Typography id="modal-title" variant="h6" component="h2">
            프로젝트 생성
          </Typography>
          <Divider sx={{ my: 3 }} />
          <ProjectInputForm id = "modal-description"/>
        </Box>
    </Modal>
  );
}
