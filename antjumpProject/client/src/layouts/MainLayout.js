import { Outlet } from "react-router-dom";

import MainHeader from "../common/components/headers/MainHeader";
function MainLayout() {
  return (
    <>
      <MainHeader />
      <Outlet />
    </>
  );
}

export default MainLayout;
