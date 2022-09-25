


import { useState } from "react";

import { Button, Modal, Box, Grid, Typography} from "@mui/material";

import { modalBoxStyle } from "../../../common/styles/ModalStyle";
import ModalHeader from "../../../common/components/headers/ModalHeader";
import SprintStartInfoForm from "../components/SprintStartInfoForm";

function SprintStartModal({includedIssues}){
    const [open, setOpen] = useState(false);
    console.log(includedIssues);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    const finishHandler = () =>{
        handleClose();
    };

    const onClickNext = () => {
        alert('다음?');
    };
    return (
        includedIssues?
            <>
                <Button color='button' variant="contained" size="small" onClick={handleOpen}> 
                    스프린트 시작
                </Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                >
                    <Box sx={modalBoxStyle({w: '600px', h: '600px'})} >
                        <ModalHeader title="스프린트 / 정보 입력" onClickHandler={handleClose}/>
                        <Grid container spacing={1} height='80%'>
                            <Grid item xs={12} height='10%'  mb={2}>
                                <Typography  sx={{fontSize: 30, display: 'inline-block'}}>
                                    스프린트 시작 |
                                </Typography>
                                <Typography sx= {{ml: 1 ,display: 'inline-block'}}>
                                    포함된 이슈({includedIssues.length}개)
                                </Typography>
                            </Grid>
                            <Grid item xs={12} height='85%'>
                                <SprintStartInfoForm/>
                            </Grid>
                            <Grid item xs={12} >
                                <Button color="button" variant="contained" sx={{float:'right'}} onClick={onClickNext} mb={1}>
                                    다음
                                </Button>
                                <Button color="grey" variant="contained"  sx={{float:'right'}} onClick={handleClose} mb={1}>
                                    취소
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Modal>
            </>
        :   <>
                <Button color='disabled' variant="contained" size="small"> 
                    스프린트가 비었어요!
                </Button>
            </>
        
    );
}

export default SprintStartModal;