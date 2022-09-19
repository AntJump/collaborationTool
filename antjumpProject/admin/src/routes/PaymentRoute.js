import { Routes, Route } from "react-router-dom";
import Layout from "../layouts/Layout";
import PaymentPage from "../pages/PaymentPage";
import PaymentDetailPage from "../pages/PaymentDetailPage";
import PaymentRefundPage from "../pages/PaymentRefundPage";


function MainRoute() {
  return (
    <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<PaymentPage />}/>
        <Route path=":paymentNumber" element={<PaymentDetailPage/>}/>
        <Route path=":paymentNumber/refund" element={<PaymentRefundPage/>}/>
        </Route>
    </Routes>
  );
}

export default MainRoute;
