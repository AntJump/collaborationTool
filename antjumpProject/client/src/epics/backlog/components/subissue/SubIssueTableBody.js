import { TableBody, Box } from "@mui/material";
import SubIssueTableRow from "./SubIssueTableRow";

function SubIssueTableBody({ issues }) {
  return (
    issues && (
      <TableBody sx={{ boarder: 1, borderRadius: 10 }}>
        {issues.map((issue) => (
          <SubIssueTableRow key={issue.issueId} issue={issue} />
        ))}
      </TableBody>
    )
  );
}

export default SubIssueTableBody;
