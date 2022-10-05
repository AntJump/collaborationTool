import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import MainPage from "../common/pages/MainPage";
import Login from "../epics/member/pages/Login";
import Register from "../epics/member/pages/Register";
import Profile from "../epics/member/pages/Profile";
import FindPwd from "../epics/member/pages/FindPwd";

function MemberRoute() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<MainPage />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="profile" element={<Profile />} />
        <Route path="request" element={<FindPwd />} />
      </Route>
    </Routes>
  );
}

export default MemberRoute;
