// import "./App.css";
import RegisterPage from "./pages/RegisterPage";
import MainLayout from "./components/layout/MainLayout";
import LandingPage from "./pages/LandingPage";
import { Routes, Route } from "react-router";

function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<RegisterPage />} />
        {/* <Route path="/dashboard" element={<DashboardPage />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
