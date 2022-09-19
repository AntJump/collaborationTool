
import { Routes, Route } from "react-router-dom";
import QNADetailPage from "../epics/qna/pages/QNADetailPage";
import QNAModifyPage from "../epics/qna/pages/QNAModifyPage";
import QNAPage from "../epics/qna/pages/QNAPage";
import QNAWritePage from "../epics/qna/pages/QNAWritePage";

import MainLayout from "../layouts/MainLayout";



function QnaRoute() {
    return (
      <Routes>
         <Route path="/" element={<MainLayout/>}>
          <Route index element={<QNAPage/>}/>
          <Route path=":qnaNumber" element={<QNADetailPage/>}/>
          <Route path="write" element={<QNAWritePage/>}/>
          <Route path=":qnaNumber/modify" element={<QNAModifyPage/>}/>
        </Route>
      </Routes>
    );
}

export default QnaRoute;