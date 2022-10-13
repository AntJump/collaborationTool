import { Routes, Route } from "react-router-dom";

import ProjectLayout from "../layouts/ProjectLayout";
import BacklogPage from "../epics/backlog/pages/BacklogPage";
import BoardPage from "../epics/board/pages/BoardPage";
import SprintStoragePage from "../epics/storage/pages/SprintStoragePage";
import MyWorkPage from "../epics/myWork/pages/MyWorkPage";
import CalendarPage from "../epics/calendar/pages/CalendarPage";
import ChattingPage from "../epics/chatting/pages/ChattingPage";
import ProjectErrorPage from "../common/pages/ErrorPages/ProjectErrorPage";
import CalendarInsert from "../epics/calendar/pages/CalendarInsert";
import CalendarDetail from "../epics/calendar/pages/CalendarDetail";
import IssueCreatePage from "../epics/backlog/pages/IssueCreatePage";
import IssueDetailPage from "../epics/backlog/pages/IssueDetailPage";
import SubIssueCreatePage from "../epics/backlog/pages/SubIssueCreatePage";
import SubIssueDetailPage from "../epics/backlog/pages/SubIssueDetailPage";
import RemembranceStoragePage from "../epics/storage/pages/RemembranceStoragePage";

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
            <Route path="subissue-create" element={<SubIssueCreatePage />} />
            <Route path="subissue/:issueId" element={<SubIssueDetailPage />} />
          </Route>
          <Route path="board" element={<BoardPage />} />
          <Route path="sprintstorage" element={<SprintStoragePage />} />
          <Route
            path="remembrancestorage/1"
            element={<RemembranceStoragePage />}
          />
          <Route path="myWork" element={<MyWorkPage />} />
          <Route path="calendar">
            <Route index element={<CalendarPage />} />
            <Route path="add" element={<CalendarInsert />} />
            <Route path="plan/:calendarId" element={<CalendarDetail/>}/>
          </Route>
          <Route path="chatting" element={<ChattingPage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default ProjectRoute;
