import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import MainPage from "../common/pages/MainPage";

import ProjectlistPage from "../epics/project/pages/ProjectlistPage";
function RootRoute() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<MainPage />} />
        <Route path="projects" element={<ProjectlistPage/>}/>
      </Route> 
    </Routes>
  );
}

export default RootRoute;
