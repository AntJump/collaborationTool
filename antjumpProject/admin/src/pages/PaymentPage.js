import * as React from 'react';
import Typography from '@mui/material/Typography';
import PaymentList from '../components/lists/PaymentList';
import { Box } from '@mui/material';

function PaymentPage() {

  return (
    <>
      <Box sx ={{mt: 15}}>
        <Typography sx={{ mt: 1, mb: 1,
                fontFamily: 'monospace',
                fontWeight: 700 }} variant="h3" align='center' color='#004392' >
            결제내역
        </Typography>
        <PaymentList/>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center'
        }}>
        </Box>
      </Box>
    </>
    
    
  );
}
export default PaymentPage;