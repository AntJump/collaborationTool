import * as React from 'react';
import Typography from '@mui/material/Typography';
import MemberList from '../components/lists/MemberList';
import { Box } from '@mui/material';

function MemberPage() {

  const [sw, setSw] = React.useState(true);

  const onClickMemberHandler = () => {
    return !setSw(!sw);
  }
  
    return (
      <>
        <Box sx ={{mt: 15}}>
          <Typography sx={{ mt: 1, mb: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700 }} variant="h3" align='center' color='#004392' >
              
              { sw && '전체 회원 보기'}
                { !sw && '탈퇴 회원 보기'}
          </Typography>
          <MemberList isSw={sw}/>
          <Box sx={{
            display: 'flex',
            justifyContent: 'center'
          }}>
          </Box>
        </Box>
        <Box component="button" onClick={ onClickMemberHandler }>{sw?'탈퇴 회원 보기':'전체 회원 보기'}</Box>
      </>
    );
  }
  
  export default MemberPage;
  