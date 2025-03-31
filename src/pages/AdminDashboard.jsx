import { useNavigate } from "react-router-dom";
import "../styles/admin_dashboard.css";

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="admin-dashboard-container">
      <div className="dashboard-box">
        <h2 className="dashboard-title">Admin Dashboard</h2>
        <button className="dashboard-button createLab-btn" onClick={() => navigate("/create-laboratory")}>
          Create Laboratory
        </button>
        <button className="dashboard-button createAdmin-btn" onClick={() => navigate("/create-admin")}>
          Create Admin
        </button>
        <button className="dashboard-button analytics-btn" onClick={() => navigate("/analytics")}>
          Analytics
        </button>
        <button
          className="dashboard-button back-btn"
          onClick={() => {
            localStorage.removeItem("token"); // Borra el token almacenado
            navigate("/");
          }}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;