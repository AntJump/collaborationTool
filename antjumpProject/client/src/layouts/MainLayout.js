import { Outlet } from "react-router-dom";

import MainHeader from "../common/components/headers/MainHeader";
import MainNavbar from "../common/components/navbars/MainNavbar";
function MainLayout() {
  return (
    <>
      <MainHeader />
      <MainNavbar />
      <Outlet />
    </>
  );
}

export default MainLayout;
