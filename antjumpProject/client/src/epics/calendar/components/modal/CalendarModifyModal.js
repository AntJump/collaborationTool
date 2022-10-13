import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import ModalHeader from './ModalHeader';
import { modalBoxstyle } from './ModalStyle';
import CalendarModify from '../form/container/CalendarModify';

export default function CalendarModifyModal({calendarId, open, handleClose}) {

  return (
    <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
    >
        <Box sx={modalBoxstyle}>
            <ModalHeader title="일정 수정" onClickHandler={handleClose}/>
            <CalendarModify calendarId = { calendarId }/>
        </Box>
    </Modal>
  );
}
