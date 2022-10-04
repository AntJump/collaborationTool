import FaceIcon from '@mui/icons-material/Face';
import { Paper,  Chip } from '@mui/material';

function ProjectMemberCard({member}){
    

    return (
        < >
            <Paper sx={{ borderRadius:'10px',borderBlockColor:'#E8E8E8',float:'center', width: '200px'}}>
                <FaceIcon/>{member.userName}<Chip label={member.userEmail}/>
            </Paper>
        </>
    );
}

export default ProjectMemberCard;