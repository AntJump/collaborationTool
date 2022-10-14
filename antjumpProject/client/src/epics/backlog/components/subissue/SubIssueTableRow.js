import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function SubIssueTableRow({ issue }) {
  const { id, issueId } = useParams();

  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th" scope="row" align="center">
        {issue.issueName}
      </TableCell>
      <TableCell
        component={Link}
        to={`/project/${id}/issue/${issueId}/subissue/${issue.issueId}`}
        align="left"
      >
        {issue.issueSummary}
      </TableCell>
      <TableCell align="center">{issue.issueStatus}</TableCell>
      <TableCell align="center">{issue.issueStatus}</TableCell>
      <TableCell align="center">{issue.issuePriority}</TableCell>
    </TableRow>
  );
}

export default SubIssueTableRow;
