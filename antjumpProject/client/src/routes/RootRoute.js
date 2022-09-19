import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import MainPage from "../common/pages/MainPage";
import ProjectPage from "../common/pages/ProjectPage";

import FAQ from "../epics/faq/pages/FAQ";
import FaqDetail from '../epics/faq/pages/FAQDetail';

import QNA from '../epics/qna/pages/QNA';
import QNADetail from '../epics/qna/pages/QNADetail';
import QNAModify from '../epics/qna/pages/QNAModify';
import QNAWrite from '../epics/qna/pages/QNAWrite';

import Payment from '../epics/payment/pages/Payment';
import PaymentDetail from '../epics/payment/pages/PaymentDetail';

function RootRouter() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<MainPage />} />
        <Route path="projects" element={<ProjectPage />} />
        <Route path="faqs" >
          <Route index element={<FAQ/>}/>
          <Route path="detail" element={<FaqDetail/>}/>
        </Route>
        <Route path="qnas" >
          <Route index element={<QNA/>}/>
          <Route path=":qnaNumber" element={<QNADetail/>}/>
          <Route path="write" element={<QNAWrite/>}/>
          <Route path=":qnaNumber" element={<QNAModify/>}/>
        </Route>
        <Route path="payments">
          <Route index element={<Payment/>} />
          <Route path=":paymentNumber" element={<PaymentDetail/>}/>
        </Route>
      </Route>
    </Routes>
  );
}

export default RootRouter;
