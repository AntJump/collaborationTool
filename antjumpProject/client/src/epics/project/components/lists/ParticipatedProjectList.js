import Box from "@mui/material/Box";

import { useSelector} from "react-redux";
import { Button, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import ParticipatedProjectCard from '../items/ParticipatedProjectCard';
import { useState } from 'react';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

function ParticipatedProjectList(){

    const result = useSelector(state => state.projectReducer);
    const projects = result.participatedProjects;


    const cardLimitCount = 4;
    const [offset, setOffset] = useState(0);
    const [position, setPosition] = useState(1);

    const onClickPagenation = (e) => {
        console.log(Number(e.target.ariaLabel));
        const changedPosition = position+(Number(e.target.ariaLabel)-1);
        console.log('changed postion : ', changedPosition);
        if(changedPosition <= Math.ceil(projects.length/cardLimitCount) && changedPosition >0){
            setOffset((changedPosition-1)*cardLimitCount);
            setPosition(changedPosition);
        }
    }
    console.log('position :', position);

    

    return projects && (
        <div>
            <IconButton onClick ={onClickPagenation} aria-label='0'>
                <ArrowBackIosNewIcon aria-label='0'/>
            </IconButton>
            
            {projects.slice(offset,offset+cardLimitCount).map(project => 
              
                <Button   key ={project.id} 
                    component={Link} to={`/project/${project.id}`} 
                    color="blackline" sx={{minWidth:  275, maxWidth: 300}}
                    
                >
                    <ParticipatedProjectCard project = {project}/>
                </Button>                       

            )}
            <IconButton  onClick ={onClickPagenation} aria-label='2'>
                <ArrowForwardIosIcon aria-label='2' />
            </IconButton>
           
        </div>
        
    );
<<<<<<< HEAD
=======

>>>>>>> d53b8da88fbffd75c581abd27439fc3dec55a6b5
}

export default ParticipatedProjectList;
