import * as React from 'react';
import Typography from '@mui/material/Typography';
import QNAList from '../components/lists/QNAList';
import { Box } from '@mui/material';

function QNAPage() {

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
            { sw && '미답변 문의'}
            { !sw && '전체 문의'}
        </Typography>
        <QNAList isSw={sw}/>
        <Box sx={{
          display: 'flex',
          justifyContent: 'center'
        }}>
        </Box>
      </Box>
      <Box component="button" onClick={ onClickQNAHandler }>{sw?'전체문의 보기':'미답변문의 보기'}</Box>
    </>
  );
}
export default QNAPage;