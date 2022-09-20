import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Divider } from '@mui/material';
import { modalBoxstyle } from './ModalStyle';

import ProjectModifyForm from '../Containers/ProjectModifyForm';


export default function ModifyModal({open, handleModifyModalClose, project}) {


  return (
    <Modal
        open={open}
        onClose={handleModifyModalClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
    >
        <Box sx={modalBoxstyle}>
          <Typography id="modal-title" variant="h6" component="h2">
            프로젝트 수정
          </Typography>
          <Divider sx={{ my: 3 }} />
          <ProjectModifyForm project={project}/>
        </Box>
    </Modal>
  );
}
