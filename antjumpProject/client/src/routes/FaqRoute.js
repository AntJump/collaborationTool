import { Routes, Route } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import FAQPage from "../epics/faq/pages/FAQPage";
import FAQDetailPage from "../epics/faq/pages/FAQDetailPage";
function FaqRoute() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<FAQPage />} />
        {/* <Route path="faqs" element={<FAQPage />} /> */}
        <Route path=":faqNumber" element={<FAQDetailPage />} />
      </Route>
    </Routes>
  );
}

export default FaqRoute;
