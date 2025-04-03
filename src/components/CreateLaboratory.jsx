import { useState } from "react"; // Importa React y el hook useState
import { useNavigate } from "react-router-dom"; // Importa useNavigate para manejar la navegación
import { createLaboratory } from "../api/laboratoryAPI"; // Importa la función que crea un laboratorio
import "../styles/createLaboratory.css"; // Importa los estilos para el componente
import labImage from "../img/laboratories.png"; // Importa la imagen del laboratorio

// Componente CreateLaboratory
const CreateLaboratory = ({ onBack }) => {
    const navigate = useNavigate(); // Inicializa el hook de navegación
    const [labName, setLabName] = useState(""); // Define el estado para el nombre del laboratorio

    // Función para manejar la creación del laboratorio
    const handleCreateLaboratory = async () => {
        // Verifica si el nombre del laboratorio no está vacío
        if (!labName) {
            alert("Please complete all fields!"); // Muestra un mensaje de alerta si el campo está vacío
            return;
        }

        try {
            // Llama a la API para crear el laboratorio con el nombre proporcionado
            await createLaboratory({ name: labName });
            alert("Laboratory created successfully!"); // Muestra un mensaje de éxito si se crea el laboratorio
            setLabName(""); // Limpia el campo de entrada después de la creación
        } catch (error) {
            alert(error.message); // Muestra un mensaje de error si ocurre un problema al crear el laboratorio
        }
    };

    return (
        <div className="create-laboratory-page">
            {/* Cabecera del componente */}
            <div className="header">
                <h1>Laboratory Reserves</h1>
            </div>

            <div className="content">
                {/* Imagen del laboratorio */}
                <img src={labImage} alt="Laboratory" className="lab-image" />

                {/* Formulario de creación de laboratorio */}
                <div className="create-container">
                    <h2 className="create-title">Create Laboratory</h2>
                    <label className="create-label">Laboratory name:</label>
                    {/* Campo de entrada para el nombre del laboratorio */}
                    <input
                        className="create-input"
                        type="text"
                        value={labName} // Vincula el valor del campo con el estado labName
                        onChange={(e) => setLabName(e.target.value)} // Actualiza el estado cuando el usuario cambia el valor del campo
                    />
                    <div className="button-container">
                        {/* Botón para regresar al dashboard del admin */}
                        <button className="create-button" onClick={() => navigate("/admin_dashboard")}>Back</button>

                        {/* Botón para crear el nuevo laboratorio */}
                        <button className="create-button" onClick={handleCreateLaboratory}>Create</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateLaboratory;
