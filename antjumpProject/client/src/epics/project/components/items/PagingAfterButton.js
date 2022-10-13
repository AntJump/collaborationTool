import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { IconButton } from "@mui/material";


function PagingAfterButton({onClickHandler,currentPage, pagingInfo}){
    return(
        <IconButton
            onClick={() => onClickHandler(currentPage+1)}
            disabled={currentPage === pagingInfo.maxPage || pagingInfo.totalCount === 0}
        >
            <ArrowForwardIosIcon/>
        </IconButton>
    );
}


export default PagingAfterButton;