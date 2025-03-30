import { useNavigate } from "react-router-dom";
import "../styles/user_dashboard.css";

const UserDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="user-dashboard-container">
      <div className="dashboard-box">
        <h2 className="dashboard-title">User Dashboard</h2>
        <button className="dashboard-button create-btn" onClick={() => navigate("/create-reserve")}>
          Create Reservation
        </button>
        <button className="dashboard-button consult-btn" onClick={() => navigate("/consult-labs")}>
          Consult Laboratories
        </button>
        <button className="dashboard-button delete-btn" onClick={() => navigate("/delete-reserve")}>
          Delete Reservation
        </button>
        <button className="dashboard-button back-btn" onClick={() => navigate("/")}>
          Back
        </button>
      </div>
    </div>
  );
};

export default UserDashboard;
