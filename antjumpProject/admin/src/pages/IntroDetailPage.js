import * as React from 'react';
import { introRows } from "../components/samples/IntroSample";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { GET_INTRO_DETAIL } from '../modules/IntroModule';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Button } from '@mui/material';
import { Link } from "react-router-dom";

function IntroDetailPage() {

    
    const { introNumber } = useParams();

    const intros = useSelector(state => state.introReducer);
    const intro = intros[introNumber];
    console.log("intro: ", intro);

    const dispatch = useDispatch();

    useEffect(
        ()=>{
            dispatch({type: GET_INTRO_DETAIL, payload: introRows});
        },
        [dispatch]
    );
    return intro && (
        <>
        
          <Box sx ={{mt: 15}}>
            <Typography sx={{ mt: 1, mb: 1,
                    fontFamily: 'monospace',
                    fontWeight: 700 }} variant="h3" align='center' color='#004392' >
                소개
            </Typography>
            <Box sx={{ml:10}} >
                <Typography sx={{ mt: 1, mb: 1,
                        fontFamily: 'monospace',
                        fontWeight: 700 }} variant="h5" align='left' color='#004392' >
                    { intro.introContent }
                </Typography>
            </Box>
            <Box sx={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
            </Box>
            <Button
              component={Link} to="modify">수정하기
            </Button>
            <Button>삭제하기</Button>
          </Box>
        </>
    );
}

export default IntroDetailPage;