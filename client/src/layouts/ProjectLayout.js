import { Outlet } from "react-router-dom";

import ProjectHeader from "../common/components/headers/ProjectHeader";
import BoardFrame from "../epics/board/components/frames/BoardFrame";

function ProjectLayout() {
  return (
    <>
      <ProjectHeader />
      <BoardFrame />
      <Outlet />
    </>
  );
}

export default ProjectLayout;
