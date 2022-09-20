import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
function ProjectInputForm(){

    const onSubmitHandler = (e) =>{

    }

    return (

        <form onSubmit={onSubmitHandler}>
            
            <Typography  sx={{ mt: 2 }}>
                프로젝트 이름 *
            </Typography>
            
            <TextField name="name" variant="outlined" />
            <Typography>
                프로젝트 요약 *
            </Typography>
            <TextField name="summary" variant="outlined" />
            <Typography>
                프로젝트 설명 *
            </Typography>
            <TextField name="explanation" variant="outlined" />
            <br/><Button type="submit" color='button' variant="contained">
                생성
            </Button>
        </form>

    );
}

export default ProjectInputForm;