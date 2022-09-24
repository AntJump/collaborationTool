import { TableContainer, Table, Paper } from "@mui/material";

import BacklogTableHeader from "./BacklogTableHeader";
import BacklogTableBody from "./BacklogTableBody";

function BacklogTable({isHeader, issues}) {
    console.log('[BacklogTable] prams :', issues);
    return(
        <>
            <TableContainer component={Paper}> 
                <Table sx={{ minWidth: 600}}>
                    {isHeader ? <BacklogTableHeader/> : undefined}
                    <BacklogTableBody issues={issues}/>
                </Table>
            </TableContainer>
        </>
    );
}

export default BacklogTable;