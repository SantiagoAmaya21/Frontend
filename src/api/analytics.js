import { URL } from "../config";

const BASE_URL = `${URL}/reservations`;

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

