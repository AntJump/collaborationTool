import { Routes, Route } from "react-router-dom";

function IssueRoute() {
  return (
    <Routes>
      <Route path="/" element={<ProjectLayout />}>
        <Route index element={<BacklogPage />} />
        <Route path="backlog" element={<BacklogPage />} />
      </Route>
    </Routes>
  );
}

export default IssueRoute;
