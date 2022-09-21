import { Routes, Route } from "react-router-dom";

import ProjectLayout from "../layouts/ProjectLayout";
import BacklogPage from "../epics/backlog/pages/BacklogPage";
import BoardPage from "../epics/board/pages/BoardPage";
import StoragePage from "../epics/storage/pages/StoragePage";
import MyWorkPage from "../epics/myWork/pages/MyWorkPage";
import CalendarPage from "../epics/calendar/pages/CalendarPage";
import ChattingPage from "../epics/chatting/pages/ChattingPage";
import ProjectErrorPage from "../epics/project/pages/ProjectErrorPage";
import IssueCreate from "../epics/backlog/pages/IssueCreate";
import IssueDetail from "../epics/backlog/pages/IssueDetail";

function ProjectRoute() {
  return (
    <Routes>
      <Route path="/" element={<ProjectLayout />}>
        <Route index element={<ProjectErrorPage />} />
        <Route path=":id">
          <Route index element={<BacklogPage />} />
          <Route path="issue-create" element={<IssueCreate />} />
          <Route path="issue/:issueId" element={<IssueDetail />} />
          <Route path="board" element={<BoardPage />} />
          <Route path="storage" element={<StoragePage />} />
          <Route path="myWork" element={<MyWorkPage />} />
          <Route path="calendar" element={<CalendarPage />} />
          <Route path="chatting" element={<ChattingPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default ProjectRoute;
