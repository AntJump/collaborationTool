import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminRoute from "./routes/AdminRoute";
import IntroRoute from "./routes/IntroRoute";
import MemberRoute from "./routes/MemberRoute";
import FAQRoute from "./routes/FAQRoute";
import PaymentRoute from "./routes/PaymentRoute";
import QNARoute from "./routes/QNARoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<AdminRoute />} />
        <Route path="/intros/*" element={<IntroRoute />} />
        <Route path="/members/*" element={<MemberRoute />} />
        <Route path="/faqs/*" element={<FAQRoute />} />
        <Route path="/payments/*" element={<PaymentRoute />} />
        <Route path="/qnas/*" element={<QNARoute />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
