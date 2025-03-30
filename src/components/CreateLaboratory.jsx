import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createLaboratory } from "../api/laboratoryAPI";
import "../styles/createLaboratory.css";
import labImage from "../img/laboratories.png";

const CreateLaboratory = ({ onBack }) => {
    const navigate = useNavigate();
    const [labName, setLabName] = useState("");
    const handleCreateLaboratory = async () => {
        if (!labName) {
            alert("Please complete all fields!");
            return;
        }

        try {
            await createLaboratory(labName);
            alert("Laboratory created successfully!");
            setLabName("");
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className="create-laboratory-page">
                    <div className="header">
                        <h1>Laboratory Reserves</h1>
                    </div>
                    <div className="content">
                        <img src={labImage} alt="Laboratory" className="lab-image" />
                        <div className="create-container">
                            <h2 className="create-title">Create Laboratory</h2>
                            <label className="create-label">Laboratory ID:</label>
                            <input
                                className="create-input"
                                type="text"
                                value={labName}
                                onChange={(e) => setLabName(e.target.value)}
                            />
                            <div className="button-container">
                                <button className="create-button" onClick={() => navigate("/admin_dashboard")}>Back</button>
                                <button className="create-button" onClick={handleCreateLaboratory}>Create</button>
                            </div>
                        </div>
                    </div>
                </div>
    );
}
export default CreateLaboratory;
