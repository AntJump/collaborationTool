import { useEffect, useState } from "react";

import { Button, Modal, Box, Grid, Typography, Divider} from "@mui/material";

import { modalBoxStyle } from "../../../common/styles/ModalStyle";
import ModalHeader from "../../../common/components/headers/ModalHeader";

import SprintMemberSelectList from "../lists/SprintMemberSelectList";


function SprintAllocateModal({includedIssues, beforeHandleClose}){
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
      beforeHandleClose();
    };

    const onClickStart= () => {
        alert("스프린트 시작되었습니다! 열심히 달려볼까요?");
        handleClose();
    }

    

    return (
        <>
            <Button color='button' variant="contained"  onClick={handleOpen} sx={{float : 'right'}}> 
                다음
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <Box sx={modalBoxStyle({w: '600px', h: '600px'})} >
                    <ModalHeader title={`스프린트 시작 | 포함된 이슈(${includedIssues.length}개)`} onClickHandler={handleClose}/>
                    <Grid container spacing={1} height='80%'>
                        <Grid item xs={12} height='10%'>
                            <Typography  sx={{fontSize: 30, display: 'inline-block'}}>
                                팀원(담당자) 배정
                            </Typography>
                        </Grid>
                        <Grid item xs={12}   sx={{textAlign:"center"}}> 
                            <Grid  container spacing={2} >
                                <Grid item xs={6}><h4>이슈</h4></Grid>
                                <Grid item xs={6}><h4>프로젝트 팀원</h4></Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} height='80%'>
                            <SprintMemberSelectList includedIssues={includedIssues}/>
                        </Grid>
                        <Grid item xs={12} height='5%'>
                        <Button color="grey" variant="contained" onClick={handleClose} mb={1}>
                            취소
                        </Button>
                        <Button color="button" variant="contained" sx={{float:'right'}} onClick={onClickStart} mb={1}>
                            시작하기
                        </Button>
                    </Grid>
                    </Grid>
                    
                </Box>
            </Modal>
        </>
    );
}

export default SprintAllocateModal;