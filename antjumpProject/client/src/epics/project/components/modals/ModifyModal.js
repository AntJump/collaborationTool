import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { modalBoxStyle } from '../../../../common/styles/ModalStyle';

import ProjectModifyForm from '../containers/ProjectModifyForm';
import ModalHeader from '../../../../common/components/headers/ModalHeader';


export default function ModifyModal({open, handleClose, project}) {


  return (
    <Modal
        open={open}
        onClose={handleClose}
    >
        <Box sx={modalBoxStyle({w: '40vw', h:'75vh'})} maxHeight='600px'>
          <ModalHeader title="프로젝트 수정" onClickHandler={handleClose}/>
          <ProjectModifyForm project={project}/>
        </Box>
    </Modal>
  );
}
