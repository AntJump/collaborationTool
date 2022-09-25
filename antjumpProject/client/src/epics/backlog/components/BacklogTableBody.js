import { TableBody, Box } from "@mui/material";
import BacklogTableRow from "./BacklogTableRow";

function BacklogTableBody({issues}){
    return  issues && (
        <TableBody sx={{ boarder: 1, borderRadius: 10}}>
            {(issues.map(issue =>  <BacklogTableRow key={issue.id} issue = {issue}/>))}
        </TableBody>
    );
}

export default BacklogTableBody;