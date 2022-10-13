import TextField from '@mui/material/TextField';
import { Box } from '@mui/system';
import { Grid } from '@mui/material';


import { SET_PROJECT } from '../../../../modules/ProjectModule'


import { useDispatch } from 'react-redux';

function ProjectInputForm(){
    const dispatch = useDispatch();
    const onChangeHandler = (e) =>{
       dispatch({type: SET_PROJECT, payload:{key: e.target.name, value: e.target.value}}); 
    }


    return (
                <Grid container rowSpacing={4}>
                    <Grid item xs={12}>
                        <TextField 
                            name="projectKey" 
                            variant="outlined" 
                            label="프로젝트 키 *"
                            fullWidth
                            onChange={onChangeHandler}
                        /><br/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                            name="projectName" 
                            variant="outlined" 
                            label="프로젝트 이름 *"
                            fullWidth
                            onChange={onChangeHandler}
                        /><br/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                            name="projectSummary" 
                            variant="outlined" 
                            label="프로젝트 요약 *"
                            fullWidth
                            rows={3}
                            onChange={onChangeHandler}
                        /><br/>
                    </Grid>
                    <Grid item xs={12} mb={3}>
                        <TextField 
                            name="projectExplanation" 
                            variant="outlined" 
                            label="프로젝트 설명"
                            multiline
                            rows={8}
                            fullWidth
                            onChange={onChangeHandler}
                        /><br/>
                    </Grid>
                </Grid>
    );
}

export default ProjectInputForm;