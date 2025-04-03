import React, { useState } from "react";
import { createUser } from "../api/user";
import "../styles/register.css";

const RegisterForm = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.password) {
      alert("Please fill all fields");
      return;
    }

    try {
      await createUser(formData);
      alert("User created successfully");
      setFormData({ username: "", password: "" });
      window.location.href = "/login";
    } catch (error) {
      if (error.name === "TypeError" || error.message === "Failed to fetch") {
        alert("Failed to connect to the server. Please try again later.");
      } else {
        alert(error.message);
      }
    }
  };

  return (
    <div className="register-container">
      <div className="register-box">
        <h2>Laboratory Reserves</h2>
        <h3>Create an account</h3>

        <form onSubmit={handleSubmit}>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            className="input-field"
            value={formData.username}
            onChange={handleChange}
          />

          <label>Password:</label>
          <input
            type="password"
            name="password"
            className="input-field"
            value={formData.password}
            onChange={handleChange}
          />

          <button type="submit" className="register-button">
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
