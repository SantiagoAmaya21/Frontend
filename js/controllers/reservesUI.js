import { createReservation, cancelReservation, getAllReservations } from "../api/reservesAPI.js";

/**
 * Maneja la creación de una reserva cuando se presiona el botón
 */
document.getElementById("createReserveButton").addEventListener("click", async function() {
    const labName = document.getElementById("labName").value;
    const start = document.getElementById("start").value;
    const end = document.getElementById("end").value;
    const purpose = document.getElementById("purpose").value;

    if (!labName || !start || !end || !purpose) {
        alert("Por favor, completa todos los campos!");
        return;
    }

    try {
        const newReserve = await createReservation(labName, start, end, purpose);
        alert("Reserva creada exitosamente!");
        console.log(newReserve);
        loadReserves(); // Recargar reservas
    } catch (error) {
        alert(error.message);
    }
});


document.addEventListener("DOMContentLoaded", function() {
    const deleteButton = document.getElementById("deleteReserveButton");

    if (!deleteButton) {
        console.error("No se encontró el botón de eliminar.");
        return;
    }

    deleteButton.addEventListener("click", async function() {
        const reservationIdElement = document.getElementById("reservationId");
        if (!reservationIdElement) {
            console.error("El campo de ID no existe en el HTML.");
            return;
        }

        const reservationId = reservationIdElement.value.trim();
        if (!reservationId) {
            alert("Por favor, ingrese un ID válido.");
            return;
        }

        console.log("Cancelando reserva con ID:", reservationId);

        try {
            await cancelReservation(reservationId);
            alert("Reserva cancelada exitosamente!");
            reservationIdElement.value = ""; // Limpiar campo en vez de recargar
        } catch (error) {
            console.error("Error al cancelar la reserva:", error);
            alert(error.message);
        }
    });
});


/**
 * Carga y muestra todas las reservas
 */
async function loadReserves() {
    try {
        const reserves = await getAllReservations();
        const reservesTable = document.getElementById("reservesTableBody");
        reservesTable.innerHTML = ""; // Limpiar tabla antes de agregar

        reserves.forEach(reserve => {
            const row = document.createElement("tr");
            row.innerHTML = `
                <td>${reserve.id}</td>
                <td>${reserve.labName}</td>
                <td>${reserve.userId}</td>
                <td>${reserve.start}</td>
                <td>${reserve.end}</td>
                <td>${reserve.purpose}</td>
            `;
            reservesTable.appendChild(row);
        });

    } catch (error) {
        alert(error.message);
    }
}

// Cargar reservas al iniciar la página
document.addEventListener("DOMContentLoaded", loadReserves);
