import { Typography } from '@mui/material';
import { Box } from '@mui/material';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function SuccessPage () {

    const paymentRecipt = useSelector(state => state.paymentReducer);
    console.log('state : ', paymentRecipt);
    const dispatch = useDispatch();
    

    useEffect(
        () => { dispatch() },
        [dispatch]
    );
    return (
        paymentRecipt &&(
            <>
                <Typography
                    sx={{
                        varient: 'h1'
                    }}
                >정액권을 구매해주셔서 감사합니다.</Typography>
                <Box>
                    <Typography
                        sx={{
                            varient: 'h6'
                        }}                            
                    >영수증 : <Typography >{paymentRecipt}</Typography></Typography>
                </Box>
            </>
        )
    );
}

export default SuccessPage;