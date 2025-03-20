// Este es para crear cuenta, no para ingresar como usuario registrado

import { createUser } from "./api/user.js";

document.addEventListener("DOMContentLoaded", function () {
    const createButton = document.getElementById("createButton");

    createButton?.addEventListener("click", async function () {
        const name = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        if (!name || !password) {
            alert("Please fill all fields"); 
            return;
        }

        try {
            const newUser = await createUser({ username: name, password });
            alert("User created successfully");
            console.log("New user:", newUser);
            window.location.href = "../pages/user_dashboard.html"; 
        } catch (error) {
            console.error("Error:", error);
            alert(error.message);
        }
    });
});

