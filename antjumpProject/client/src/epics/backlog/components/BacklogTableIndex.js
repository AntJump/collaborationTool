import { Button,  Grid, Box, Stack } from "@mui/material";

import { useParams } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import { useEffect } from "react";

import BacklogTable from "./BacklogTable";
import { GET_BACKLOG } from "../../../modules/BacklogModule";
import { issuesData } from "../datas/backlog";
import BacklogTableBody from "./BacklogTableBody";

function BacklogTableIndex(){
    const { id } = useParams();
    const backlog = useSelector(state => state.backlogReducer);
    console.log(backlog);
    const dispatch =useDispatch();

    useEffect(
        ()=>{
            dispatch({type: GET_BACKLOG, payload: issuesData});
        },
        []
    )

    return(
        <>
            <Grid item xs={12}>
                <Box >
                    <Stack  direction='row' spacing={1} justifyContent="space-between" height='40px' mt={2} mb={2}>
                        <h3 >메인 스프린트</h3>
                        <Button color='button' variant="contained" size="small" > 
                            스프린트 시작
                        </Button>
                    </Stack>
                    <Box sx={{background:'#F2F2F2', borderRadius:'10px'}} p={3}>
                        <BacklogTable isHeader={false} issues={backlog[1]}/>
                    </Box>
                    
                </Box>
            </Grid>
            <Grid item xs={12}>
                <Box>
                    <h3 style={{ float: 'left'}}>임시 스프린트</h3>
                    {backlog.map((element, idx, arr)=>{
                        if(idx>1){
                            return(
                                <Box sx={{clear: 'both', background:'#F2F2F2', borderRadius:'10px'}} p={3} mt={1}>
                                    <BacklogTable isHeader={false} issues={element}/>
                                </Box>  
                            )
                        }
                    })}

                </Box>
            </Grid>
            <Grid item xs={12}  mb={3}>
                <Box>
                    <Stack  direction='row' spacing={1} justifyContent="space-between">
                        <h3>백로그</h3>
                        <Button href={`/project/${id}/issue-create`}> 
                            + 이슈 생성 
                        </Button>
                    </Stack>
                    <BacklogTable isHeader={true}  issues={backlog[0]}/>
                </Box>
            </Grid>
        </>
       
    );
}

export default BacklogTableIndex;