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

    // Producten inladen
    fetch('producten.json')
        .then(response => response.json())
        .then(products => {
            console.log(products); // Voeg deze regel toe
            const grid = document.querySelector('.product-grid');
            grid.innerHTML = '';
            products.forEach(product => {
                const card = document.createElement('div'); // <-- deze regel toevoegen!
                card.className = 'product-card';
                card.innerHTML = `
                    <img src="${product.AfbeeldingUrl.trim()}" alt="${product.Titel.trim()}">
                    <div class="product-info">
                        <span class="product-title">${product.Titel.trim()}</span>
                        <span class="product-price">€${product.Prijs.toString().trim()}</span>
                        <span class="product-sub">3 Kleuren</span>
                    </div>
                `;
                grid.appendChild(card);
            });
        });
        

});
