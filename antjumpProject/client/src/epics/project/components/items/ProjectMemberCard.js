import FaceIcon from '@mui/icons-material/Face';
import { Box, Typography, Stack } from '@mui/material';

function ProjectMemberCard({member}){

    return (
        <>
            <Box sx={{border:2, borderRadius:'10px', borderBlockColor:'#E8E8E8', width: '230px'}}>
               
                <FaceIcon/>{member.userName}
                <Typography sx={{display: 'inline-block'}}color = "grey" variant="contained">
                    {member.userEmail}
                </Typography>
            </Box>
        </>
    );
}

export default ProjectMemberCard;