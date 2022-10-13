import {Box, Stack} from '@mui/material';
import {  useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import WaitMemberCard from '../items/WaitMemberCard';

import { callProjectInvitationListApi } from '../../../../apis/ProjectAPICalls';

function ProjectWaitMemberList({projectId}){
    const {invitations} = useSelector((state)=>state.projectInvitationReducer);
        console.log("invitations:", invitations);
    const projectState= useSelector((state)=>state.projectReducer); 


    const dispatch = useDispatch();
    useEffect(
        ()=>{
            dispatch(callProjectInvitationListApi({projectId: projectId}));
        },
        [projectState]
    );
;


    return Array.isArray(invitations) && (
        <Box sx={{overflowY:"scroll"}}  maxHeight={'90%'} maxWidth={'100%'} >
            {invitations.map(invitation => 
                <Box key ={invitation.invitationId} sx={{ minWidth:  210, maxWidth: 300 , margin: 'auto'}}>
                    <Stack direction='row' spacing={1}>
                        <WaitMemberCard invitation = {invitation}/>
                    </Stack>
                </Box>
            )}
        </Box>
        
    );
}

export default ProjectWaitMemberList;