import { Button, Modal, Box, Grid } from "@mui/material";
import { inviteModalBoxstyle } from "./ModalStyle";
import { useState } from "react";
import ModalHeader from "./ModalHeader";
import FinishButton from "../items/FinishButton";
import InviteInputForm from "../Containers/InviteInputForm";
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
                <Box sx={inviteModalBoxstyle} >
                    <ModalHeader title="팀원 초대" onClickHandler={handleClose}/>
                    <Box sx={{}}>
                        <Grid container spacing={2}  >
                            <Grid item xs={12}>
                                <InviteInputForm/>
                            </Grid>
                            <Grid item xs={12} >
                                <Button  
                                    color='button' 
                                    variant="contained" 
                                    onClick={inviteHandler}
                                    sx={{float: 'right'}}
                                >
                                    초대 메일 발송
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>

                   
                </Box>
                
            </Modal>
        </>
        
    );
}

export default ProjectMemberInviteModal;