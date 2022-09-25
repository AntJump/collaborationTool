import { Typography, Grid, Chip } from "@mui/material";
import SprintMemberSelect from "./SprintMemberSelect";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
function SprintMemberSelectCard({issue ,required}){
    
    console.log(required);

    return(
        <Grid container spacing ={2}>
            <Grid item xs={6}>
                {required ? undefined :  <ChevronRightIcon/>}
                {issue.issueKey} <Chip  label={issue.issueSummary}></Chip>
            </Grid>
            <Grid item xs={6}>
                <SprintMemberSelect required= {required}/>
            </Grid>

        </Grid>
    );
}

export default SprintMemberSelectCard;