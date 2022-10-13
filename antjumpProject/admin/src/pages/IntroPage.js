import * as React from 'react';
import Typography from '@mui/material/Typography';
import IntroList from '../components/lists/IntroList';
import { Box } from '@mui/material';

function IntroPage() {

  return (
    <>
      <Box sx ={{mt: 15}}>
        <Typography sx={{ mt: 1, mb: 1,
                fontFamily: 'monospace',
                fontWeight: 700 }} variant="h3" align='center' color='#004392' >
            소개
        </Typography>
        <IntroList/>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center'
        }}>
        </Box>
      </Box>
    </>
    
    
  );
}
export default IntroPage;