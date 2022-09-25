import * as React from 'react';
import { paymentRows } from "../components/samples/PaymentSample";
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { GET_PAYMENT_DETAIL } from '../modules/PaymentModule';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Button } from '@mui/material';
import { Link } from "react-router-dom";

function PaymentDetailPage() {

    
    const { paymentNumber } = useParams();

    const payments = useSelector(state => state.paymentReducer);
    const payment = payments[paymentNumber-1];
    console.log("payment: ", payments);

    const dispatch = useDispatch();

    useEffect(
        ()=>{
            dispatch({type: GET_PAYMENT_DETAIL, payload: paymentRows});
        },
        [dispatch]
    );
    return payment && (
        <>
        
          <Box sx ={{mt: 15}}>
            <Typography sx={{ mt: 1, mb: 1,
                    fontFamily: 'monospace',
                    fontWeight: 700 }} variant="h3" align='center' color='#004392' >
                      결제 세부
            </Typography>
            <Box sx={{ml:10}} >
                <Typography sx={{ mt: 1, mb: 1,
                        fontFamily: 'monospace',
                        fontWeight: 700 }} variant="h5" align='left' color='#004392' >
                    회원 이메일 :  { payment.memberEmail }
                </Typography>
                <Typography sx={{ mt: 1, mb: 1,
                        fontFamily: 'monospace',
                        fontWeight: 700 }} variant="h5" align='left' color='#004392' >
                    회원 핸드폰 번호 : { payment.memberPhone }
                </Typography>
                <Typography sx={{ mt: 1, mb: 1,
                        fontFamily: 'monospace',
                        fontWeight: 700 }} variant="h5" align='left' color='#004392' >
                    회원 결제일자 : { payment.paymentTime }
                </Typography>
                <Typography sx={{ mt: 1, mb: 1,
                        fontFamily: 'monospace',
                        fontWeight: 700 }} variant="h5" align='left' color='#004392' >
                    회원 결제키 : { payment.paymentKey }
                </Typography>
                <Typography sx={{ mt: 1, mb: 1,
                        fontFamily: 'monospace',
                        fontWeight: 700 }} variant="h5" align='left' color='#004392' >
                    결제금액 : { payment.paymentAmount }
                </Typography>
                <Typography sx={{ mt: 1, mb: 1,
                        fontFamily: 'monospace',
                        fontWeight: 700 }} variant="h5" align='left' color='#004392' >
                    환불 요청 여부 : { payment.refund }
                </Typography>
                <Typography sx={{ mt: 1, mb: 1,
                      fontFamily: 'monospace',
                      fontWeight: 700 }} variant="h5" align='left' color='#004392' >
                    환불 요청 사유 : { payment.refundReason }
                </Typography>
            </Box>
            <Box sx={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
            </Box>
          </Box>
        </>
    );
}

export default PaymentDetailPage;