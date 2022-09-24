import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Divider, Button, Grid, Stack } from '@mui/material';


import ProjectMemberList from '../lists/ProjectMemberList';
import ProjectWaitMemberList from '../lists/ProjectWaitMemberList';
import FinishButton from '../items/FinishButton';
import ProjectMemberInviteModal from './ProjectMemberInviteModal';
import { modalBoxStyle } from '../../../../common/styles/ModalStyle';
import ModalHeader from '../../../../common/components/headers/ModalHeader';


function MemberListModal({open, handleClose, project}) {
    return (
        <Modal
        open={open}
        onClose={handleClose}
    >
        <Box sx={modalBoxStyle({w:'60vw',h:'70vh'})} maxHeight='600px' maxWidth='600px'>
            <ModalHeader title="프로젝트 팀원 목록" onClickHandler={handleClose}/>
            <Box>
                <Grid container spacing={2}>
                    <Grid xs={6} >
                        <Typography sx={{ mt: 1, ml: 2}} >
                            {project.key}
                        </Typography>
                        <Typography  sx={{mb:2 , ml: 2, fontSize: 25 }}>
                            {project.name}
                        </Typography>
                    </Grid>
                    <Grid xs={6}>
                        <ProjectMemberInviteModal project={project}/>
                    </Grid>
                </Grid>
            </Box>
            <Divider sx={{ my: 1 }} />
            <Grid container spacing={1} height='70%'>
                <Grid item xs={12}  height='90%'>
                    <Grid 
                        container
                        spacing={1}
                        height={'100%'} 
                        justifyContent="center"
                        // direction="row"
                    >   
                        <Grid item xs ={7} height={'90%'}  sx={{ textAlign:"center"}}>
                            <h3>팀원</h3>
                            <ProjectMemberList/>
                        </Grid>
                        <Grid item xs ={5} height={'90%'}  sx={{ textAlign:"center"}}>
                            <h3>초대 대기</h3>
                            <ProjectWaitMemberList />
                        </Grid> 
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <FinishButton text="닫기" onClickHandler={handleClose}/>
                </Grid>
            </Grid>
        </Box>
    </Modal>
    );
};


export default MemberListModal;