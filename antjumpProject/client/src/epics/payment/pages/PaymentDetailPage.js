import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { callPossessionsDetailAPI } from "../../../apis/PaymentAPICalls";
import moment from "moment";

function PaymentDetailPage() {

    const { possessionNumber } = useParams();

    const possessions = useSelector(state => state.paymentReducer);
    const possession = possessions;
    console.log("possession: ", possession);

    const dispatch = useDispatch();

    useEffect(
        ()=>{
            dispatch(callPossessionsDetailAPI(possessionNumber));
        },
        [dispatch]
    );
    return possession && (
        <>
            <Typography sx={{ mt: 1, mb: 1,
                    fontFamily: 'monospace',
                    fontWeight: 700 }} variant="h3" align='center' color='#004392' >
                내 상품 정보
            </Typography>
            <Box sx={{ml:10}} >
                <Typography sx={{ mt: 1, mb: 1,
                        fontFamily: 'monospace',
                        fontWeight: 700 }} variant="h5" align='left' color='#004392' >
                    상품번호 : { possession.goodsPossessionId }
                </Typography>
                <Typography sx={{ mt: 1, mb: 1,
                        fontFamily: 'monospace',
                        fontWeight: 700 }} variant="h5" align='left' color='#004392' >
                    상품이름 : { possession.goodsName }
                </Typography>
                <Typography sx={{ mt: 1, mb: 1,
                        fontFamily: 'monospace',
                        fontWeight: 700 }} variant="h5" align='left' color='#004392' >
                    결제 일자 : { possession.paymentTime=moment().format('YYYY-MM-DD') }
                </Typography>
                <Typography sx={{ mt: 1, mb: 1,
                        fontFamily: 'monospace',
                        fontWeight: 700 }} variant="h5" align='left' color='#004392' >
                    상품 시작 일자 : { possession.goodsStartDate }
                </Typography>
                <Typography sx={{ mt: 1, mb: 1,
                        fontFamily: 'monospace',
                        fontWeight: 700 }} variant="h5" align='left' color='#004392' >
                    상품 만료 일자 : { possession.goodsEndDate }
                </Typography>
                <Typography sx={{ mt: 1, mb: 1,
                        fontFamily: 'monospace',
                        fontWeight: 700 }} variant="h5" align='left' color='#004392' >
                    상품 남은 일자 : { possession.goodsRemainingDate }
                </Typography>
                <Typography sx={{ mt: 1, mb: 1,
                        fontFamily: 'monospace',
                        fontWeight: 700 }} variant="h5" align='left' color='#004392' >
                    상품 사용중 여부 : { possession.goodsUseYn }
                </Typography>
            </Box>
            <Box sx={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
            </Box>
        </>
    );
}

export default PaymentDetailPage;