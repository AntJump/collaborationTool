import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


import {  useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {GET_PARTICIPATED_PROJECTS} from "../../../../modules/ProjectModule";
import {participatedProjects} from "../../resource/datas/ProjectList"
function ParticipatedProjectList(){
    const projects = useSelector(state => state.participatedProjectReducer);
    console.log("[ParticipatedProjectList] projects: ", projects);

    const dispatch = useDispatch();

    useEffect(
        ()=>{
            dispatch({type: GET_PARTICIPATED_PROJECTS, payload: participatedProjects});
        },
        []
    );


    return projects && (
        <div>
            {projects.map(project => 
                <Box key ={project.id} sx={{ minWidth:  275, maxWidth: 300, display: 'inline-block'}}>
                    <Card variant="outlined">
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
                        <CardActions>
                            <Button size="small">더보기</Button>
                        </CardActions>
                    </Card>
                </Box>
            )}
        </div>
        
    );
}

export default ParticipatedProjectList;