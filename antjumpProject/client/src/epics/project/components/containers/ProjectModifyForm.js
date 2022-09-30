import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import FinishButton from '../items/FinishButton';

function ProjectModifyForm({project}){

    const onSubmitHandler = (e) =>{

    }

    const onClickHandler = ()=>{
        alert('프로젝트 수정 완료!');
    }

    return (

        <form onSubmit={onSubmitHandler}>
            <input name="id" value={project.id} type="hidden" readOnly disabled></input>
            <Typography  sx={{ mt: 1}}>
                {project.key}
            </Typography>
            <Typography  sx={{ mt: 1, mb:5 , fontSize: 35 }}>
                {project.name}
            </Typography>
            <Grid container spacing={2}>
            <Grid item xs={12}>
                <TextField 
                        name="summary" 
                        variant="outlined" 
                        label="프로젝트 요약 *"
                        defaultValue={project.summary}
                        fullWidth
                        rows={3}
                    /><br/>
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        name="explanation" 
                        variant="outlined" 
                        label="프로젝트 설명"
                        
                        defaultValue={project.explanation}
                        multiline
                        rows={9}
                        fullWidth
                    /><br/>
                </Grid>
                <FinishButton text={"완료"} onClickHandler={onClickHandler}/>
            </Grid>
        </form>

    );
}

export default ProjectModifyForm;