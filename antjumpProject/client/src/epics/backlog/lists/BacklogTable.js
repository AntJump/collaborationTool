import { TableContainer, Table, TableHead, TableRow, TableBody, Paper } from "@mui/material";
import { StyledTableCell } from "../../../common/styles/TableStyle";

import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";
import { GET_ISSUES } from "../../../modules/IssueModule";
import {issuesData} from "../datas/backlog"
import BacklogTableRow from "../components/BacklogTableRow";

function BacklogTable() {

    const issues = useSelector(state => state.issueReducer);
    const dispatch =useDispatch();

    useEffect(
        ()=>{
            dispatch({type: GET_ISSUES, payload: issuesData});
        },
        []
    )


    return(
        <>
         <TableContainer component={Paper}> 
            <Table sx={{ minWidth: 600}}>
                <TableHead>
                    <TableRow >
                        <StyledTableCell align="center">KEY</StyledTableCell>
                        <StyledTableCell align="center">유형</StyledTableCell>
                        <StyledTableCell align="center">요약</StyledTableCell>
                        <StyledTableCell align="center">상태</StyledTableCell>
                        <StyledTableCell align="center">우선순위</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody sx={{ boarder: 1, borderRadius: 10}}>
                    {issues.map(issue =>  <BacklogTableRow key={issue.id} issue = {issue}/>)}
                </TableBody>
            </Table>
        </TableContainer>
        </>
    );
}

export default BacklogTable;