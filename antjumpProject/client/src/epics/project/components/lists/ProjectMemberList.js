import { Stack} from '@mui/material';
import Box from '@mui/material/Box';
// import {  useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
import { projectMembers } from '../../resource/datas/MemberList';
import ProjectMemberCard from '../items/ProjectMemberCard';
import RoleChangeButton from '../items/RoleChangeButton';


function ProjectMemberList(){
    const members = projectMembers;

    // const dispatch = useDispatch();
    // useEffect(
    //     ()=>{
    //         dispatch();
    //     },
    //     []
    // );


    return members && (
        <Box sx={{overflow:"scroll"}} maxHeight={'85%'}>
            {members.map(member => 
                <Box key ={member.memberId} sx={{ minWidth:  275, maxWidth: 300}}>
                     <Stack direction='row' spacing={1}>
                        <ProjectMemberCard member = {member}/>
                        <RoleChangeButton member = {member}/>
                    </Stack>
                    
                </Box>
            )}
        </Box>
        
    );
}

export default ProjectMemberList;