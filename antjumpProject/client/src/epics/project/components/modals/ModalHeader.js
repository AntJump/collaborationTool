import { Button, Typography,Divider } from "@mui/material";



function ModalHeader({title, onClickHandler}){


    return (
        <>
            <Button onClick={onClickHandler}  sx={{float: 'right'}} >
                X
            </Button>
            <Typography variant="h6" component="h2">
                {title}
            </Typography>
            <Divider sx={{ my: 3 }} />
        </>            
    );
}

export default ModalHeader;