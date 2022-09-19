import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import MainPage from "../common/pages/MainPage";
import Charge from "../common/pages/Charge";
import Cooperation from "../common/pages/Cooperation";
import Messenger from "../common/pages/Messenger";
import Schedule from "../common/pages/Schedule";

function MainRoute() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<MainPage />} />
        <Route path="charge" element={<Charge />} />
        <Route path="cooperation" element={<Cooperation />} />
        <Route path="messenger" element={<Messenger />} />
        <Route path="schedule" element={<Schedule />} />
      </Route>
    </Routes>
  );
}

export default MainRoute;
