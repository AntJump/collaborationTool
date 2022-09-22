import * as React from 'react';
import Typography from '@mui/material/Typography';
import QNAList from '../lists/QNAList';
import { Button } from '@mui/material';
import { Link } from "react-router-dom";

function QNAPage() {

  return (
    <>
        <Typography sx={{ mt: 1, mb: 1,
                fontFamily: 'monospace',
                fontWeight: 700 }} variant="h3" align='center' color='#004392' >
            문의게시판
        </Typography>
        <QNAList/>
        <Button component={Link} to="write">글 작성</Button>
    </>
    
    
  );
}
export default QNAPage;