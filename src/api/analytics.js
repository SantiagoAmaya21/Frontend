import { URL } from "../config";

const BASE_URL = `${URL}/reservations`;

function getAuthHeaders() {
    const token = localStorage.getItem("token");
    return {
        "Authorization": `Bearer ${token}`
    };
}

/**
 * Obtiene las reservas por fecha.
 * @returns {Promise<Object|null>} Un objeto con las reservas obtenidas o null en caso de error.
 */
export const getReservationsByDate = async () => {
    try {
        const response = await fetch(`${BASE_URL}/by-date`, {
            method: "GET",
            headers: getAuthHeaders()
        });

        if (!response.ok) {
            throw new Error("Error al obtener reservas por fecha");
        }

        return await response.json();
    } catch (error) {
        console.error("Error en getReservationsByDate:", error.message);
        return null;
    }
};

/**
 * Obtiene las reservas por laboratorio.
 * @returns {Promise<Object|null>} Un objeto con las reservas obtenidas o null en caso de error.
 */
export const getReservationsByLab = async () => {
    try {
        const response = await fetch(`${BASE_URL}/by-lab`, {
            method: "GET",
            headers: getAuthHeaders()
        });

        if (!response.ok) {
            throw new Error("Error al obtener reservas por laboratorio");
        }

        return await response.json();
    } catch (error) {
        console.error("Error en getReservationsByLab:", error.message);
        return null;
    }
};

/**
 * Obtiene el promedio de reservas por prioridad.
 * @returns {Promise<Object|null>} Un objeto con el promedio de reservas por prioridad o null en caso de error.
 */
export const getAverageReservationsByPriority = async () => {
    try {
        const response = await fetch(`${BASE_URL}/average-by-priority`, {
            method: "GET",
            headers: getAuthHeaders()
        });

        if (!response.ok) {
            throw new Error("Error al obtener promedio de reservas por prioridad");
        }

        return await response.json();
    } catch (error) {
        console.error("Error en getAverageReservationsByPriority:", error.message);
        return null;
    }
};

/**
 * Obtiene los niveles de demanda de laboratorios.
 * @returns {Promise<Object|null>} Un objeto con los niveles de demanda de laboratorios o null en caso de error.
 */
export const getLabDemandLevels = async () => {
    try {
        const response = await fetch(`${BASE_URL}/demand-levels`, {  // <--- ¿Este endpoint es correcto?
            method: "GET",
            headers: getAuthHeaders()
        });

        if (!response.ok) {
            throw new Error("Error al obtener demanda de laboratorios");
        }

        return await response.json();
    } catch (error) {
        console.error("Error en getLabDemandLevels:", error.message);
        return null;
    }
};
