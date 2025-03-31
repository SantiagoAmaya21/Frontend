import { URL } from "../config.js";


const LOGIN_API = `${URL}/api/authenticate/login`;

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

