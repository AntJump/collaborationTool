import { styled } from '@mui/material/styles';
import  TableCell,{ tableCellClasses } from '@mui/material/TableCell';

// TableCell 재정의
export const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white
    }
}));