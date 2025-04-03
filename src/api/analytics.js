import { URL } from "../config";

const BASE_URL = `${URL}/reservations`;

export const getReservationsByDate = async () => {
    const response = await fetch(`${BASE_URL}/by-date`);
    if (!response.ok) throw new Error("Error al obtener reservas por fecha");
    return response.json();
};

export const getReservationsByLab = async () => {
    const response = await fetch(`${BASE_URL}/by-lab`);
    if (!response.ok) throw new Error("Error al obtener reservas por laboratorio");
    return response.json();
};

export const getAverageReservationsByPriority = async () => {
    const response = await fetch(`${BASE_URL}/average-by-priority`);
    if (!response.ok) throw new Error("Error al obtener promedio de reservas por prioridad");
    return response.json();
};

export const getLabDemandLevels = async () => {
    const response = await fetch(`${BASE_URL}/by-lab`); // Usando el mismo endpoint que clasifica reservas por laboratorio
    if (!response.ok) throw new Error("Error al obtener demanda de laboratorios");
    return response.json();
};
