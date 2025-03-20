import { getAllLaboratories, createLaboratory, checkLaboratoriesAvailability } from "../api/laboratory.js";

document.addEventListener("DOMContentLoaded", () => {
    loadLaboratories();
    document.getElementById("createLabForm").addEventListener("submit", handleCreateLab);
});

async function loadLaboratories() {
    const labList = document.getElementById("laboratoriesList");
    labList.innerHTML = "<p>Loading...</p>";

    const laboratories = await getAllLaboratories();
    
    if (laboratories.length === 0) {
        labList.innerHTML = "<p>No laboratories available.</p>";
        return;
    }

    labList.innerHTML = "";
    laboratories.forEach(lab => {
        const labItem = document.createElement("div");
        labItem.classList.add("lab-item");

        const title = document.createElement("h3");
        title.textContent = lab.name;

        const button = document.createElement("button");
        button.textContent = "Check Availability";
        button.addEventListener("click", () => checkLabAvailability(lab.id));

        labItem.appendChild(title);
        labItem.appendChild(button);
        labList.appendChild(labItem);
    });
}

async function handleCreateLab(event) {
    event.preventDefault();
    
    const labNameInput = document.getElementById("labName");
    const labName = labNameInput.value.trim();

    if (!labName) {
        alert("Please enter a laboratory name");
        return;
    }

    const newLab = await createLaboratory({ name: labName });

    if (newLab) {
        alert("Laboratory created successfully!");
        labNameInput.value = "";
        loadLaboratories();
    } else {
        alert("Error creating laboratory.");
    }
}

document.getElementById("consultLabButton").addEventListener("click", async () => {
    const startDateTime = document.getElementById("start_date").value;
    const endDateTime = document.getElementById("end_date").value;

    if (!startDateTime || !endDateTime) {
        alert("Please enter both start and end dates.");
        return;
    }

    const availableLabs = await checkLaboratoriesAvailability(startDateTime, endDateTime);

    if (availableLabs.length === 0) {
        alert("No laboratories available for the selected period.");
    } else {
        alert(`Available Laboratories:\n${availableLabs.map(lab => lab.name).join("\n")}`); 
    }
});

