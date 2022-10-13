import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import { Link } from 'react-router-dom';
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { TableHead } from '@mui/material';
import { callMemberListAPI } from '../../apis/MemberAPICalls';
import moment from 'moment';


function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

function MemberList({isSw}) {

  const member = useSelector(state => state.memberReducer);
  const members = member.list
  console.log("members: ", members);

  const dispatch = useDispatch();

  const [psw, setPsw] = React.useState(isSw);

  useEffect(() => {
    setPsw(isSw);
  }, [isSw]);

  useEffect(
      ()=>{
          dispatch(callMemberListAPI());
      },
      [dispatch]
  );

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - members.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return members && (
      <TableContainer sx={{
        width: '80%',
        margin: 'auto'
      }} component={Paper}>
        <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
          <TableHead>
              <TableCell component="th" scope="row">
                회원 이름
              </TableCell>
              <TableCell component="th" scope="row">
                회원 등급
              </TableCell>
              <TableCell component="th" scope="row">
                가입일자
              </TableCell>
              <TableCell component="th" scope="row">
                탈퇴여부
              </TableCell>
          </TableHead>
          <TableBody>
            { psw && (rowsPerPage > 0
              ? members.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : members
            ).map((member) => (
              <TableRow key={member.memberId} component ={Link} to={String(member.memberId)}>
                <TableCell component="th" scope="row">
                  {member.memberName}
                </TableCell>
                <TableCell style={{ width: 240 }} align="right">
                  {member.memberType}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {member.memberRegistTime=moment().format('YYYY-MM-DD')}
                </TableCell>
                <TableCell style={{ width: 160 }} align="right">
                  {member.memberDeleteYn}
                </TableCell>
              </TableRow>
            ))}

            { !psw && (rowsPerPage > 0
              ? members
              .filter((member)=> member.memberDeleteYn === 'Y')
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : members.filter((member)=> member.memberDeleteYn === 'Y')
            ).map((member) => (
                <TableRow key={member.memberId} component ={Link} to={String(member.memberId)}>
                  <TableCell component="th" scope="row">
                    {member.memberName}
                  </TableCell>
                  <TableCell style={{ width: 240 }} align="right">
                    {member.memberType}
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="right">
                    {member.memberRegistTime=moment().format('YYYY-MM-DD')}
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="right">
                    {member.memberDeleteYn}
                  </TableCell>
                </TableRow>
              ))}

            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                colSpan={3}
                count={members.length}
                rowsPerPage={rowsPerPage}
                page={page}
                SelectProps={{
                  inputProps: {
                    'aria-label': 'rows per page',
                  },
                  native: true,
                }}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                ActionsComponent={TablePaginationActions}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
  );
}

export default MemberList;