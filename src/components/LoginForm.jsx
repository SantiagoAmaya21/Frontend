import { useState } from "react"; // Hook para manejar el estado en React
import { login } from "../api/login"; // Función para autenticar al usuario
import { getUserRole } from "../api/user"; // Función para obtener el rol del usuario
import "../styles/style.css"; // Estilos específicos para este componente

const LoginForm = () => {
  const [username, setUsername] = useState(""); // Estado para el nombre de usuario
  const [password, setPassword] = useState(""); // Estado para la contraseña
  const [message, setMessage] = useState(""); // Estado para el mensaje (actualmente no se usa activamente)

  const handleSubmit = async (event) => {
    event.preventDefault(); // Previene la recarga de la página al enviar el formulario
    if (!username || !password) { // Verifica si los campos están completos
      alert("Please complete all fields.");
      return;
    }
    try {
      // Llama a la API para obtener el token de autenticación
      const token = await login(username, password);

      localStorage.setItem("currentUser", username); // Guarda el nombre de usuario en localStorage
      localStorage.setItem("token", token); // Guarda el token en localStorage

      // Obtiene el rol del usuario
      const role = await getUserRole(username);

      if (!role) {
        throw new Error("Failed to get user role"); // Si no se obtiene el rol, lanza un error
      }

      alert("Login successful!"); // Alerta de éxito al iniciar sesión

      // Redirige según el rol del usuario
      if (role === "USER") {
        window.location.href = "/user_dashboard"; // Redirige al panel de usuario
      } else {
        window.location.href = "/admin_dashboard"; // Redirige al panel de administración
      }
    } catch (error) {
      alert("Failed to fetch or incorrect username or password!"); // Muestra un mensaje de error si la autenticación falla
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Login</h2>
        <form id="loginForm" onSubmit={handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            className="input-field"
            value={username}
            onChange={(e) => setUsername(e.target.value)} // Actualiza el estado del nombre de usuario
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Actualiza el estado de la contraseña
            required
          />

          <button className="next-button" type="submit">Login</button> {/* Botón para enviar el formulario */}
        </form>
        <div id="loginMessage">{message}</div>

        {/* Enlace para registrarse si no tienen cuenta */}
        <p className="signup-text">
          I don't have an account. <a href="/register" className="sign-up-link">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
