import * as React from 'react';
import Typography from '@mui/material/Typography';
import QNAList from '../components/lists/QNAList';
import { Box } from '@mui/material';

function QNAPage() {

  return (
    <>
    
      <Box sx ={{mt: 15}}>
        <Typography sx={{ mt: 1, mb: 1,
                fontFamily: 'monospace',
                fontWeight: 700 }} variant="h3" align='center' color='#004392' >
            문의게시판
        </Typography>
        <QNAList/>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center'
        }}>
        </Box>
      </Box>
    </>
    
    
  );
}
export default QNAPage;