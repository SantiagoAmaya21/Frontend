import { useNavigate } from "react-router-dom";

const NavigationAdmin = () => {
    const navigate = useNavigate();
    return (
        <div>
            <button onClick={() => navigate("/")}>Back</button>
            <button onClick={() => navigate("/admin_dashboard")}>Back to Menu</button>
            <button onClick={() => navigate("/create-laboratory")}>Create Laboratory</button>
            <button onClick={() => navigate("/create-admin")}>Create Admin</button>
            <button onClick={() => navigate("/graphics")}>Graphics</button>
        </div>
    );
};

export default NavigationAdmin;