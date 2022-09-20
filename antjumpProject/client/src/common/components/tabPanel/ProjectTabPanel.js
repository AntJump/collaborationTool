import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ImageAspectRatio from "@mui/icons-material/ImageAspectRatio";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import WorkIcon from "@mui/icons-material/Work";
import TodayIcon from "@mui/icons-material/Today";
import ChatIcon from "@mui/icons-material/Chat";
import styled from "@emotion/styled";
import { Divider, Grid } from "@mui/material";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";

const StyledTabs = styled(Tabs)(({ theme }) => ({
    height: "97vh",
    backgroundColor: '#222224',
    color: theme.palette.common.white,
    borderRadius: "10px",
    width: "240px",
    marginTop: "10px",
    marginBottom: "10px"
    // marginLeft: "15px"
}));


const StyledTab = styled(Tab)(({ theme }) => ({
  color: theme.palette.common.white,
  marginBottom: "30px"
}));

export default function ProjectTabPanel() {


  const {id} = useParams();

  return (
    <>

      <StyledTabs

        aria-label="icon label tabs example"
        orientation="vertical"
      >
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          ANT
        </Typography>
        <Divider sx={{ backgroundColor:"white", marginBottom: "30px"}}/>
        `<NavLink to= {`/project/${id}/backlog`}>
          <StyledTab icon={<ImageAspectRatio />} label="백로그"/>
        </NavLink>
        <NavLink to={`/project/${id}/board`}>
          <StyledTab icon={<ContentPasteIcon />} label="보드"/>
        </NavLink>
        <NavLink to={`/project/${id}/storage`}>
          <StyledTab icon={<PersonPinIcon />} label="보관" />
        </NavLink>
        <Divider sx={{ backgroundColor:"white", marginBottom: "30px"}}/>
        <NavLink to={`/project/${id}/mywork`}>
          <StyledTab icon={<WorkIcon />} label="내 작업" />
        </NavLink>
        <NavLink to={`/project/${id}/calendar`}>
          <StyledTab icon={<TodayIcon />} label="캘린더" />
        </NavLink>
        <NavLink to={`/project/${id}/chatting`}>
          <StyledTab icon={<ChatIcon />} label="채팅" />
        </NavLink>
      </StyledTabs>
    </>
  );
}
