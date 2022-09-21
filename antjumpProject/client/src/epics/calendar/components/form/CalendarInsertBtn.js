import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles'

const CustomButton = styled(Button)({

      backgroundColor: 'gray',
      color: '#fff',
      '&:hover': {
        backgroundColor: 'gray',
        color: '#3c52b2',
  }})

export default function CalendarInsertBtn() {


  return (
    <CustomButton variant="contained" disableElevation
        // sx={{ backgroundColor: 'gray', display: 'inline-block' }}
    >
      일정 추가
    </CustomButton>
  );
}
