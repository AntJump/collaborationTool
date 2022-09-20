import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Divider } from '@mui/material';
import { modalBoxstyle } from './ModalStyle';



function MemberListModal({open, handleModalClose, project}) {
    return (
        <Modal
        open={open}
        onClose={handleModalClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
    >
        <Box sx={modalBoxstyle}>
          <Typography id="modal-title" variant="h6" component="h2">
            프로젝트 팀원 목록
          </Typography>
          <Divider sx={{ my: 3 }} />
          <input name="id" value={project.id} type="hidden" readOnly disabled></input>
            <Typography  sx={{ mt: 1}}>
                {project.key}
            </Typography>
            <Typography  sx={{ mt: 1, mb:5 , fontSize: 35 }}>
                {project.name}
            </Typography>
        </Box>
    </Modal>
    );
};


export default MemberListModal;