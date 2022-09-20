import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function ProjectModifyForm({project}){

    const onSubmitHandler = (e) =>{

    }

    return (

        <form onSubmit={onSubmitHandler}>
            <Typography  sx={{ mt: 1}}>
                {project.key}
            </Typography>
            <Typography  sx={{ mt: 1, mb:5 , fontSize: 35 }}>
                {project.name}
            </Typography>
            <Typography>
                프로젝트 요약 *
            </Typography>
            <TextField name="summary" variant="outlined" defaultValue={project.summary}/>
            <Typography>
                프로젝트 설명 *
            </Typography> 
            <TextField name="explanation" variant="outlined" defaultValue={project.explanation}/>
            <br/><Button type="submit" color='button' variant="contained">
                완료
            </Button>
        </form>

    );
}

export default ProjectModifyForm;