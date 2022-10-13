import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { callPossessionListAPI } from "../../../apis/PaymentAPICalls";
import moment from 'moment';
import { callGetMemberAPI } from "../../../apis/MemberAPICalls";
import { decodeJwt } from "../../../utils/tokenUtils";

function PaymentPage() {

    const possession = useSelector(state => state.paymentReducer);
    const possessions = possession.list;
    const member = useSelector(state => state.memberReducer);
    const token = decodeJwt(window.localStorage.getItem("accessToken"));

    useEffect(() => {
        console.log("token", token.sub);
        if (token !== null) {
          dispatch(
            callGetMemberAPI({
              memberId: token.sub,
            })
          );
        }
      }, []);

    
    console.log("possession: ", possession);

    const dispatch = useDispatch();
  
    useEffect(() => {
        dispatch(callPossessionListAPI(String(token.sub)));
      }, [dispatch]);

    return possessions && (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                    <TableRow>
                        <TableCell>보유 상품 번호</TableCell>
                        <TableCell align="right">보유 상품명</TableCell>
                        <TableCell align="right">결제일</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {possessions.map((possession) => (
                        <TableRow
                        key={possession.goodsPossessionId}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        component={Link} to={String(possession.goodsPossessionId)}
                        >
                        <TableCell component="th" scope="row">
                            {possession.goodsPossessionId}
                        </TableCell>
                        <TableCell align="right">{possession.goodsName}</TableCell>
                        <TableCell align="right">{possession.paymentTime=moment().format('YYYY-MM-DD')}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
                </TableContainer>
            
            <Box sx={{
                display: "flex", 
                justifyContent: "center" 
            }}>
                <Button component={Link} to="goods">상품 구매</Button>
            </Box>
        </>
    );
}

export default PaymentPage;