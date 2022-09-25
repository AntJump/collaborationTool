import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import { Grid, Button } from '@mui/material';
import SprintPeriodSelect from './SprintPeriodSelect';
import SprintNoticeCycleSelect from './SprintNoticeCycleSelect';

import { useState } from "react";
import SprintDateSelect from './SprintDateSelect';


function SprintStartInfoForm(){

    const [period, setPeriod] = useState(1);


  
    const onSubmitHandler = (e) =>{
       
    }
    

    return (
        <>
            <form onSubmit={onSubmitHandler}>
                <Box sx={{width:'100%', margin:'auto'}}>
                    <Grid container rowSpacing={4}>
                        <Grid item xs={12}>
                            <TextField 
                                name="sprintName" 
                                variant="outlined" 
                                label="스프린트 이름 *"
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} justifyContent="space-between">
                            <Grid container direction='row' justifyContent='space-between' >
                                <Grid item  sx= {{width: '47%'}}>
                                    <SprintPeriodSelect period={period} setPeriod={setPeriod}/>
                                </Grid>
                                <Grid item  sx= {{width: '47%'}}>
                                    <SprintNoticeCycleSelect/>
                                </Grid>
                            </Grid>
                        
                        </Grid>
                        <Grid item xs={12}>
                            <Grid container direction='row' justifyContent='space-between' >
                               <SprintDateSelect period={period}/>
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField 
                                name="summary" 
                                variant="outlined" 
                                label="스프린트 목표"
                                fullWidth
                                fullWidthInput
                                multiline
                                rows={4}
                            /><br/>
                        </Grid>
                    </Grid>
                </Box> 
            </form>
        </>
    );
}

export default SprintStartInfoForm;