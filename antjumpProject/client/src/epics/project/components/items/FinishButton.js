import { Grid, Button } from "@mui/material";

function FinishButton({text, onClickHandler}){
    return (
        <Grid item xs={12}>
            <Button 
                // type="submit" 
                color='button' 
                variant="contained" 
                onClick={onClickHandler}
                sx={{float: 'right'}}
                mt={5}
            >
                {text}
            </Button>
        </Grid>
    );
}

export default FinishButton;