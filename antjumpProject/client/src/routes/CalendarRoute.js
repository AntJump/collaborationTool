import { Routes, Route } from "react-router-dom";

import ProjectLayout from "../layouts/ProjectLayout";
import CalendarPage from "../epics/calendar/pages/CalendarPage";
import CalendarInsert from "../epics/calendar/pages/CalendarInsert";

function FaqRoute() {
    return (
      <Routes>
        <Route path="/" element={<ProjectLayout />}>
            <Route index element={<CalendarPage/>}/>
            <Route path="add" element={<CalendarInsert/>}/>
        </Route>
      </Routes>
    );
}

export default FaqRoute;
  