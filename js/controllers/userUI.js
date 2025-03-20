import { getUserById, createUser, createAdmin, deleteUser } from "../api/user.js";

document.getElementById("createButton")?.addEventListener("click", async function() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();

    if (!username || !password) {
        alert("Please fill all fields");
        return;
    }

    try {
        const newUser = await createUser({ username, password });
        alert("User created successfully");
        console.log("New user:", newUser);
    } catch (error) {
        console.error("Error:", error);
        alert(error.message);
    }
});


document.getElementById("createAdminBtn")?.addEventListener("click", async function() {
    const username = document.getElementById("adminUsername").value.trim();
    const password = document.getElementById("adminPassword").value.trim();

    if (!username || !password) {
        alert("Please fill all fields");
        return;
    }

    try {
        const newAdmin = await createAdmin({ username, password });
        alert("Admin created successfully");
        console.log("New admin:", newAdmin);
    } catch (error) {
        console.error("Error:", error);
        alert(error.message);
    }
});

// Manejo de eliminación de usuario
document.getElementById("deleteUserBtn")?.addEventListener("click", async function() {
    const userId = document.getElementById("deleteUserId").value.trim();

    if (!userId) {
        alert("Please enter a User ID to delete");
        return;
    }

    try {
        await deleteUser(userId);
        alert("User deleted successfully");
        console.log("Deleted user ID:", userId);
    } catch (error) {
        console.error("Error:", error);
        alert(error.message);
    }
});
