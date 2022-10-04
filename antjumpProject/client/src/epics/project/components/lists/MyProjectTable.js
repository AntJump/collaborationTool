import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { StyledTableCell } from '../../../../common/styles/TableStyle.js';
import { Pagination, Stack } from '@mui/material';
import {useSelector} from "react-redux";

import MyProjectTableRow from '../items/MyProjectTableRow.js';
import { useState } from 'react';



function MyProjectTable(){
    const result = useSelector(state => state.projectReducer);
    const projects = result.myProjects;

    const rowLimitCount = 5;
    const [offset, setOffset] = useState(0);
    const onClickPagenation = (e) => {
        const pageInfo = e.target.ariaLabel;
        const selectedNum = Number(pageInfo[pageInfo.length-1]);
        setOffset((selectedNum-1)*rowLimitCount);

        console.log('selectedNum :' + selectedNum + ' offset : ' + offset);
    }

    return projects && (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 600 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">KEY</StyledTableCell>
                            <StyledTableCell align="center">프로젝트 이름</StyledTableCell>
                            <StyledTableCell align="center">시작 날짜</StyledTableCell>
                            <StyledTableCell align="center">종료 날짜</StyledTableCell>
                            <StyledTableCell align="center">PM</StyledTableCell>
                            <StyledTableCell align="center" sx={{width: '30px'}}></StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {projects.slice(offset,offset+rowLimitCount).map(project =>  <MyProjectTableRow key={project.id} project={project} />)}
                    </TableBody>
                </Table>
            </TableContainer>
            <Stack m={2} justifyContent='center'>
                <Pagination onClick={onClickPagenation} count={Math.ceil(projects.length/rowLimitCount)} size="large" sx={{margin: 'auto'}} />
            </Stack>
            
        </>

        
    );
}


export default MyProjectTable;