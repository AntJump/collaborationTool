import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import MainPage from "../common/pages/MainPage";
import ChargePage from "../common/pages/ChargePage";
import Cooperation from "../common/pages/CooperationPage";
import Messenger from "../common/pages/MessengerPage";
import Schedule from "../common/pages/SchedulePage";

function MainRoute() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<MainPage />} />
        <Route path="charge" element={<ChargePage />} />
        <Route path="cooperation" element={<Cooperation />} />
        <Route path="messenger" element={<Messenger />} />
        <Route path="schedule" element={<Schedule />} />
      </Route>
    </Routes>
  );
}

export default MainRoute;
