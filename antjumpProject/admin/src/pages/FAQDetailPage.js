import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Button } from '@mui/material';
import { Link } from "react-router-dom";
import { callFAQDetailAPI } from '../apis/FAQAPICalls';

function FAQDetailPage() {

    
    const { faqNumber } = useParams();

    const faqs = useSelector(state => state.faqReducer);
    const faq = faqs;
    console.log("faq: ", faq);

    const dispatch = useDispatch();

    useEffect(
        ()=>{
            dispatch(callFAQDetailAPI(faqNumber));
        },
        [dispatch]
    );
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
            <Button>삭제하기</Button>
          </Box>
        </>
    );
}

export default FAQDetailPage;