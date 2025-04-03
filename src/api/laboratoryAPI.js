import { URL } from "../config";

const LAB_API = `${URL}/laboratories`;

/**
 * Recupera todos los laboratorios disponibles.
 * @async
 * @function getAllLaboratories
 * @returns {Promise<Array>} Una lista de laboratorios o un array vacío si sucede un error.
 * @throws {Error} Lanza un error si la respuesta no es exitosa.
 */
export async function getAllLaboratories() {
    try {
        const token = localStorage.getItem("token");
        const response = await fetch(`${LAB_API}/all`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
            },
        });
        if (!response.ok) throw new Error("Error fetching laboratories");
        return await response.json();
    } catch (error) {
        console.error("Failed to fetch laboratories:", error);
        return [];
    }
}

/**
 * Recupera un laboratorio por nombre.
 * @async
 * @function getLaboratoryByName
 * @param {string} name - El nombre del laboratorio que se esta buscando.
 * @returns {Promise<Object|null>} El laboratorio encontrado o null en caso de que se genere un error.
 * @throws {Error} Lanza un error si el laboratorio no fue encuentra.
 */
export async function getLaboratoryByName(name) {
    try {
        const token = localStorage.getItem("token");
        const response = await fetch(`${LAB_API}/name/${name}`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
            },
        });
        if (!response.ok) throw new Error("Laboratory not found");
        return await response.json();
    } catch (error) {
        console.error(`Failed to fetch laboratory with ID ${name}:`, error);
        return null;
    }
}

/**
 * Crea un nuevo laboratorio.
 * @async
 * @function createLaboratory
 * @param {Object} laboratoryData - Los datos del laboratorio que se busca crear.
 * @returns {Promise<Object|null>} El laboratorio creado o null en caso de que se genere un error.
 * @throws {Error} Lanza un error si la creación del laboratorio falla.
 */
export async function createLaboratory(laboratoryData) {
    try {
        const token = localStorage.getItem("token");
        const response = await fetch(`${LAB_API}/create`, {
            method: "POST",
            headers: { 
                "Content-Type": "application/json",
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
 * Obtiene la disponibilidad de laboratorios para un rango de fecha y hora.
 * @async
 * @function checkLaboratoriesAvailability
 * @param {string} startDateTime - Fecha y hora de inicio (ISO 8601)
 * @param {string} endDateTime - Fecha y hora de finalización (ISO 8601)
 * @returns {Promise<Object|null>} Disponibilidad de los laboratorios o null en caso de uqe se genere un error.
 * @throws {Error} Lanza un error si la consulta fallo.
 */
export async function checkLaboratoriesAvailability(startDateTime, endDateTime) {
    try {
        const token = localStorage.getItem("token");
        const response = await fetch(
            `${LAB_API}/avaiable?startDateTime=${encodeURIComponent(startDateTime)}&endDateTime=${encodeURIComponent(endDateTime)}`,
            {
                method: "GET",
                headers: {
                    "Authorization": `Bearer ${token}`,
                },
            }
        );

        if (!response.ok) throw new Error("Failed to check availability");
        return await response.json();

    } catch (error) {
        console.error("Error al consultar disponibilidad:", error.message);
        return null;
    }
}
