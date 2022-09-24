import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { modalBoxStyle } from '../../../../common/styles/ModalStyle';

import ProjectModifyForm from '../Containers/ProjectModifyForm';
import ModalHeader from '../../../../common/components/headers/ModalHeader';


export default function ModifyModal({open, handleClose, project}) {


  return (
    <Modal
        open={open}
        onClose={handleClose}
    >
        <Box sx={modalBoxStyle({w: '60vw', h: '60vh'})}>
          <ModalHeader title="프로젝트 수정" onClickHandler={handleClose}/>
          <ProjectModifyForm project={project}/>
        </Box>
    </Modal>
  );
}
