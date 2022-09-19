import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import MainPage from "../common/pages/MainPage";

function MainRoute() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<MainPage />} />
      </Route>
    </Routes>
  );
}

export default MainRoute;
