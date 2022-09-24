import FaceIcon from '@mui/icons-material/Face';
import { Paper, Typography, Stack, Chip } from '@mui/material';

function ProjectMemberCard({member}){

    return (
        < >
            <Paper sx={{ borderRadius:'10px',borderBlockColor:'#E8E8E8', width: '100%', float:'center'}}>
                <FaceIcon/>{member.userName}
                <Chip label={member.userEmail}/>
            </Paper>
        </>
    );
}

export default ProjectMemberCard;