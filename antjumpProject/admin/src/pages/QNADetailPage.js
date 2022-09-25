import * as React from 'react';
import { qnaRows } from "../components/samples/QNASample";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { GET_QNA_DETAIL } from '../modules/QNAModule';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Button } from '@mui/material';
import { Link } from "react-router-dom";

function QNADetailPage() {

    
    const { qnaNumber } = useParams();

    const qnas = useSelector(state => state.qnaReducer);
    const qna = qnas[qnaNumber];
    console.log("qna: ", qna);

    const dispatch = useDispatch();

    useEffect(
        ()=>{
            dispatch({type: GET_QNA_DETAIL, payload: qnaRows});
        },
        [dispatch]
    );
    return qna && (
        <>
            
            <Box sx ={{mt: 15}}>
                <Typography sx={{ mt: 1, mb: 1,
                        fontFamily: 'monospace',
                        fontWeight: 700 }} variant="h3" align='center' color='#004392' >
                    문의
                </Typography>
                <Box sx={{ml:10}} >
                    <Typography sx={{ mt: 1, mb: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700 }} variant="h5" align='left' color='#004392' >
                        { qna.qnaTitle }
                    </Typography>
                    <Typography sx={{ mt: 1, mb: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700 }} variant="h5" align='left' color='#004392' >
                        { qna.qnaContent }
                    </Typography>
                </Box>
                <Box sx={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                </Box>
                <Button>삭제하기</Button>
                <Button
                    component={Link} to="write">답변달기
                </Button>
            </Box>
        </>
    );
}

export default QNADetailPage;