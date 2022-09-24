import {Box, Stack} from '@mui/material';
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
        <Box sx={{overflowY:"scroll"}}  maxHeight={'90%'} maxWidth={'100%'} >
            {waits.map(wait => 
                <Box key ={wait.memberId} sx={{ minWidth:  210, maxWidth: 300 , margin: 'auto'}}>
                    <Stack direction='row' spacing={1}>
                        <WaitMemberCard wait = {wait}/>
                    </Stack>
                </Box>
            )}
        </Box>
        
    );
}

export default ProjectWaitMemberList;