import { URL } from "../config.js";

const USER_API = `${URL}/api/users`; 

export async function getUserByUsername(username) {
    const response = await fetch(`${USER_API}/username/${username}`);
    if (!response.ok) throw new Error("User not found!");
    return response.json();
}

export async function createUser(userData) {
    const response = await fetch(`${USER_API}/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData)
    });
    
    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Error creating user");
    }
    
    return response.json();
}

export async function createAdmin(userData) {
    const response = await fetch(`${USER_API}/create/admin`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userData)
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Error creating admin");
    }

    return response.json();
}

export async function deleteUser(id) {
    const response = await fetch(`${USER_API}/${id}`, {
        method: "DELETE",
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Error deleting user");
    }

    return response.json();
}
