import { Routes, Route } from "react-router-dom";
import Layout from "../layouts/Layout";
import AdminPage from "../pages/AdminPage";
import AdminAddPage from "../pages/AdminAddPage";

function AdminRoute() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<AdminPage />} />
        <Route path="/add" component={<AdminAddPage />} />
      </Route>
    </Routes>
  );
}

export default AdminRoute;
