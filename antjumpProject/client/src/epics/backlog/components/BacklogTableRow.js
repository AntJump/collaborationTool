import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function BacklogTableRow({ issue }) {
  const { id } = useParams();

  return (
    <TableRow>
      <TableCell
        component={Link}
        align="center"
        to={`/project/${id}/issue/${issue.issueId}`}
        scope="row"
      >
        {issue.issueName}
      </TableCell>
      <TableCell align="center">{issue.issueCategory}</TableCell>
      <TableCell align="center">{issue.issueSummary}</TableCell>
      <TableCell align="center">{issue.issueStatus}</TableCell>
      <TableCell align="center">{issue.issuePriority}</TableCell>
    </TableRow>
  );
}

export default BacklogTableRow;
