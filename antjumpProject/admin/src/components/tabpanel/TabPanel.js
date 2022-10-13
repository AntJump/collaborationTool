import * as React from "react";
import styled from "@emotion/styled";
import { Divider, Tabs, Tab} from "@mui/material";
import LogoButton from "../items/LogoButton";
import Box from '@mui/material/Box';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';


const StyledTabs = styled(Tabs)(({ theme }) => ({
    height: "97vh",
    backgroundColor: '#000',
    color: "white",
    borderRadius: "20px",
    width: "240px",
    marginTop: "15px",
    marginBottom: "10px"
}));


const StyledTab = styled(Tab)(({ theme }) => ({
  marginBottom: "30px",
  color: "white"
}));

export default function TabPanel() {


  const {id} = useParams();

  return (
    <>

      <StyledTabs

        aria-label="icon label tabs example"
        orientation="vertical"
      >
        <LogoButton/>
        <Divider sx={{ backgroundColor:"white", marginBottom: "30px"}}/>
        <Box component={Link} to="/qnas"><StyledTab label="문의 목록"/></Box>
        <Box component={Link} to="/members"><StyledTab label="회원 목록"/></Box>
        <Box component={Link} to="/payments"><StyledTab label="결제 내역"/></Box>
        <Box component={Link} to="/intros"><StyledTab label="소개 목록"/></Box>        
        <Box component={Link} to="/faqs"><StyledTab label="FAQ 목록"/></Box>
      </StyledTabs>
    </>
  );
}
