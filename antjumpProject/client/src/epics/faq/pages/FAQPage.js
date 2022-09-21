import * as React from 'react';
import Typography from '@mui/material/Typography';
import FAQList from '../components/lists/FAQList';

function FAQ() {

  return (
    <>
        <Typography sx={{ mt: 1, mb: 1,
                fontFamily: 'monospace',
                fontWeight: 700 }} variant="h3" align='center' color='#004392' >
            자주 묻는 질문(FAQ)
        </Typography>
        <FAQList/>
    </>
    
    
  );
}

export default FAQ;

