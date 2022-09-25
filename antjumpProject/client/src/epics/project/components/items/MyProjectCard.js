
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import ProjectMenuButton from './ProjectMenuButton';

import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { SET_SELECTED_PROJECT } from '../../../../modules/ProjectModule';

function MyProjectCard({project}) {
    
    const dispatch = useDispatch();
    const onClickProject = () => {
        console.log(project);
        dispatch({type: SET_SELECTED_PROJECT, payload: project})
    }

    return (
        <>
            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0  } }}>
                <TableCell component="th" scope="row" align='center'> {project.key} </TableCell>
                <TableCell component={Link} to={`/project/${project.id}`} onClick={onClickProject} align="left" >{project.name}</TableCell>
                <TableCell align="center" >{project.produceTime}</TableCell>
                <TableCell align="center" >{project.endDate}</TableCell>
                <TableCell align="center">{project.constructor}</TableCell>
                <TableCell align="right"><ProjectMenuButton project={project}/></TableCell>
            </TableRow>
        
        </>


    );
}

export default MyProjectCard;
