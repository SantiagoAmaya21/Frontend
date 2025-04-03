import { URL } from "../config";

const USER_API = `${URL}/api/users`;

/**
 * Obtiene un usuario por su nombre de usuario.
 */
export async function getUserByUsername(username) {
    try {
        const token = localStorage.getItem("token");
        const response = await fetch(`${USER_API}/username/${username}`, {
            headers: { "Authorization": `Bearer ${token}` }
        });
        if (!response.ok) throw new Error("User not found!");
        return await response.json();
    } catch (error) {
        console.error("Failed to fetch user:", error);
        return null;
    }
}

/**
 * Crea un nuevo usuario.
 */
export async function createUser(userData) {
    try {
        const token = localStorage.getItem("token");
        const response = await fetch(`${USER_API}/create`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(userData),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || "Error creating user");
        }

        return await response.json();
    } catch (error) {
        console.error("Failed to create user:", error);
        throw new Error("Failed to fetch. Server is unavailable.");
    }
}

/**
 * Crea un administrador con el nombre de usuario dado.
 */
export async function createAdmin(username) {
    try {
        const token = localStorage.getItem("token");
        const response = await fetch(`${USER_API}/admin/create/${username}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || "Error creating admin");
        }

        return await response.json();
    } catch (error) {
        console.error("Failed to create admin:", error);
        throw new Error("Failed to fetch. Server is unavailable.");
    }
}

/**
 * Elimina un usuario por su ID.
 */
export async function deleteUser(id) {
    try {
        const token = localStorage.getItem("token");
        const response = await fetch(`${USER_API}/${id}`, {
            method: "DELETE",
            headers: { "Authorization": `Bearer ${token}` }
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || "Error deleting user");
        }

        return await response.json();
    } catch (error) {
        console.error("Failed to delete user:", error);
        return null;
    }
}

/**
 * Obtiene el rol de un usuario por su nombre de usuario.
 */
export async function getUserRole(username) {
    try {
        const token = localStorage.getItem("token");
        const response = await fetch(`${USER_API}/role/${username}`, {
            headers: { "Authorization": `Bearer ${token}` }
        });
        if (!response.ok) throw new Error("Role not found!");
        return await response.text();
    } catch (error) {
        console.error("Failed to fetch user role:", error);
        return null;
    }
}
