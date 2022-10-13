import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { modalBoxStyle } from '../../../../common/styles/ModalStyle';
import ProjectInputForm from '../containers/ProjectInputForm';
import ModalHeader from '../../../../common/components/headers/ModalHeader';

import { useSelector,useDispatch } from 'react-redux';

import FinishButton from '../items/FinishButton';

import { callProjectCreateApi } from '../../../../apis/ProjectAPICalls';

export default function RegistModal({open, handleClose}) {
  const form = useSelector(state=> state.projectReducer);
    console.log("form:", form);
  const dispatch = useDispatch();

  const onClickRegister = ()=>{
      dispatch(callProjectCreateApi({form: form}));
      handleClose();
  }

  return (
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
    >
        <Box sx={modalBoxStyle({w: '35vw', h:'75vh'})} maxHeight='620px'>
            <ModalHeader title="프로젝트 생성" onClickHandler={handleClose}/>
            <Box sx={{width:'90%', margin:'auto'}}>
              <ProjectInputForm/>
              <FinishButton text={"생성"} onClickHandler={onClickRegister}/>
            </Box>
        </Box>
    </Modal>
  );
}
