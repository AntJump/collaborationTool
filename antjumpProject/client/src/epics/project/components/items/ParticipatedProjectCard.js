import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


import { Link } from 'react-router-dom';

function ParticipatedProjectCard({project}){
    return (
        <Card variant="outlined" >                        
            <Button color="blackline" component={Link} to={`/project/${project.id}`}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {project.key}
                    </Typography>
                    <Typography variant="h5" component="div">
                        {project.name}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        {project.produceTime} ~ {project.endDate}
                    </Typography>
                    <Typography variant="body2">
                        PM: {project.constructor}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        내 역할: {project.role}
                    </Typography>
                </CardContent>
            </Button>
        </Card>
    );
}

export default ParticipatedProjectCard;