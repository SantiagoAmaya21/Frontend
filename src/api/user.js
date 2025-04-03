import { URL } from "../config";

const USER_API = `${URL}/api/users`;

export async function getUserByUsername(username) {
    try {

        const response = await fetch(`${USER_API}/username/${username}`);
        if (!response.ok) throw new Error("User not found!");
        return await response.json();
    } catch (error) {
        console.error("Failed to fetch user:", error);
        return null;
    }
}

export async function createUser(userData) {
    try {
        const response = await fetch(`${USER_API}/create`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
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


export async function deleteUser(id) {
        try {
            const response = await fetch(`${USER_API}/${id}`, {
                method: "DELETE",
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
export async function getUserRole(username) {
        try {
            const response = await fetch(`${USER_API}/role/${username}`);
            if (!response.ok) throw new Error("Role not found!");
            return await response.text();
        } catch (error) {
            console.error("Failed to fetch user role:", error);
            return null;
        }
}

