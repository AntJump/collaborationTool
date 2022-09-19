import { Routes, Route } from "react-router-dom";
import Layout from "../layouts/Layout";
import QNAPage from "../pages/QNAPage";
import QNAModifyPage from "../pages/QNAModifyPage";
import QNAWritePage from "../pages/QNAWritePage";
import QNADetailPage from "../pages/QNADetailPage";


function QNARoute() {
  return (
    <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<QNAPage />}/>
        <Route path=":qnaNumber/modify" element={<QNAModifyPage/>}/>
        <Route path="write" element={<QNAWritePage/>}/>
        <Route path=":qnaNumber" element={<QNADetailPage/>}/>
        </Route>
    </Routes>
  );
}

export default QNARoute;
