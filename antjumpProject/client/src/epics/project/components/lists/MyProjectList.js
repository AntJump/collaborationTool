import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { StyledTableCell } from '../../../../common/styles/TableStyle.js';

import {useSelector} from "react-redux";

import MyProjectCard from '../items/MyProjectCard.js';

function MyProjectList(){
    const result = useSelector(state => state.projectReducer);
    const projects = result.myProjects;

    return projects && (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 600 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell align="center">KEY</StyledTableCell>
                        <StyledTableCell align="center">프로젝트 이름</StyledTableCell>
                        <StyledTableCell align="center">시작 날짜</StyledTableCell>
                        <StyledTableCell align="center">종료 날짜</StyledTableCell>
                        <StyledTableCell align="center">PM</StyledTableCell>
                        <StyledTableCell align="center"></StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {projects.map(project =>  <MyProjectCard key={project.id} project={project} />)}
                </TableBody>
            </Table>
        </TableContainer>
    );
}


export default MyProjectList;