import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles'

const CustomButton = styled(Button)({

      backgroundColor: '#004392',
      color: '#fff',
      '&:hover': {
        backgroundColor: '#3A7DCB',
        color: 'white',
      },
      height: '40px',
      width: '120px',
      marginTop: '10px',
      marginBottom: '50px'
})

export default function CalendarInsertBtn() {

  return (
    <CustomButton 
      variant="contained" 
      disableElevation
      // onClick={ onClickHandler }
    >
      일정 추가
    </CustomButton>
  );
}
