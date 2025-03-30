import { URL } from "../config";

const LAB_API = `${URL}/laboratories`;

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

export async function createLaboratory(laboratoryData) {
    try {
        const response = await fetch(`${LAB_API}/create`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(laboratoryData),
        });
        if (!response.ok) throw new Error("Failed to create laboratory");
        return await response.json();
    } catch (error) {
        console.error("Failed to create laboratory:", error);
        return null;
    }
}

export async function checkLaboratoriesAvailability(startDateTime, endDateTime) {
    const response = await fetch(
        `${LAB_API}/avaiable?startDateTime=${encodeURIComponent(startDateTime)}&endDateTime=${encodeURIComponent(endDateTime)}`
    );
    if (!response.ok) throw new Error("Failed to check availability");
    return await response.json(); // Devuelve un array de strings (nombres de laboratorios)
}


