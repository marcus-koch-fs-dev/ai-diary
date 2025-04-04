// import "./App.css";
import RegisterPage from "./pages/RegisterPage";
import AuthLayout from "./layouts/AuthLayout";
import LandingPage from "./pages/LandingPage";
import { Routes, Route, Navigate } from "react-router";
import DashboardPage from "./pages/DashboardPage";
import AppLayout from "./layouts/AppLayout";

function App() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      {/* User-Layout */}
      <Route element={<AppLayout />}>
        <Route path="/dashboard" element={<DashboardPage />} />

        {/* Admin-Layout */}
        {/* <Route element={<RequireRole allowed={["admin"]} />}>
          <Route path="/admin" element={<AdminPage />} />
        </Route> */}
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
