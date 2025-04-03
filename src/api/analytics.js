import { URL } from "../config";

const BASE_URL = `${URL}/reservations`;

/**
 * Recupera las reservas según la fecha especificada.
 * @async
 * @function getReservationsByDate
 * @returns {Promise<Object|null>} Un objeto que contiene las reservas obtenidas o null en caso de error.
 * @throws {Error} Lanza un error si la respuesta no es exitosa.
 */
export const getReservationsByDate = async () => {
    try {
        const token = localStorage.getItem("token");

        const response = await fetch(`${BASE_URL}/by-date`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
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
 * Recupera las reservas según el laboratorio especificado.
 * @async
 * @function getReservationsByLab
 * @returns {Promise<Object|null>} Un objeto que contiene las reservas obtenidas o null en caso de error.
 * @throws {Error} Lanza un error si la respuesta no es exitosa.
 */
export const getReservationsByLab = async () => {
    try {
        const token = localStorage.getItem("token");

        const response = await fetch(`${BASE_URL}/by-lab`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
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
 * Recupera el promedio de reservas según la prioridad especificada.
 * @async
 * @function getAverageReservationsByPriority
 * @returns {Promise<Object|null>} Un objeto que contiene el promedio de reservas por prioridad o null en caso de error.
 * @throws {Error} Lanza un error si la respuesta no es exitosa.
 */
export const getAverageReservationsByPriority = async () => {
    try {
        const token = localStorage.getItem("token");

        const response = await fetch(`${BASE_URL}/average-by-priority`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
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
 * Recupera los niveles de demanda de los laboratorios.
 * @async
 * @function getLabDemandLevels
 * @returns {Promise<Object|null>} Un objeto que contiene los niveles de demanda de los laboratorios o null en caso de error.
 * @throws {Error} Lanza un error si la respuesta no es exitosa.
 */
export const getLabDemandLevels = async () => {
    try {
        const token = localStorage.getItem("token");


        const response = await fetch(`${BASE_URL}/by-lab`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
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

