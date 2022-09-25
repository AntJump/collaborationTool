
import { TableHead, TableRow } from "@mui/material";
import { StyledTableCell } from "../../../common/styles/TableStyle";

function BacklogTableHeader(){
    return (
        <TableHead>
            <TableRow >
                <StyledTableCell align="center">KEY</StyledTableCell>
                <StyledTableCell align="center">유형</StyledTableCell>
                <StyledTableCell align="center">요약</StyledTableCell>
                <StyledTableCell align="center">상태</StyledTableCell>
                <StyledTableCell align="center">우선순위</StyledTableCell>
            </TableRow>
        </TableHead>
    );
}

export default BacklogTableHeader;