import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import { callMemberDetailAPI } from '../apis/MemberAPICalls';
import moment from "moment";

function MemberDetailPage() {

    
    const { memberNumber } = useParams();

    const members = useSelector(state => state.memberReducer);
    const member = members;
    console.log("member: ", members);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(
        ()=>{
            dispatch(callMemberDetailAPI(memberNumber));
        },
        [dispatch]
    );

    return member && (
        <>
        
          <Box sx ={{mt: 15}}>
            <Typography sx={{ mt: 1, mb: 1,
                    fontFamily: 'monospace',
                    fontWeight: 700 }} variant="h3" align='center' color='#004392' >
                      회원 세부
            </Typography>
            <Box sx={{ml:10}} >
                <Typography sx={{ mt: 1, mb: 1,
                      fontFamily: 'monospace',
                      fontWeight: 700 }} variant="h5" align='left' color='#004392' >
                    회원 이름 : { member.memberName }
                </Typography>
                <Typography sx={{ mt: 1, mb: 1,
                        fontFamily: 'monospace',
                        fontWeight: 700 }} variant="h5" align='left' color='#004392' >
                    회원 이메일 :  { member.memberEmail }
                </Typography>
                <Typography sx={{ mt: 1, mb: 1,
                        fontFamily: 'monospace',
                        fontWeight: 700 }} variant="h5" align='left' color='#004392' >
                    회원 핸드폰 번호 : { member.memberPhone }
                </Typography>
                <Typography sx={{ mt: 1, mb: 1,
                        fontFamily: 'monospace',
                        fontWeight: 700 }} variant="h5" align='left' color='#004392' >
                    회원 등급 : { member.memberType }
                </Typography>
                <Typography sx={{ mt: 1, mb: 1,
                        fontFamily: 'monospace',
                        fontWeight: 700 }} variant="h5" align='left' color='#004392' >
                    회원 가입일자 : { member.memberRegistTime=moment().format('YYYY-MM-DD') }
                </Typography>
                <Typography sx={{ mt: 1, mb: 1,
                        fontFamily: 'monospace',
                        fontWeight: 700 }} variant="h5" align='left' color='#004392' >
                    회원 탈퇴여부 : { member.memberDeleteYn }
                </Typography>
            </Box>
            <Box sx={{
                    display: 'flex',
                    justifyContent: 'center'
                }}>
            </Box>
          </Box>
          <Box component="Button" onClick={() => navigate(-1)}>뒤로 가기</Box>
        </>
    );
}

export default MemberDetailPage;