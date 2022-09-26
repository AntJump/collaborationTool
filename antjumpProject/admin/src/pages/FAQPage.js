import * as React from 'react';
import Typography from '@mui/material/Typography';
import FAQList from '../components/lists/FAQList';
import { Box, Button } from '@mui/material';
import { Link } from "react-router-dom";

function FAQPage() {

  return (
    <>
      <Box sx ={{mt: 15}}>
        <Typography sx={{ mt: 1, mb: 1,
                fontFamily: 'monospace',
                fontWeight: 700 }} variant="h3" align='center' color='#004392' >
            FAQ
        </Typography>
        <FAQList/>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center'
        }}>
          <Button
            component={Link} to="write">글 작성
          </Button>
        </Box>
      </Box>
    </>
    
    
  );
}
export default FAQPage;