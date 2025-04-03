import { useState, useEffect } from "react"; // Importa React y los hooks useState y useEffect
import { useNavigate } from "react-router-dom"; // Importa useNavigate para gestionar la navegación
import { createReservation, getAllReservations } from "../api/reservesAPI"; // Importa las funciones para crear y obtener reservas
import "../styles/createReserve.css"; // Importa los estilos específicos para este componente
import laboratoriesImage from "../img/laboratories.png"; // Importa una imagen relacionada con los laboratorios

// Componente CreateReserve
const CreateReserve = () => {
    const navigate = useNavigate(); // Inicializa el hook de navegación

    // Define los estados para cada campo del formulario de reserva
    const [labName, setLabName] = useState(""); // Nombre del laboratorio
    const [start, setStart] = useState(""); // Fecha y hora de inicio de la reserva
    const [end, setEnd] = useState(""); // Fecha y hora de fin de la reserva
    const [purpose, setPurpose] = useState(""); // Propósito de la reserva
    const [priority, setPriority] = useState(""); // Prioridad de la reserva
    const [reserves, setReserves] = useState([]); // Lista de todas las reservas para mostrar en una tabla

    // Cargar las reservas cuando el componente se monte
    useEffect(() => {
        loadReserves();
    }, []);

    // Función para cargar todas las reservas
    const loadReserves = async () => {
        try {
            const data = await getAllReservations(); // Obtiene todas las reservas de la API
            setReserves(data); // Actualiza el estado de reservas con los datos obtenidos
        } catch (error) {
            alert(error.message); // Muestra un mensaje de error si no se pueden obtener las reservas
        }
    };

    // Función para manejar la creación de una nueva reserva
    const handleCreateReservation = async () => {
        // Verifica que todos los campos del formulario estén completos
        if (!labName || !start || !end || !purpose || !priority) {
            alert("Please complete all fields!"); // Muestra una alerta si algún campo está vacío
            return;
        }

        try {
            // Llama a la API para crear una nueva reserva con los datos proporcionados
            await createReservation(labName, start, end, purpose, priority);
            alert("Reservation created successfully!"); // Muestra un mensaje de éxito
            // Limpia los campos del formulario
            setLabName("");
            setStart("");
            setEnd("");
            setPurpose("");
            setPriority("");
            loadReserves(); // Vuelve a cargar las reservas después de crear una nueva
        } catch (error) {
            alert(error.message); // Muestra un mensaje de error si la creación falla
        }
    };

    return (
        <div className="create-reserve-container">

            <div className="header-container">

                {/* Formulario para crear una nueva reserva */}
                <div className="form-container">
                    <h2>Create Reservation</h2>

                    <label htmlFor="labName">Laboratory:</label>
                    <input
                        type="text"
                        id="labName"
                        value={labName} // Vincula el valor con el estado labName
                        onChange={(e) => setLabName(e.target.value)} // Actualiza el estado cuando el usuario cambia el valor
                    />

                    <label htmlFor="start">Start:</label>
                    <input
                        type="datetime-local"
                        id="start"
                        value={start} // Vincula el valor con el estado start
                        onChange={(e) => setStart(e.target.value)} // Actualiza el estado cuando el usuario cambia el valor
                    />

                    <label htmlFor="end">End:</label>
                    <input
                        type="datetime-local"
                        id="end"
                        value={end} // Vincula el valor con el estado end
                        onChange={(e) => setEnd(e.target.value)} // Actualiza el estado cuando el usuario cambia el valor
                    />

                    <label htmlFor="purpose">Purpose:</label>
                    <input
                        type="text"
                        id="purpose"
                        value={purpose} // Vincula el valor con el estado purpose
                        onChange={(e) => setPurpose(e.target.value)} // Actualiza el estado cuando el usuario cambia el valor
                    />

                    <label htmlFor="priority">Priority:</label>
                    <input
                        type="text"
                        id="priority"
                        value={priority} // Vincula el valor con el estado priority
                        onChange={(e) => setPriority(e.target.value)} // Actualiza el estado cuando el usuario cambia el valor
                    />

                    <div>
                        {/* Botón para regresar al panel de usuario */}
                        <button onClick={() => navigate("/user_dashboard")}>Back</button>

                        {/* Botón para crear la reserva */}
                        <button onClick={handleCreateReservation}>Create</button>
                    </div>
                </div>
            </div>

            {/* Tabla que muestra todas las reservas actuales */}
            <section className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Laboratory</th>
                            <th>User</th>
                            <th>Start</th>
                            <th>End</th>
                            <th>Purpose</th>
                            <th>Priority</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* Mapea las reservas para mostrarlas en la tabla */}
                        {reserves.map((reserve) => (
                            <tr key={reserve.id}>
                                <td>{reserve.id}</td>
                                <td>{reserve.laboratoryname}</td>
                                <td>{reserve.username}</td>
                                <td>{reserve.startDateTime}</td>
                                <td>{reserve.endDateTime}</td>
                                <td>{reserve.purpose}</td>
                                <td>{reserve.priority}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </div>
    );
};

export default CreateReserve;
