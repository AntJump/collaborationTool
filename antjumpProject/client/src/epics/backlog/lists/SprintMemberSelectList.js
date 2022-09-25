import {  Box } from "@mui/material";
import SprintMemberSelectCard from "../components/SprintMemberSelectCard";


function SprintMemberSelectList({includedIssues}){
    console.log(includedIssues);
    return includedIssues && (
        <Box sx={{overflowY: 'scroll'}} p={2}>
            {includedIssues
                .filter(issue => issue.topIssueId=== null)
                .map((topIssue)=>
                    <Box>
                        <SprintMemberSelectCard issue={topIssue} required={true}/>
                        {includedIssues
                            .filter(issue => issue.topIssueId ==  topIssue.issueId)
                                .map((subIssue)=><SprintMemberSelectCard issue={subIssue} required={false}/>)
                        }<br/>
                    </Box>
            )}
        </Box>
    );
}

export default SprintMemberSelectList;