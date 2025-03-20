import { login } from "../api/login.js";
import { getUserByUsername} from "../api/user.js";

document.getElementById("loginForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const messageDiv = document.getElementById("loginMessage");

    if (!username || !password) {
        alert("Por favor, completa todos los campos.");
        return;
    }

    try {
        const token = await login(username, password);
        document.cookie = `session-token=${token}; path=/; max-age=${60 * 60 * 12}`;
        messageDiv.innerHTML = "Login successful!";
        messageDiv.style.color = "green";
    } catch (error) {
        messageDiv.innerHTML = error.message;
        messageDiv.style.color = "red";
    }
});


document.getElementById("nextButton").addEventListener("click", async function() {
    const username = document.getElementById("username").value.trim();

    if (!username) {
        alert("Please enter your User ID"); 
        return;
    }

    try {
        const user = await getUserByUsername(username); 
        console.log("User found:", user);
        localStorage.setItem("currentUser", username);
        alert("Login successfully!")
        window.location.href = "../../pages/user_dashboard.html";
    } catch (error) {
        console.error("Error:", error);
        alert("User not found"); 
    }
});
