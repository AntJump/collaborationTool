
import { useState } from "react";

import { Button, Modal, Box, Grid } from "@mui/material";

import { modalBoxStyle } from "../../../../common/styles/ModalStyle";
import ModalHeader from "../../../../common/components/headers/ModalHeader";
import InviteInputForm from "../Containers/InviteInputForm";
import FinishButton from "../items/FinishButton";

function ProjectMemberInviteModal({project}){
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
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
            >
                팀원 초대
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={modalBoxStyle({w:'30vw', h:'50vh'})} >
                    <ModalHeader title="팀원 초대" onClickHandler={handleClose}/>
                    <Box sx={{}}>
                        <Grid container spacing={2}  >
                            <Grid item xs={12}>
                                <InviteInputForm/>
                            </Grid>
                            <Grid item xs={12} >
                                <FinishButton text="초대 메일 발송" onClickHandler={inviteHandler}/>
                            </Grid>
                        </Grid>
                    </Box>

                   
                </Box>
                
            </Modal>
        </>
        
    );
}

export default ProjectMemberInviteModal;