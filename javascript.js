document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const sidebar = document.getElementById("sidebar");
    const body = document.body;

    menuToggle.addEventListener("click", function (event) {
        event.stopPropagation();
        sidebar.classList.toggle("active");
        body.classList.toggle("active-sidebar"); // Voeg klasse toe aan body
    });

    document.addEventListener("click", function (event) {
        if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
            sidebar.classList.remove("active");
            body.classList.remove("active-sidebar"); // Verwijder klasse van body
        }
    });

    sidebar.addEventListener("click", function (event) {
        event.stopPropagation();
    });
});
