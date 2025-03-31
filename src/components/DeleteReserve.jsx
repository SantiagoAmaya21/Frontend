import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { cancelReservation } from "../api/reservesAPI";
import "../styles/deleteReserve.css"; // Importa el CSS
import labImage from "../img/laboratories.png";

const DeleteReserve = ({ onBack }) => {
    const navigate = useNavigate();
    const [reservationId, setReservationId] = useState("");

    const handleDelete = async () => {
        if (!reservationId.trim()) {
            alert("Please enter a valid ID.");
            return;
        }

        try {
            await cancelReservation(reservationId);
            alert("Reservation successfully cancelled!");
            setReservationId("");
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className="delete-page">
            <div className="header">
                <h1>Laboratory Reserves</h1>
            </div>
            <div className="content">
                <img src={labImage} alt="Laboratory" className="lab-image" />
                <div className="delete-container">
                    <h2 className="delete-title">Delete Reservation</h2>
                    <label className="delete-label">Reservation ID:</label>
                    <input
                        className="delete-input"
                        type="text"
                        value={reservationId}
                        onChange={(e) => setReservationId(e.target.value)}
                    />
                    <div className="button-container">
                        <button className="delete-button" onClick={() => navigate("/user_dashboard")}>Back</button>
                        <button className="delete-button" onClick={handleDelete}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteReserve;
