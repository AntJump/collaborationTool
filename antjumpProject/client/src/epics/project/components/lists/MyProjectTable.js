import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { StyledTableCell } from '../../../../common/styles/TableStyle.js';
import { Stack } from '@mui/material';

import MyProjectTableRow from '../items/MyProjectTableRow.js';
import PagingButtons from '../items/PagingButtons.js';

import {  useEffect,useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { callMyProjectListApi } from "../../../../apis/ProjectAPICalls";

function MyProjectTable(){
    const result = useSelector(state => state.projectListReducer);
    const projects = result.myProjects.data;
    const pagingInfo = result.myProjects.pagingInfo;
        console.log("my projects :", projects);
        console.log("my projects paging:", pagingInfo);

    const dispatch = useDispatch();

    // 초기 랜더링
    useEffect(
        ()=>{
            dispatch(callMyProjectListApi({currentPage: 1, status: 'activate'}));
        },
        []
    );


    const [currentPage, setCurrentPage] = useState(1);
    const onClickButton = (param)=>{
        setCurrentPage(param);
    }

    // 현재 페이지가 바뀔 때마다 api호출해서 랜더링
    useEffect(
        ()=>{
            dispatch(callMyProjectListApi({currentPage: currentPage, status: 'activate'}));
        },
        [currentPage]
    );



    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 600 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">KEY</StyledTableCell>
                            <StyledTableCell align="center">프로젝트 이름</StyledTableCell>
                            <StyledTableCell align="center">프로젝트 요약</StyledTableCell>
                            <StyledTableCell align="center">생성 날짜</StyledTableCell>
                            <StyledTableCell align="center">PM</StyledTableCell>
                            <StyledTableCell align="center" sx={{width: '30px'}}></StyledTableCell>
                        </TableRow>
                    </TableHead>
                    {Array.isArray(projects) && 
                        <TableBody>
                            {projects.map(project =>  <MyProjectTableRow key={project.projectId} project={project} />)}
                        </TableBody>
                    }
                </Table>
            </TableContainer>
            {Array.isArray(projects) && 
                <Stack direction="row" m={2} justifyContent='center'>
                    <PagingButtons onClickHandler={onClickButton} currentPage ={currentPage} pagingInfo={pagingInfo}/>
                </Stack>
            }
            
            
        </>

        
    );
}


export default MyProjectTable;