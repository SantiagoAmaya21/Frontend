import { useState } from "react"; // Importa el hook useState de React
import { checkLaboratoriesAvailability } from "../api/laboratoryAPI"; // Importa la función para consultar la disponibilidad de los laboratorios
import "../styles/consultLaboratories.css"; // Importa los estilos del componente
import laboratoriesImg from "../img/laboratories.png"; // Importa la imagen de laboratorios

// Componente ConsultLaboratories
const ConsultLaboratories = () => {
    // Define los estados para la fecha de inicio, fecha de fin y los laboratorios disponibles
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [availableLabs, setAvailableLabs] = useState([]);

    // Función para consultar los laboratorios disponibles
    const handleConsult = async () => {
        // Verifica si ambas fechas fueron ingresadas
        if (!startDate || !endDate) {
            alert("Please enter both start and end dates."); // Muestra un mensaje de alerta si faltan las fechas
            return;
        }

        try {
            // Llama a la API para obtener los laboratorios disponibles en el rango de fechas
            const labs = await checkLaboratoriesAvailability(startDate, endDate);
            setAvailableLabs(labs); // Actualiza el estado con los laboratorios disponibles
            if (labs.length === 0) {
                alert("No laboratories available for the selected period."); // Muestra un mensaje si no hay laboratorios disponibles
            }
        } catch (error) {
            alert("Failed to fetch data. Please check your connection."); // Muestra un mensaje si ocurre un error al consultar
        }
    };

    return (
        <div className="consult-labs-container">
            {/* Cabecera */}
            <header className="header">
                <h1>Consult Laboratories</h1>
            </header>

            <div className="content">
                {/* Imagen de laboratorios */}
                <div className="image-container">
                    <img src={laboratoriesImg} alt="Laboratories" />
                </div>

                {/* Formulario de consulta */}
                <div className="form-container">
                    <label>Start Date:</label>
                    <input
                        type="datetime-local"
                        value={startDate} // Vincula el valor del input al estado startDate
                        onChange={(e) => setStartDate(e.target.value)} // Actualiza el estado cuando el usuario cambia la fecha de inicio
                    />
                    <label>End Date:</label>
                    <input
                        type="datetime-local"
                        value={endDate} // Vincula el valor del input al estado endDate
                        onChange={(e) => setEndDate(e.target.value)} // Actualiza el estado cuando el usuario cambia la fecha de fin
                    />
                    <button onClick={handleConsult}>Consult</button> {/* Botón para consultar los laboratorios */}
                </div>
            </div>

            {/* Muestra los laboratorios disponibles si hay resultados */}
            {availableLabs.length > 0 && (
                <div className="results-container">
                    <h3>Available Laboratories:</h3>
                    <ul>
                        {availableLabs.map((labName, index) => (
                            <li key={index}>{labName}</li> // Muestra cada laboratorio en una lista
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default ConsultLaboratories;
