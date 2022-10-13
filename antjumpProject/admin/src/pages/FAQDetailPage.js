import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Button } from '@mui/material';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { callFAQDetailAPI, callQNADeleteAPI } from '../apis/FAQAPICalls';

function FAQDetailPage() {

    
    const { faqNumber } = useParams();

    const faqs = useSelector(state => state.faqReducer);
    const faq = faqs;
    console.log("faq: ", faq);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(
        ()=>{
            dispatch(callFAQDetailAPI(faqNumber));
        },
        [dispatch]
    );
    
    const deleteFaq = () => {        
        console.log('[FAQDetailPage] deleteFAQ Start!!');

        dispatch(callQNADeleteAPI(faqNumber));

        alert('글 삭제가 완료되었습니다.');

        navigate(`/faqs`);

        console.log('[FAQDetailPage] deleteFAQ End!!');

    }

    return faq && (
        <>
        
          <Box sx ={{mt: 15}}>
            <Typography sx={{ mt: 1, mb: 1,
                    fontFamily: 'monospace',
                    fontWeight: 700 }} variant="h3" align='center' color='#004392' >
                FAQ
            </Typography>
            <Box sx={{ml:10}} >
                <Typography sx={{ mt: 1, mb: 1,
                        fontFamily: 'monospace',
                        fontWeight: 700 }} variant="h5" align='left' color='#004392' >
                    { faq.faqTitle }
                </Typography>
                <Typography sx={{ mt: 1, mb: 1,
                        fontFamily: 'monospace',
                        fontWeight: 700 }} variant="h5" align='left' color='#004392' >
                    { faq.faqContent }
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
            <Button onClick={ deleteFaq }>삭제하기</Button>
          </Box>
        </>
    );
}

export default FAQDetailPage;