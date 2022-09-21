import Box from '@mui/material/Box';
// import {  useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
import { waitMembers } from '../../resource/datas/MemberList';
import WaitMemberCard from '../items/WaitMemberCard';

function ProjectWaitMemberList(){
    const waits = waitMembers;

    // const dispatch = useDispatch();
    // useEffect(
    //     ()=>{
    //         dispatch();
    //     },
    //     []
    // );


    return waits && (
        <Box sx={{overflow:"scroll"}}  maxHeight={'85%'}>
            {waits.map(wait => 
                <Box key ={wait.memberId} sx={{ minWidth:  275, maxWidth: 300}}>
                    <WaitMemberCard wait = {wait}/>
                </Box>
            )}
        </Box>
        
    );
}

export default ProjectWaitMemberList;