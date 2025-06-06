document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const sidebar = document.getElementById("sidebar");
    const body = document.body;
    const productGrid = document.querySelector(".product-grid");

    menuToggle.addEventListener("click", function (event) {
        event.stopPropagation();
        sidebar.classList.toggle("active");
        body.classList.toggle("active-sidebar");
    });

    document.addEventListener("click", function (event) {
        if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
            sidebar.classList.remove("active");
            body.classList.remove("active-sidebar");
        }
    });

    sidebar.addEventListener("click", function (event) {
        event.stopPropagation();
    });

    fetch('test.csv')
        .then(response => response.text())
        .then(data => {
            const products = parseCSV(data);
            products.forEach(product => {
                const productCard = createProductCard(product);
                productGrid.appendChild(productCard);
            });
        });

    function parseCSV(data) {
        const rows = data.split('\n').slice(1); // Skip header
        return rows.map(row => {
            const [id, title, price, colors, description, imageUrl] = row.split(';');
            return { id, title, price, colors, description, imageUrl };
        });
    }

    function createProductCard(product) {
        const card = document.createElement('div');
        card.className = 'product-card';

        const img = document.createElement('img');
        img.src = product.imageUrl;
        img.alt = product.title;

        const info = document.createElement('div');
        info.className = 'product-info';

        const title = document.createElement('span');
        title.className = 'product-title';
        title.textContent = product.title;

        const price = document.createElement('span');
        price.className = 'product-price';
        price.textContent = `€${product.price.replace(',', '.')}`;

        info.appendChild(title);
        info.appendChild(price);
        card.appendChild(img);
        card.appendChild(info);

        return card;
    }
});