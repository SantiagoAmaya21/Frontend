import { URL } from "../config";
import { getCurrentUserId } from "../auth/userSession";

const RESERVES_API = `${URL}/reservations`;

/**
 * Crea una nueva reserva
 * @param {string} labName - Nombre del laboratorio
 * @param {string} startDateTime - Fecha y hora de inicio
 * @param {string} endDateTime - Fecha y hora de finalización
 * @param {string} purpose - Propósito de la reserva
 * @param {string} priority - Prioridad de la reserva
 * @returns {Promise<object>} - Reserva creada
 */
export async function createReservation(labName, startDateTime, endDateTime, purpose, priority) {
    try {
        const token = localStorage.getItem("token");

        const reservationData = {
            labName,
            username: getCurrentUserId(),
            startDateTime,
            endDateTime,
            purpose,
            priority
        };

        const response = await fetch(`${RESERVES_API}/create`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(reservationData)
        });

        if (!response.ok) {
            throw new Error("Error creating reservation");
        }

        return await response.json();
    } catch (error) {
        console.error("Reservation creation failed:", error.message);
        return null;
    }
}

/**
 * Obtiene todas las reservas
 * @returns {Promise<object[]>} - Lista de reservas
 */
export async function getAllReservations() {
    try {
        const token = localStorage.getItem("token");
        const response = await fetch(`${RESERVES_API}/all`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });

        if (!response.ok) throw new Error("Error al obtener reservas!");
        return await response.json();
    } catch (error) {
        console.error("Failed to fetch all reservations:", error.message);
        return [];
    }
}

/**
 * Cancela una reserva por ID
 * @param {string} reservationId - ID de la reserva a cancelar
 * @returns {Promise<void>}
 */
export async function cancelReservation(reservationId) {
    try {
        const token = localStorage.getItem("token");
        const response = await fetch(`${RESERVES_API}/cancel/${reservationId}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });

        if (!response.ok) throw new Error("Error al cancelar la reserva!");
    } catch (error) {
        console.error("Failed to cancel reservation:", error.message);
    }
}
