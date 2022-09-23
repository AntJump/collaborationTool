import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Divider, Button } from '@mui/material';
import { modalBoxstyle } from './ModalStyle';

import ProjectModifyForm from '../Containers/ProjectModifyForm';
import ModalHeader from './ModalHeader';


export default function ModifyModal({open, handleClose, project}) {


  return (
    <Modal
        open={open}
        onClose={handleClose}
    >
        <Box sx={modalBoxstyle}>
          <ModalHeader title="프로젝트 수정" onClickHandler={handleClose}/>
          <ProjectModifyForm project={project}/>
        </Box>
    </Modal>
  );
}
