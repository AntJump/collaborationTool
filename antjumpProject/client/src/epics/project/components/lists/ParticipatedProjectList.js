import Box from '@mui/material/Box';
import {  useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import {GET_PARTICIPATED_PROJECTS} from "../../../../modules/ProjectModule";
import {participatedProjects} from "../../resource/datas/ProjectList"

import ParticipatedProjectCard from '../items/ParticipatedProjectCard';

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
                    <ParticipatedProjectCard project = {project}/>
                </Box>
            )}
        </div>
        
    );
}

export default ParticipatedProjectList;