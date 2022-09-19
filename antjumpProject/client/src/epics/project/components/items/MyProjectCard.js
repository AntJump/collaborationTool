import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';


function MyProjectCard({project}) {
    console.log('projectCard props : ', project);
    return (
        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
            <TableCell component="th" scope="row" align='center'> {project.key} </TableCell>
            <TableCell align="left">{project.name}</TableCell>
            <TableCell align="center">{project.produceTime}</TableCell>
            <TableCell align="center">{project.endDate}</TableCell>
            <TableCell align="center">{project.constructor}</TableCell>
        </TableRow>
    );
}

export default MyProjectCard;