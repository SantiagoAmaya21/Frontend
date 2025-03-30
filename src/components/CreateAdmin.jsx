import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createAdmin } from "../api/user";
import "../styles/createAdmin.css";
import labImage from "../img/laboratories.png";

const CreateAdmin = ({ onBack }) => {
    const navigate = useNavigate();

    const [userName, setAdminName] = useState("");
    const handleCreateAdmin = async () => {
        if (!userName) {
            alert("Please complete all fields!");
            return;
        }
        try {
            await createAdmin(userName); // <-- Enviar solo el username
            alert("Admin created successfully");
            setAdminName("");
        } catch (error) {
            alert(error.message);
        }
    };


    return (
            <div className="create-admin-page">
                        <div className="header">
                            <h1>Laboratory Reserves</h1>
                        </div>
                        <div className="content">
                            <img src={labImage} alt="Laboratory" className="lab-image" />
                            <div className="create-container">
                                <h2 className="create-title">Create Admin</h2>
                                <label className="create-label">Admin name:</label>
                                <input
                                    className="create-input"
                                    type="text"
                                    value={userName}
                                    onChange={(e) => setAdminName(e.target.value)}
                                />
                                <div className="button-container">
                                    <button className="create-button" onClick={() => navigate("/admin_dashboard")}>Back</button>
                                    <button className="create-button" onClick={handleCreateAdmin}>Create</button>
                                </div>
                            </div>
                        </div>
                    </div>
    );
}


export default CreateAdmin;