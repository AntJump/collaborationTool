import { Routes, Route } from "react-router-dom";
import Layout from "../layouts/Layout";
import FAQPage from "../pages/FAQPage";
import FAQDetailPage from "../pages/FAQDetailPage";
import FAQModifyPage from "../pages/FAQModifyPage";
import FAQWritePage from "../pages/FAQWritePage";


function FAQRoute() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<FAQPage />}/>
        <Route path=":faqNumber/modify" element={<FAQModifyPage/>}/>
        <Route path="write" element={<FAQWritePage/>}/>
        <Route path=":faqNumber" element={<FAQDetailPage/>}/>
      </Route>
    </Routes>
  );
}

export default FAQRoute;
