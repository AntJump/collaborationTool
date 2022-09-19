import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ImageAspectRatio from "@mui/icons-material/ImageAspectRatio";
import PersonPinIcon from "@mui/icons-material/PersonPin";
import ContentPasteIcon from "@mui/icons-material/ContentPaste";
import WorkIcon from "@mui/icons-material/Work";
import TodayIcon from "@mui/icons-material/Today";
import ChatIcon from "@mui/icons-material/Chat";
import { NavLink } from "react-router-dom";

export default function ProjectTabPanel() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label="icon label tabs example"
      orientation="vertical"
    >
      <NavLink to="/project/backlog">
        <Tab icon={<ImageAspectRatio />} label="백로그"></Tab>
      </NavLink>
      <NavLink to="/project/board">
        <Tab icon={<ContentPasteIcon />} label="보드"></Tab>
      </NavLink>
      <NavLink to="/project/storage">
        <Tab icon={<PersonPinIcon />} label="보관" />
      </NavLink>
      <NavLink to="/project/myWork">
        <Tab icon={<WorkIcon />} label="내 작업" />
      </NavLink>
      <NavLink to="/project/calendar">
        <Tab icon={<TodayIcon />} label="캘린더" />
      </NavLink>
      <NavLink to="/project/chatting">
        <Tab icon={<ChatIcon />} label="채팅" />
      </NavLink>
    </Tabs>
  );
}
