import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Link } from "react-router-dom";

export default function SubIssueCard({ issue }) {
  console.log("SubIssueCard props : ", issue);
  return (
    <>
      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        <TableCell component="th" scope="row" align="center">
          {issue.key}
        </TableCell>
        <TableCell component={Link} to={`./subissue/${issue.id}`} align="left">
          {issue.summary}
        </TableCell>
        <TableCell align="center">{issue.status}</TableCell>
        <TableCell align="center">{issue.manager}</TableCell>
        <TableCell align="center">{issue.priority}</TableCell>
      </TableRow>
    </>
  );
}
