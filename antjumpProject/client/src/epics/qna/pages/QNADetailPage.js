import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Button } from '@mui/material';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { callQNADetailAPI, callQNADeleteAPI } from '../../../apis/QNAAPICalls';

function QNADetailPage() {

    
    const { qnaNumber } = useParams();

    const qnas = useSelector(state => state.qnaReducer);
    const qna = qnas;
    console.log("qna: ", qna);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(
        ()=>{
            dispatch(callQNADetailAPI(qnaNumber));
        },
        [dispatch, qnaNumber]
    );

    
    const deleteQna = () => {        
        console.log('[QNADetailPage] deleteQna Start!!');

        dispatch(callQNADeleteAPI(qnaNumber));

        alert('글 삭제가 완료되었습니다.');

        navigate(`/qnas`);

        console.log('[QNADetailPage] deleteQna End!!');

    }

    return qna && (
        <>
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
            <Box>
                {
                    qna.qnaFileUrl !== null
                    ?<Box component="img" src={qna.qnaFileUrl}/>
                    : null
                }
            </Box>
            <Box sx={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
                <Button component={Link} to="modify">수정하기</Button>   
                <Button onClick={ deleteQna }>삭제하기</Button>
            </Box>
        </>
    );
}

export default QNADetailPage;