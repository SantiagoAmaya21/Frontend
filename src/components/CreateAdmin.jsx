import React, { useState } from "react"; // Importa React y el hook useState
import { useNavigate } from "react-router-dom"; // Importa useNavigate para la navegación entre páginas
import { createAdmin } from "../api/user"; // Importa la función para crear un nuevo admin
import "../styles/createAdmin.css"; // Importa los estilos para el componente
import labImage from "../img/laboratories.png"; // Importa la imagen del laboratorio

// Componente CreateAdmin
const CreateAdmin = ({ onBack }) => {
    const navigate = useNavigate(); // Inicializa el hook de navegación

    // Define el estado para el nombre de usuario del administrador
    const [userName, setAdminName] = useState("");

    // Función para manejar la creación de un nuevo administrador
    const handleCreateAdmin = async () => {
        // Verifica que el nombre de usuario no esté vacío
        if (!userName) {
            alert("Please complete all fields!"); // Muestra un mensaje si falta completar el campo
            return;
        }
        try {
            // Llama a la API para crear el administrador con el nombre de usuario proporcionado
            await createAdmin(userName); // Enviar solo el username
            alert("Admin created successfully"); // Muestra un mensaje de éxito
            setAdminName(""); // Limpia el campo de entrada
        } catch (error) {
            alert(error.message); // Muestra un mensaje de error si ocurre algún problema
        }
    };

    return (
        <div className="create-admin-page">

            <div className="content">

                {/* Contenedor para el formulario de creación del admin */}
                <div className="create-container">
                    <h2 className="create-title">Create Admin</h2>
                    <label className="create-label">Admin name:</label>
                    {/* Campo de entrada para el nombre del administrador */}
                    <input
                        className="create-input"
                        type="text"
                        value={userName} // Vincula el valor al estado userName
                        onChange={(e) => setAdminName(e.target.value)} // Actualiza el estado cuando el usuario cambia el valor
                    />
                    <div className="button-container">
                        {/* Botón para regresar al dashboard del admin */}
                        <button className="create-button" onClick={() => navigate("/admin_dashboard")}>Back</button>

                        {/* Botón para crear el nuevo administrador */}
                        <button className="create-button" onClick={handleCreateAdmin}>Create</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CreateAdmin;
