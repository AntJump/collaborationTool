import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import PaymentPage from "../epics/payment/pages/PaymentPage";
import PaymentDetailPage from "../epics/payment/pages/PaymentDetailPage";
import SucceessPage from "../epics/payment/pages/SucceessPage";
import FailPage from "../epics/payment/pages/FailPage";
import GoodsPage from "../epics/payment/pages/GoodsPage";
function PaymentRoute() {
    return (
      <Routes>
        <Route path="/" element={<MainLayout />}>
            <Route index element={<PaymentPage/>} />
            <Route path=":memberNumber" element={<PaymentDetailPage/>}/>
            <Route path="success" element={<SucceessPage/>} />
            <Route path="goods" element={<GoodsPage/>} />
            <Route path="fail" element={<FailPage/>} />
        </Route>
      </Routes>
    );
}


export default PaymentRoute;

