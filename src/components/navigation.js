// src/components/Navigation.js
import { useNavigate } from "react-router-dom";

const Navigation = ({ role }) => { // Recibe el rol como una prop para determinar la vista
    const navigate = useNavigate();

    return (
        <div>
            {/* Navegación común */}
            <button onClick={() => navigate("/")}>Back</button>
            
            {/* Navegación para usuarios */}
            {role === "USER" && (
                <>
                    <button onClick={() => navigate("/user_dashboard")}>Back to Menu</button>
                    <button onClick={() => navigate("/delete-reserve")}>Delete Reserve</button>
                    <button onClick={() => navigate("/consult-labs")}>Consult Labs</button>
                    <button onClick={() => navigate("/create-reserve")}>Create Reserve</button>
                </>
            )}

            {/* Navegación para administradores */}
            {role === "ADMIN" && (
                <>
                    <button onClick={() => navigate("/admin_dashboard")}>Back to Menu</button>
                    <button onClick={() => navigate("/create-laboratory")}>Create Laboratory</button>
                    <button onClick={() => navigate("/create-admin")}>Create Admin</button>
                    <button onClick={() => navigate("/graphics")}>Graphics</button>
                </>
            )}
        </div>
    );
};

export default Navigation;