import { Routes, Route } from "react-router-dom";
import Layout from "../layouts/Layout";
import AdminPage from "../pages/AdminPage";


function AdminRoute() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<AdminPage />}/>
      </Route>
    </Routes>
  );
}

export default AdminRoute;
