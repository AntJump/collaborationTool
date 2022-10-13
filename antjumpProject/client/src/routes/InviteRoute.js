import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";


import ProjectInvitedPage from "../epics/project/pages/ProjectInvitedPage";

function InviteRoute() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path=":token" element={<ProjectInvitedPage/>}/>
      </Route> 
    </Routes>
  );
}

export default InviteRoute;
