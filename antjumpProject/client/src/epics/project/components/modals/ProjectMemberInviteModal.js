
import { useState } from "react";

import { Button, Modal, Box, Grid, Paper} from "@mui/material";

import { modalBoxStyle } from "../../../../common/styles/ModalStyle";
import ModalHeader from "../../../../common/components/headers/ModalHeader";
import InviteInputForm from "../containers/InviteInputForm";
import FinishButton from "../items/FinishButton";

function ProjectMemberInviteModal({project}){
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
        alert("초대 메일을 발송하였습니다!");
      setOpen(false);
    };

    const inviteHandler = () =>{
        handleClose();
    }
    return (
        <>
            <Button 
                onClick={handleOpen}
                color="button" variant="contained"
                sx={{float: 'right'}}
            >
                팀원 초대
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={modalBoxStyle({w:'30vw', h:'50vh'})} >
                    <ModalHeader title="팀원 초대" onClickHandler={handleClose}/>
                    <Grid container spacing={1} height='80%'>
                        <Grid item xs={12} height='80%'  sx={{backgroundColor: '#F2F2F2'}}>
                                <InviteInputForm/>
                        </Grid>     
                        <Grid item xs={12}>
                            <FinishButton text="초대 메일 발송" onClickHandler={inviteHandler}/>
                        </Grid>
                    </Grid>
                </Box>
            </Modal>
        </>
        
    );
}

export default ProjectMemberInviteModal;