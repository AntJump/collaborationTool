import { TableContainer, Table, Paper, Box } from "@mui/material";

import SubIssueTableHeader from "./SubIssueTableHeader";
import SubIssueTableBody from "./SubIssueTableBody";

function SubIssueTable({ isHeader, issues, idx }) {
  return (
    issues && (
      <>
        {Array.isArray(issues) && issues.length === 0 ? (
          <Box sx={{ color: "gray" }}>빈 이슈</Box>
        ) : (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 600 }}>
              {isHeader ? <SubIssueTableHeader /> : undefined}
              <SubIssueTableBody issues={issues} />
            </Table>
          </TableContainer>
        )}
      </>
    )
  );
}

export default SubIssueTable;
