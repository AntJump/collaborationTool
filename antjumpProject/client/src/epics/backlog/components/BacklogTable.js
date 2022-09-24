import { TableContainer, Table, Paper, Box } from "@mui/material";

import BacklogTableHeader from "./BacklogTableHeader";
import BacklogTableBody from "./BacklogTableBody";

function BacklogTable({isHeader, issues}) {
    return( 
        <>
            {issues ?
                <TableContainer component={Paper}> 
                    <Table sx={{ minWidth: 600}}>
                        {isHeader ? <BacklogTableHeader/> : undefined}
                        <BacklogTableBody issues={issues}/> 
                    </Table>
                </TableContainer>
                : <Box sx={{color:'gray'}}>빈 스프린트</Box>
            }
        </>     
        
    );
}

export default BacklogTable;