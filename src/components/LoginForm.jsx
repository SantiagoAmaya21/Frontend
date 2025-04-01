import { useState } from "react";
import { login } from "../api/login";
import { getUserRole } from "../api/user";
import "../styles/style.css";


const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!username || !password) {
      alert("Please complete all fields.");
      return;
    }
    try {
      const token = await login(username, password);

      localStorage.setItem("currentUser", username);
      localStorage.setItem("token", token);
      
      const role = await getUserRole(username);

      if (!role) {
          throw new Error("Failed to get user role");
      }

      alert("Login successful!");

      // Redirigir según el rol
      if (role === "USER") {
          window.location.href = "/user_dashboard";
      } else {
          window.location.href = "/admin_dashboard";
      }
    } catch (error) {
      alert("Failed to fetch or incorrect username or password!");
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
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button className="next-button" type="submit">Login</button>
        </form>
        <div id="loginMessage">{message}</div>

        <p className="signup-text">
          I don't have an account. <a href="/register" className="sign-up-link">Sign up</a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
