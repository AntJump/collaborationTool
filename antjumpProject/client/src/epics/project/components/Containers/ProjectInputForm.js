import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import { Grid, ListItem } from '@mui/material';
import FinishButton from '../items/FinishButton';


function ProjectInputForm(){

    const onSubmitHandler = (e) =>{
       
    }

    const onClickHandler = ()=>{
        alert('프로젝트 생성 완료!');
    }

    return (

        <form onSubmit={onSubmitHandler}>
            <Box sx={{width:'90%', margin:'auto'}}>
                <Grid container rowSpacing={4}>
                    <Grid item xs={12}>
                        <TextField 
                            name="name" 
                            variant="outlined" 
                            label="프로젝트 이름 *"
                            fullWidth
                        /><br/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                            name="summary" 
                            variant="outlined" 
                            label="프로젝트 요약 *"
                            fullWidth
                            rows={3}
                        /><br/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField 
                            name="explanation" 
                            variant="outlined" 
                            label="프로젝트 설명"
                            multiline
                            rows={9}
                            fullWidth
                        /><br/>
                    </Grid>
                    <FinishButton text={"생성"} onClickHandler={onClickHandler}/>
                </Grid>
            </Box>
            
        </form>

    );
}

export default ProjectInputForm;