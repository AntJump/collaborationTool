import * as React from 'react';
import Typography from '@mui/material/Typography';
import PaymentList from '../components/lists/PaymentList';
import { Box } from '@mui/material';

function PaymentPage() {

  const [sw, setSw] = React.useState(true);

  const onClickQNAHandler = () => {
    return !setSw(!sw);
  }

  return (
    <>
      <Box sx ={{mt: 15}}>
        <Typography sx={{ mt: 1, mb: 1,
                fontFamily: 'monospace',
                fontWeight: 700 }} variant="h3" align='center' color='#004392' >
                { sw && '전체 결제 내역'}
                { !sw && '환불 요청 내역'}
        </Typography>
        <PaymentList isSw={sw}/>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center'
        }}>
        </Box>
      </Box>
      <Box component="button" onClick={ onClickQNAHandler }>{sw?'환불 요청 내역 보기':'전체 결제 내역 보기'}</Box>
    </>
  );
}
export default PaymentPage;