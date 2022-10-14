import { Typography } from '@mui/material';
import { Box } from '@mui/material';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { callCreatePaymentAPI } from '../../../apis/PaymentAPICalls'
import { decodeJwt } from "../../../utils/tokenUtils";

function SuccessPage () {

    const token = decodeJwt(window.localStorage.getItem("accessToken"));

    let qs = window.location.search + "&memberId=" + token.sub;
    const paymentRecipt = useSelector(state => state.paymentReducer);
    console.log('state : ', paymentRecipt);
    const dispatch = useDispatch();

    useEffect(
        () => { dispatch(callCreatePaymentAPI(qs)) },
        [dispatch, qs]
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
                    >영수증 : <Typography >{paymentRecipt.receiptUrl}</Typography></Typography>
                </Box>
            </>
        )
    );
}

export default SuccessPage;