document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');

    fetch('pants.json')
        .then(response => response.json())
        .then(products => {
            const product = products.find(p => p.ID === productId);
            if (product) {
                document.getElementById('product-image-large').innerHTML = `
                    <img src="${product.AfbeeldingUrl}" alt="${product.Titel}">
                `;
                document.getElementById('product-info-large').innerHTML = `
                    <div class="product-title-large">${product.Titel}</div>
                    <div class="product-price-large">${product.Prijs} €</div>
                    <div class="product-color-large">${product.Kleuren || ''}</div>
                    <div class="product-sizes">
                        <div class="size-dot">XS</div>
                        <div class="size-dot">S</div>
                        <div class="size-dot">M</div>
                        <div class="size-dot">L</div>
                        <div class="size-dot">XL</div>
                    </div>
                    <button class="add-to-cart-btn">ADD TO CART</button>
                    <div class="product-description-large">${product.Beschrijving || ''}</div>
                `;

                document.querySelectorAll('.size-dot').forEach(dot => {
                    dot.addEventListener('click', function() {
                        document.querySelectorAll('.size-dot').forEach(d => d.classList.remove('selected'));
                        this.classList.add('selected');
                    });
                });
            } else {
                document.getElementById('product-image-large').innerHTML = "";
                document.getElementById('product-info-large').innerHTML = "<p>Oops! Product niet gevonden...</p>";
            }
        });
});