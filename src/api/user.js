import { URL } from "../config";

const USER_API = `${URL}/api/users`;

/**
 * Obtiene un usuario por su nombre de usuario.
 * @async
 * @function getUserByUsername
 * @param {string} username - El nombre de usuario del usuario a buscar.
 * @returns {Promise<Object|null>} El usuario encontrado o null si ocurre un error.
 * @throws {Error} Lanza un error si el usuario no se encuentra.
 */
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

/**
 * Crea un nuevo usuario.
 * @async
 * @function createUser
 * @param {Object} userData - Los datos del usuario que se va a crear.
 * @returns {Promise<Object|null>} El usuario creado o null si ocurre un error.
 * @throws {Error} Lanza un error si la creación falla.
 */
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

/**
 * Crea un administrador con el nombre de usuario dado.
 * @async
 * @function createAdmin
 * @param {string} username - El nombre de usuario del administrador a crear.
 * @returns {Promise<Object|null>} El administrador creado o null si ocurre un error.
 * @throws {Error} Lanza un error si la creación falla.
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
 * @async
 * @function deleteUser
 * @param {number|string} id - El ID del usuario a eliminar.
 * @returns {Promise<Object|null>} El resultado de la operación o null si ocurre un error.
 * @throws {Error} Lanza un error si la eliminación falla.
 */
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


/**
 * Obtiene el rol de un usuario por su nombre de usuario.
 * @async
 * @function getUserRole
 * @param {string} username - El nombre de usuario del usuario.
 * @returns {Promise<string|null>} El rol del usuario o null si ocurre un error.
 * @throws {Error} Lanza un error si el rol no se encuentra.
 */
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

