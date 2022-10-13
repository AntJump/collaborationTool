import { Stack} from '@mui/material';
import Box from '@mui/material/Box';

import ProjectMemberCard from '../items/ProjectMemberCard';
import RoleChangeButton from '../items/RoleChangeButton';

import { useDispatch,useSelector } from 'react-redux';
import { useEffect } from 'react';
import { callProjectMemberListApi } from '../../../../apis/ProjectAPICalls';

function ProjectMemberList({isRoleChange, projectId}){
    const members = useSelector((state)=>state.projectMemberReducer);
        console.log("members:", members);
    const projectState= useSelector((state)=>state.projectReducer); 


    const dispatch = useDispatch();
    useEffect(
        ()=>{
            dispatch(callProjectMemberListApi({projectId: projectId}));
        },
        [projectState]
    );


    return Array.isArray(members) && (
        <Box sx={{overflowY:"scroll", float: 'right' }} maxHeight={'90%'} maxWidth={'100%'}>
            {members.map(member =>
                <Box key ={member.projectMemberId} sx={{ minWidth:  200, maxWidth: 300,  margin: 'auto', p:1}} >
                    <Stack direction='row' spacing={1}>
                        <ProjectMemberCard member = {member.fkMembersMemberDto}/>
                        {isRoleChange && <RoleChangeButton roleInfo = {member.fkRolesRoleDto} projectMemberId = {member.projectMemberId} />}
                    </Stack>
                </Box>
            )}
        </Box>
        
    );
}

export default ProjectMemberList;