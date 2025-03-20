// Funciones para navegar entre ventanas + botones de user_dashboard.html

document.addEventListener("DOMContentLoaded", function () {
    const backButton = document.getElementById("backButton");
    const backToMenuButton = document.getElementById("backToMenuButton");

    if (backButton) {
        backButton.addEventListener("click", function () {
            window.location.href = "../index.html";
        });
    }

    if (backToMenuButton) {
        backToMenuButton.addEventListener("click", function() {
            window.location.href = "user_dashboard.html"
        })
    }

});


document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("deleteReserveScreenButton").addEventListener("click", function () {
        window.location.href = "../pages/deleteReserve.html"; 
    });

    document.getElementById("consultLabScreenButton").addEventListener("click", function () {
        window.location.href = "../pages/consultLaboratories.html"; 
    });

    document.getElementById("createReserveScreenButton").addEventListener("click", function () {
        window.location.href = "../pages/createReserve.html"; 
    });

    document.getElementById("backButton").addEventListener("click", function () {
        window.location.href = "../index.html"; 
    });
});