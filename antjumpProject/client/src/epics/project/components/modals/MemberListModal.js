import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Divider, Button, Grid, Stack } from '@mui/material';
import { modalBoxstyle } from './ModalStyle';
import ProjectMemberList from '../lists/ProjectMemberList';
import ProjectWaitMemberList from '../lists/ProjectWaitMemberList';


function MemberListModal({open, handleClose, project}) {
    return (
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
    >
        <Box sx={modalBoxstyle}>
            <Button onClick={handleClose} color="button" variant='contained'>
                X
            </Button>
            <Box>
                <Typography id="modal-title" variant="h6" component="h2">
                    프로젝트 팀원 목록
                </Typography>
                <Divider sx={{ my: 3 }} />
                <Grid container spacing={2}>
                    <Grid xs={11}>
                        <Typography  sx={{ mt: 1}}>
                            {project.key}
                        </Typography>
                        <Typography  sx={{ mt: 1, mb:3 , fontSize: 35 }}>
                            {project.name}
                        </Typography>
                    </Grid>
                    <Grid xs={1}>
                        <Button color="button" variant="contained">팀원 초대</Button>
                    </Grid>
                </Grid>
           </Box>
            <Divider sx={{ my: 1 }} />
            <Stack 
                direction="row" 
                justifyContent="center"
                maxHeight={'50%'}
                spacing={2}
                >
                <Box xs ={10} sx={{  textAlign:"center"}}>
                    <h3>팀원</h3>
                    <ProjectMemberList/>
                </Box>
                <Box xs ={2} sx={{ textAlign:"center"}}>
                    <h3>초대 대기</h3>
                    <ProjectWaitMemberList />
                </Box>
                
            </Stack>
            <Button onClick={handleClose}  color='button' variant="contained" sx={{marginTop: '40px'}}>닫기</Button>
            
        </Box>
    </Modal>
    );
};


export default MemberListModal;