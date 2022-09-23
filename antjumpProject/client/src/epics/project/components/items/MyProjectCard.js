import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Link } from "react-router-dom";
import ProjectMenuButton from "./ProjectMenuButton";

function MyProjectCard({ project }) {
  console.log("projectCard props : ", project);
  return (
    <>
      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        <TableCell component="th" scope="row" align="center">
          {project.key}
        </TableCell>
        <TableCell component={Link} to={`/project/${project.id}`} align="left">
          {project.name}
        </TableCell>
        <TableCell align="center">{project.produceTime}</TableCell>
        <TableCell align="center">{project.endDate}</TableCell>
        <TableCell align="center">{project.constructor}</TableCell>
        <TableCell align="right">
          <ProjectMenuButton project={project} />
        </TableCell>
      </TableRow>
    </>
  );
}

export default MyProjectCard;
