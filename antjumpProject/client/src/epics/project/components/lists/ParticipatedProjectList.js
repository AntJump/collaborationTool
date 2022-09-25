import Box from '@mui/material/Box';

import { useSelector} from "react-redux";


import ParticipatedProjectCard from '../items/ParticipatedProjectCard';

function ParticipatedProjectList(){
    const result = useSelector(state => state.projectReducer);
    const projects = result.participatedProjects;

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