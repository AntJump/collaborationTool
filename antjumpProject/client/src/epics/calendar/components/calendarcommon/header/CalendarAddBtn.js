import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles'

const CustomButton = styled(Button)({

      backgroundColor: '#004392',
      color: '#fff',
      '&:hover': {
        backgroundColor: '3A7DCB',
        color: 'white'
      },
      marginTop: '15px',
      marginLeft: '15px',
      height: '40px'
})

export default function CalendarAddBtn() {


  return (
    <CustomButton 
        variant="contained" 
        disableElevation
    >
      일정 추가
    </CustomButton>
  );
}
