import { Box, Chip, Divider } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


import { useDispatch } from 'react-redux';

function AllProjectCard({project}){

    const dispatch = useDispatch();


    return (
        <Card variant="outlined" sx={{borderRadius: '10px', width: '300px', height: '210px'}}>                        
            <CardContent >
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {project.projectKey}
                </Typography>
                <Box sx={{ textAlign:'center'}}>
                    <Box mb={2}>
                        <h2 style={{margin: 0}}>{project.projectName}</h2>
                        <Chip label={`${project.projectProduceDate}`}/> 
                    </Box>

                    <Divider variant="middle" />
                    <h4 style={{marginTop:'10px'}}>
                        PM: {project.fkMembersMemberDto.username}
                    </h4>
                </Box>
                <Box>
                    <Typography sx={{  fontSize: 14, float: 'right' }} color="text.secondary" >
                        내 역할: {project.userProjectRoleDto.projectRoleName}
                    </Typography>
                </Box>
                
            </CardContent>
        </Card>
    );
}

export default AllProjectCard;