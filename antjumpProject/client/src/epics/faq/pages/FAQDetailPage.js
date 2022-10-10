import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { callFAQDetailAPI } from '../../../apis/FAQAPICalls';

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
            <Typography sx={{ mt: 1, mb: 1,
                    fontFamily: 'monospace',
                    fontWeight: 700 }} variant="h3" align='center' color='#004392' >
                { faq.faqCategoryName}
            </Typography>
            <Box sx={{ml:10}} >
                <Typography sx={{ mt: 1, mb: 1,
                        fontFamily: 'monospace',
                        fontWeight: 700 }} variant="h5" align='left' color='#004392' >
                    { faq.faqTitle }
                </Typography>
                <Typography sx={{ mt: 1, mb: 1,
                        fontFamily: 'monospace',
                        fontWeight: 400 }} variant="h6" align='left'  >
                    { faq.faqContent }
                </Typography>
            </Box>
        </>
    );
}

export default FAQDetailPage;