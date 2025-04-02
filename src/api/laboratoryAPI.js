import { URL } from "../config";

const LAB_API = `${URL}/laboratories`;

/**
 * Obtiene todos los laboratorios disponibles.
 * @async
 * @function getAllLaboratories
 * @returns {Promise<Array>} Una lista de laboratorios o un array vacío en caso de error.
 * @throws {Error} Lanza un error si la respuesta no es correcta.
 */
export async function getAllLaboratories() {
    try {
        const response = await fetch(`${LAB_API}/all`);
        if (!response.ok) throw new Error("Error fetching laboratories");
        return await response.json();
    } catch (error) {
        console.error("Failed to fetch laboratories:", error);
        return [];
    }
}

/**
 * Obtiene un laboratorio por nombre.
 * @async
 * @function getLaboratoryByName
 * @param {string} name - El nombre del laboratorio que se desea buscar.
 * @returns {Promise<Object|null>} El laboratorio encontrado o null en caso de error.
 * @throws {Error} Lanza un error si el laboratorio no se encuentra.
 */
export async function getLaboratoryByName(name) {
    try {
        const response = await fetch(`${LAB_API}/name/${name}`);
        if (!response.ok) throw new Error("Laboratory not found");
        return await response.json();
    } catch (error) {
        console.error(`Failed to fetch laboratory with ID ${name}:`, error);
        return null;
    }
}

/**
 * Crea un laboratorio nuevo.
 * @async
 * @function createLaboratory
 * @param {Object} laboratoryData - Los datos del laboratorio que se desea crear.
 * @returns {Promise<Object|null>} El laboratorio creado o null en caso de error.
 * @throws {Error} Lanza un error si la creación falla.
 */
export async function createLaboratory(laboratoryData) {
    try {
        const token = localStorage.getItem("token");
        const response = await fetch(`${LAB_API}/create`, {
            method: "POST",
            headers: { "Content-Type": "application/json",
               "Authorization": `Bearer ${token}`
             },
            body: JSON.stringify(laboratoryData),
        });
        if (!response.ok) throw new Error("Failed to create laboratory");
        return await response.json();
    } catch (error) {
        console.error("Failed to create laboratory:", error);
        return null;
    }
}

/**
 * Consulta la disponibilidad de laboratorios para un rango de fecha y hora.
 * @async
 * @function checkLaboratoriesAvailability
 * @param {string} startDateTime - Fecha y hora de inicio (ISO 8601).
 * @param {string} endDateTime - Fecha y hora de finalización (ISO 8601).
 * @returns {Promise<Object|null>} Disponibilidad de los laboratorios o null en caso de error.
 * @throws {Error} Lanza un error si la consulta falla.
 */
export async function checkLaboratoriesAvailability(startDateTime, endDateTime) {
    try {
        const token = localStorage.getItem("token");
        const response = await fetch(
            `${LAB_API}/avaiable?startDateTime=${encodeURIComponent(startDateTime)}&endDateTime=${encodeURIComponent(endDateTime)}`,
            {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
        );

        if (!response.ok) throw new Error("Failed to check availability");
        return await response.json();

    } catch (error) {
        console.error("Error al consultar disponibilidad:", error.message);
        return null;
    }
}


