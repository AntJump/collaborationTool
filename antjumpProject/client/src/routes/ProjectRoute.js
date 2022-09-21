import { Routes, Route } from "react-router-dom";

import ProjectLayout from "../layouts/ProjectLayout";
import BacklogPage from "../epics/backlog/pages/BacklogPage";
import BoardPage from "../epics/board/pages/BoardPage";
import StoragePage from "../epics/storage/pages/StoragePage";
import MyWorkPage from "../epics/myWork/pages/MyWorkPage";
import CalendarPage from "../epics/calendar/pages/CalendarPage";
import ChattingPage from "../epics/chatting/pages/ChattingPage";
import ProjectErrorPage from "../epics/project/pages/ProjectErrorPage";
import CalendarInsert from "../epics/calendar/pages/CalendarInsert";


function ProjectRoute() {
  return (
    <Routes>
      <Route path="/" element={<ProjectLayout />}>
        <Route index element={<ProjectErrorPage />}/>
        <Route path=":id">
          <Route index element={<BacklogPage/>} />
          <Route path="backlog" element={<BacklogPage />} />
          <Route path="board" element={<BoardPage />} />
          <Route path="storage" element={<StoragePage />} />
          <Route path="myWork" element={<MyWorkPage />} />
          <Route path="calendar">
            <Route index element={<CalendarPage/>} />
            <Route path="add" element={<CalendarInsert/>}/>
          </Route>
        <Route path="chatting" element={<ChattingPage />} />
        </Route>

      </Route>
    </Routes>
  );
}

export default ProjectRoute;
