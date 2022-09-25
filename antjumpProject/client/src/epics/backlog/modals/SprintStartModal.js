import { useEffect, useState } from "react";

import { Button, Modal, Box, Grid, Typography} from "@mui/material";

import { modalBoxStyle } from "../../../common/styles/ModalStyle";
import ModalHeader from "../../../common/components/headers/ModalHeader";
import SprintStartInfoForm from "../components/SprintStartInfoForm";
import SprintMemberSelectModal from "./SprintMemberSelectModal";

import { GET_INCLUDED_ISSUES } from "../../../modules/IssueModule";
import { useSelector, useDispatch} from "react-redux";
import { incluedIssuesData } from "../datas/sprint";


function SprintStartModal(){
    const [open, setOpen] = useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };


    const includedIssues = useSelector(state => state.issueReducer);
    console.log(includedIssues);
    const dispatch = useDispatch();
    useEffect(
        ()=>{
            dispatch({type: GET_INCLUDED_ISSUES, payload: incluedIssuesData});
        },
        [open]
    )

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
                        <ModalHeader title={`스프린트 시작 | 포함된 이슈(${includedIssues.length}개)`} onClickHandler={handleClose}/>
                        <Grid container spacing={1} height='80%'>
                            <Grid item xs={12} height='10%'  mb={2}>
                                <Typography  sx={{fontSize: 30, display: 'inline-block'}}>
                                    정보 입력
                                </Typography>
                            </Grid>
                            <Grid item xs={12} height='85%'>
                                <SprintStartInfoForm />
                            </Grid>
                            <Grid item xs={12} >
                                <Button color="grey" variant="contained"  sx={{float:'left'}} onClick={handleClose} mb={1}>
                                    취소
                                </Button>
                                <SprintMemberSelectModal includedIssues={includedIssues} beforeHandleClose = {handleClose}/>
                                
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