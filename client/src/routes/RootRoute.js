import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import MainPage from "../common/pages/MainPage";
import ProjectPage from "../common/pages/ProjectPage";

function RootRouter() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<MainPage />} />
        <Route path="projects" element={<ProjectPage />} />
      </Route>
    </Routes>
  );
}

export default RootRouter;
