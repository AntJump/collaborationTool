import { Routes, Route } from "react-router-dom";
import ProjectLayout from "../layouts/ProjectLayout";
import BacklogPage from "../epics/backlog/pages/BacklogPage";
import BoardPage from "../epics/board/pages/BoardPage";
import StoragePage from "../epics/storage/pages/StoragePage";
import MyWorkPage from "../epics/myWork/pages/MyWorkPage";
import CalendarPage from "../epics/calendar/pages/CalendarPage";
import ChattingPage from "../epics/chatting/pages/ChattingPage";
import ProjectErrorPage from "../common/pages/ErrorPages/ProjectErrorPage";
import CalendarInsert from "../epics/calendar/pages/CalendarInsert";
import IssueCreatePage from "../epics/backlog/pages/IssueCreatePage";
import IssueDetailPage from "../epics/backlog/pages/IssueDetailPage";
import SubIssueCreatePage from "../epics/backlog/pages/SubIssueCreatePage";
import SubIssueDetailPage from "../epics/backlog/pages/SubIssueDetailPage";

function ProjectRoute() {
  return (
    <Routes>
      <Route path="/" element={<ProjectLayout />}>
        <Route index element={<ProjectErrorPage />} />
        <Route path=":id">
          <Route index element={<BacklogPage />} />
          <Route path="issue-create" element={<IssueCreatePage />} />
          <Route path="issue/:issueId">
            <Route index element={<IssueDetailPage />} />
            <Route path="subissue/:issueId" element={<SubIssueDetailPage />} />
          </Route>
          <Route path="board" element={<BoardPage />} />
          <Route path="storage" element={<StoragePage />} />
          <Route path="myWork" element={<MyWorkPage />} />
          <Route path="calendar">
            <Route index element={<CalendarPage />} />
            <Route path="add" element={<CalendarInsert />} />
          </Route>
          <Route path="chatting" element={<ChattingPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default ProjectRoute;
