import { TableContainer, Table, Paper, Box } from "@mui/material";

import BacklogTableHeader from "./BacklogTableHeader";
import BacklogTableBody from "./BacklogTableBody";

function BacklogTable({isHeader, issues}) {
    console.log(issues);
    return( 
        issues && (
            <>
                { Array.isArray(issues) && issues.length === 0 ?
                    <Box sx={{color:'gray'}}>빈 스프린트</Box>
                    : 
                    <TableContainer component={Paper}> 
                        <Table sx={{ minWidth: 600}}>
                            {isHeader ? <BacklogTableHeader/> : undefined}
                            <BacklogTableBody issues={issues}/> 
                        </Table>
                    </TableContainer>
                    
                }
            </> 
        )   
        
    );
}

export default BacklogTable;