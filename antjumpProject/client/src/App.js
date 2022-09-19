import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainRoute from "./routes/MainRoute";
import ProjectRoute from "./routes/ProjectRoute";
import RootRouter from "./routes/RootRoute";
import MemberRoute from "./routes/MemberRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<RootRouter />} />
        <Route path="/main/*" element={<MainRoute />} />
        <Route path="/project/*" element={<ProjectRoute />} />
        <Route path="/members/*" element={<MemberRoute />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
