import TextField from '@mui/material/TextField';

import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

import { callProjectDetailApi } from '../../../../apis/ProjectAPICalls';
import { useDispatch,useSelector} from 'react-redux';
import { useEffect } from 'react';

import { SET_PROJECT } from '../../../../modules/ProjectModule';

function ProjectModifyForm({projectId}){


    const project = useSelector(state=> state.projectReducer);
    console.log("project:", project); 
    const dispatch = useDispatch();
    useEffect(
        ()=>{
            dispatch(callProjectDetailApi({projectId: projectId}));
        },
        []
    );

    const onChangeHandler = (e) =>{
        dispatch({type: SET_PROJECT, payload:{key: e.target.name, value: e.target.value}}); 
    };

    return project && (
        <>
            <input name="id" value={project.projectId} type="hidden" readOnly disabled></input>
            <Typography  sx={{ mt: 1}}>
                {project.projectKey}
            </Typography>
            <Typography  sx={{ mt: 1, mb:5 , fontSize: 35 }}>
                {project.projectName}
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField 
                        name="projectSummary" 
                        variant="outlined" 
                        label="프로젝트 요약 *"
                        value={project.projectSummary}
                        fullWidth
                        rows={3}
                        onChange={onChangeHandler}
                    /><br/>
                </Grid>
                <Grid item xs={12}  mb={3}>
                    <TextField 
                        name="projectExplanation" 
                        variant="outlined" 
                        label="프로젝트 설명"
                        value={project.projectExplanation}
                        multiline
                        rows={9}
                        fullWidth
                        onChange={onChangeHandler}
                    /><br/>
                </Grid>
            </Grid>
        </>
    );
}

export default ProjectModifyForm;