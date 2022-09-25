import { Button, Typography,Divider, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';



function ModalHeader({title, onClickHandler}){


    return (
        <>
            <IconButton onClick={onClickHandler}  sx={{float: 'right'}}>
                <CloseIcon  />
            </IconButton>
            <Typography variant="h6" component="h6">
                {title}
            </Typography>
            <Divider sx={{ my: 3 }} />
        </>            
    );
}

export default ModalHeader;