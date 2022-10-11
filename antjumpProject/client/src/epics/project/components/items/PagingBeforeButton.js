import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { IconButton } from "@mui/material";

function PagingBeforeButton({onClickHandler,currentPage}){
    return(
        <IconButton
            onClick={() => onClickHandler(currentPage-1)}
            disabled={currentPage === 1}
        >
            <ArrowBackIosNewIcon/>
        </IconButton>
    );
}


export default PagingBeforeButton;