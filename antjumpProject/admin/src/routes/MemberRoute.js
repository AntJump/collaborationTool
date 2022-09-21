import { Routes, Route } from "react-router-dom";
import Layout from "../layouts/Layout";
import MemberPage from "../pages/MemberPage";
import MemberDetailPage from "../pages/MemberDetailPage";
import MemberRestorationPage from "../pages/MemberRestorationPage";


function MainRoute() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MemberPage />} />
        <Route path=":memberNumber" element={<MemberDetailPage/>}/>
        <Route path="restoration" element={<MemberRestorationPage/>}/>
      </Route>
    </Routes>
  );
}

export default MainRoute;
 