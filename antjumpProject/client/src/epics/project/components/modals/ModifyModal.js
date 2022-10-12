import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { modalBoxStyle } from '../../../../common/styles/ModalStyle';
import { useEffect } from 'react';

import ProjectModifyForm from '../containers/ProjectModifyForm';
import ModalHeader from '../../../../common/components/headers/ModalHeader';



import FinishButton from '../items/FinishButton';

import { callProjectUdateApi } from '../../../../apis/ProjectAPICalls';
import { useDispatch, useSelector } from 'react-redux';

export default function ModifyModal({open, handleClose, projectId}) {

  const form = useSelector(state=> state.projectReducer);
    console.log("form:", form); 
  const dispatch = useDispatch();

  const onClickHandler = ()=>{
    dispatch(callProjectUdateApi({form: form, projectId: projectId}))
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
    >
      <Box sx={modalBoxStyle({w: '35vw', h:'75vh'})} maxHeight='600px'>
        <ModalHeader title="프로젝트 수정" onClickHandler={handleClose}/>
        <ProjectModifyForm projectId={projectId}/>
        <FinishButton text={"완료"} onClickHandler={onClickHandler}/>
      </Box>
    </Modal>
  );
}
