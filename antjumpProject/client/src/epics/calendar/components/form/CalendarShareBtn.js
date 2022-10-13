import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles'

const CustomButton = styled(Button)({

      backgroundColor: 'gray',
      color: '#fff',
      '&:hover': {
        backgroundColor: '#E8E8E8',
        color: 'black'
      },
      marginTop: '10px',
      marginLeft: '15px',
      height: '40px'
})

export default function CalendarShareBtn() {


  return (
    <CustomButton variant="contained" disableElevation
        // sx={{ backgroundColor: 'gray', display: 'inline-block' }}
    >
      일정 공유하기
    </CustomButton>
  );
}
