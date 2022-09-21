import { Routes, Route } from "react-router-dom";
import Layout from "../layouts/Layout";
import IntroPage from "../pages/IntroPage";
import IntroDetailPage from "../pages/IntroDetailPage";
import IntroModifyPage from "../pages/IntroModifyPage";


function FAQRoute() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IntroPage />}/>
        <Route path=":introNumber" element={<IntroDetailPage/>}/>
        <Route path=":introNumber/modify" element={<IntroModifyPage/>}/>
      </Route>
    </Routes>
  );
}

export default FAQRoute;
