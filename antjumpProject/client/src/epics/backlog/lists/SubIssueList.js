import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { StyledTableCell } from "./IssueTableStyle.js";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_ISSUES } from "../../../modules/IssueModule.js";
import { issuesList } from "../resource/datas/IssueListData";
import SubIssueCard from "../items/SubIssueCard.js";

export default function SubIssueList() {
  const issues = useSelector((state) => state.issueReducer);
  console.log("8uohkjbkjb : ", issues);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: GET_ISSUES, payload: issuesList });
  }, []);

  return (
    issues && (
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 600 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">KEY</StyledTableCell>
              <StyledTableCell align="center">요약</StyledTableCell>
              <StyledTableCell align="center">상태</StyledTableCell>
              <StyledTableCell align="center">담당자</StyledTableCell>
              <StyledTableCell align="center">우선순위</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {issues.map((issue) => (
              <SubIssueCard key={issue.id} issue={issue} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
  );
}
