import { useState } from "react"; // Importa el hook useState para manejar el estado
import { useNavigate } from "react-router-dom"; // Importa el hook useNavigate para manejar la navegación entre páginas
import { cancelReservation } from "../api/reservesAPI"; // Importa la función para cancelar reservas
import "../styles/deleteReserve.css"; // Importa los estilos específicos para este componente
import labImage from "../img/laboratories.png"; // Importa una imagen relacionada con los laboratorios

// Componente DeleteReserve
const DeleteReserve = ({ onBack }) => {
    const navigate = useNavigate(); // Inicializa el hook de navegación
    const [reservationId, setReservationId] = useState(""); // Define el estado para el ID de la reserva a eliminar

    // Función para manejar la eliminación de la reserva
    const handleDelete = async () => {
        // Verifica que el ID de la reserva no esté vacío
        if (!reservationId.trim()) {
            alert("Please enter a valid ID."); // Muestra una alerta si el ID está vacío
            return;
        }

        try {
            // Llama a la API para cancelar la reserva con el ID proporcionado
            await cancelReservation(reservationId);
            alert("Reservation successfully cancelled!"); // Muestra un mensaje de éxito
            setReservationId(""); // Limpia el campo de ID de reserva
        } catch (error) {
            alert(error.message); // Muestra un mensaje de error si la eliminación falla
        }
    };

    return (
        <div className="delete-page">

            <div className="content">
                
                <div className="delete-container">
                    <h2 className="delete-title">Delete Reservation</h2>
                    {/* Campo para ingresar el ID de la reserva */}
                    <label className="delete-label">Reservation ID:</label>
                    <input
                        className="delete-input"
                        type="text"
                        value={reservationId} // Vincula el valor del input con el estado reservationId
                        onChange={(e) => setReservationId(e.target.value)} // Actualiza el estado cuando el usuario cambia el valor
                    />
                    <div className="button-container">
                        {/* Botón para regresar al panel de usuario */}
                        <button className="delete-button" onClick={() => navigate("/user_dashboard")}>Back</button>

                        {/* Botón para eliminar la reserva */}
                        <button className="delete-button" onClick={handleDelete}>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteReserve;
