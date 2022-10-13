import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import ProjectMenuButton from "./ProjectMenuButton";

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

function MyProjectTableRow({project}) {
  const dispatch = useDispatch();


  return (
    <>
      <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
        <TableCell component="th" scope="row" align="center">



          {project.projectKey}

        </TableCell>
        <TableCell
          component={Link}
          to={`/project/${project.projectId}`}
          align="center"
        >
          {project.projectName}
        </TableCell>
        <TableCell align="center">{project.projectSummary}</TableCell>
        <TableCell align="center">{project.projectProduceDate}</TableCell>
        <TableCell align="center">{project.fkMembersMemberDto.username} </TableCell>
        <TableCell align="right"> 
          <ProjectMenuButton project={project} />
        </TableCell>
      </TableRow>
    </>
  );
}

export default MyProjectTableRow;
