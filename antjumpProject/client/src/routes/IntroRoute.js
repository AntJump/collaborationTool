import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

import ChargePage from "../common/pages/ChargePage";
import CooperationPage from "../common/pages/CooperationPage";
import MessagengerPage from "../common/pages/MessengerPage";
import SchedulePage from "../common/pages/SchedulePage";

function IntroRoute() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="charge" element={<ChargePage/>}/>
        <Route path="cooperation" element={<CooperationPage/>}/>
        <Route path="messenger" element={<MessagengerPage/>}/>
        <Route path="schedule" element={<SchedulePage/>}/>
      </Route>
    </Routes>
  );
}

export default IntroRoute;
