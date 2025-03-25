import { URL } from "../config.js";
import { getCurrentUserId } from "../auth/userSession.js";

const RESERVES_API = `${URL}/reservations`;

/**
 * Crea una nueva reserva
 * @param {string} labName - Nombre del laboratorio
 * @param {string} start - Fecha y hora de inicio 
 * @param {string} end - Fecha y hora de finalización 
 * @param {string} purpose - Propósito de la reserva
 * @returns {Promise<object>} - Reserva creada
 */
export async function createReservation(labName, startDateTime, endDateTime, purpose) {
    const reservationData = {
        labName,
        username: getCurrentUserId(),
        startDateTime,
        endDateTime,
        purpose,
        priority:4
    };

    const response = await fetch(`${RESERVES_API}/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(reservationData)
    });

    if (!response.ok) throw new Error("Error al crear la reserva!");
    return response.json();
}

/**
 * Cancela una reserva por ID
 * @param {string} reservationId - ID de la reserva a cancelar
 * @returns {Promise<void>}
 */
export async function cancelReservation(reservationId) {
    const response = await fetch(`${RESERVES_API}/${reservationId}`, {
        method: "DELETE"
    });

    if (!response.ok) throw new Error("Error al cancelar la reserva!");
}

/**
 * Obtiene todas las reservas
 * @returns {Promise<Array>} - Lista de reservas
 */
export async function getAllReservations() {
    const response = await fetch(RESERVES_API);
    if (!response.ok) throw new Error("Error al obtener las reservas!");
    return response.json();
}

