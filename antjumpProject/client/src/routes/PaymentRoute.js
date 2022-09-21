import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import PaymentPage from "../epics/payment/pages/PaymentPage";
import PaymentDetailPage from "../epics/payment/pages/PaymentDetailPage";
function PaymentRoute() {
    return (
      <Routes>
        <Route path="/" element={<MainLayout />}>
            <Route index element={<PaymentPage/>} />
            <Route path=":paymentNumber" element={<PaymentDetailPage/>}/>
        </Route>
      </Routes>
    );
}


export default PaymentRoute;

