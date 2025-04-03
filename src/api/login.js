import { URL } from "../config.js";

const LOGIN_API = `${URL}/api/authenticate/login`;

/**
 * Realiza el proceso de inicio de sesión en el sistema utilizando las credenciales proporcionadas.
 * @async
 * @function login
 * @param {string} username - El nombre de usuario del usuario que esta intentando iniciar sesión.
 * @param {string} password - La contraseña del usuario.
 * @returns {Promise<string>} El token de autenticación, si el inicio de sesión es exitoso.
 * @throws {Error} Lanza un error con el mensaje de respuesta si el inicio de sesión fallo.
 */
export async function login(username, password) {
  try {
    const response = await fetch(LOGIN_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });

    if (!response.ok) {
      throw new Error(await response.text());
    }

    return await response.text(); // Token
  } catch (error) {
    throw new Error(error.message);
  }
}

