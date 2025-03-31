import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

import UserDashboard from "./pages/UserDashboard";
import AdminDashboard from "./pages/AdminDashboard";

import CreateReservePage from "./pages/CreateReservePage";
import DeleteReservePage from "./pages/DeleteReservePage";
import ConsultLaboratoriesPage from "./pages/ConsultLaboratoriesPage";

import CreateLaboratoryPage from "./pages/CreateLaboratoryPage";
import CreateAdminPage from "./pages/CreateAdminPage";
import AnalyticsPage from "./pages/AnalyticsPage"

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Navigate to="/login" />} />

        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />

        <Route path="/user_dashboard" element={<UserDashboard />} />
        <Route path="/admin_dashboard" element={<AdminDashboard />}/>

        <Route path="/create-reserve" element={<CreateReservePage />} />
        <Route path="/delete-reserve" element={<DeleteReservePage />} />
        <Route path="/consult-labs" element={<ConsultLaboratoriesPage />} />

        <Route path="/create-laboratory" element={<CreateLaboratoryPage />} />
        <Route path="/create-admin" element={<CreateAdminPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
      </Routes>
    </Router>
  );
}

export default App;

