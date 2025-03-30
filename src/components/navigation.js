// src/components/Navigation.js
import { useNavigate } from "react-router-dom";

const Navigation = () => {
    const navigate = useNavigate();

    return (
        <div>
            <button onClick={() => navigate("/")}>Back</button>
            <button onClick={() => navigate("/user_dashboard")}>Back to Menu</button>
            <button onClick={() => navigate("/delete-reserve")}>Delete Reserve</button>
            <button onClick={() => navigate("/consult-labs")}>Consult Labs</button>
            <button onClick={() => navigate("/create-reserve")}>Create Reserve</button>

            <button onClick={() => navigate("/admin_dashboard")}>Back to Menu</button>
            <button onClick={() => navigate("/create-laboratory")}>Create Laboratory</button>
            <button onClick={() => navigate("/create-admin")}>Create Admin</button>
            <button onClick={() => navigate("/graphics")}>Graphics</button>
        </div>
    );
};

export default Navigation;
