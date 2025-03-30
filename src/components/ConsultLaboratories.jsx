import { useState } from "react";
import { checkLaboratoriesAvailability } from "../api/laboratoryAPI";
import "../styles/consultLaboratories.css";
import laboratoriesImg from "../img/laboratories.png";

const ConsultLaboratories = () => {
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [availableLabs, setAvailableLabs] = useState([]);

    const handleConsult = async () => {
        if (!startDate || !endDate) {
            alert("Please enter both start and end dates.");
            return;
        }

        try {
            const labs = await checkLaboratoriesAvailability(startDate, endDate);
            setAvailableLabs(labs);
            if (labs.length === 0) {
                alert("No laboratories available for the selected period.");
            }
        } catch (error) {
            alert("Failed to fetch data. Please check your connection.");
        }
    };

    return (
        <div className="consult-labs-container">
            <header className="header">
                <h1>Consult Laboratories</h1>
            </header>

            <div className="content">
                <div className="image-container">
                    <img src={laboratoriesImg} alt="Laboratories" />
                </div>

                <div className="form-container">
                    <label>Start Date:</label>
                    <input
                        type="datetime-local"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                    />
                    <label>End Date:</label>
                    <input
                        type="datetime-local"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                    />
                    <button onClick={handleConsult}>Consult</button>
                </div>
            </div>

            {availableLabs.length > 0 && (
                <div className="results-container">
                    <h3>Available Laboratories:</h3>
                    <ul>
                        {availableLabs.map((labName, index) => (
                            <li key={index}>{labName}</li> // Solo muestra el nombre
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default ConsultLaboratories;
