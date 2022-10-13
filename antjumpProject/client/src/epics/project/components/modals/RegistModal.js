import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { modalBoxStyle } from '../../../../common/styles/ModalStyle';
import ProjectInputForm from '../containers/ProjectInputForm';
import ModalHeader from '../../../../common/components/headers/ModalHeader';



export default function RegistModal({open, handleClose}) {


  return (
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
    >
        <Box sx={modalBoxStyle({w: '40vw', h:'75vh'})} maxHeight='600px'>
          <ModalHeader title="프로젝트 생성" onClickHandler={handleClose}/>
          <ProjectInputForm/>
        </Box>
    </Modal>
  );
}
