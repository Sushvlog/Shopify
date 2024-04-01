async function displayProducts(category = '') {
    try {
        const response = await fetch('https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json');
        const data = await response.json();

        const productDiv = document.querySelector(".product");
        productDiv.innerHTML = ''; // Clear existing products

        data.categories.forEach(categoryItem => {
            if (categoryItem.category_name.toLowerCase() === category.toLowerCase()) {
                categoryItem.category_products.forEach(product => {
                    const productItem = document.createElement('div');
                    productItem.classList.add('productItems');

                    productItem.innerHTML = `
                 <h6>${product.vendor}</h6>

                    <img src="${product.image}" alt="${product.title}">
                        <h6>${product.title}</h6>
                        <p>Price: ${product.price}
                    <br>${product.badge_text ? product.badge_text : 'N/A'}</p>
                    `;

                    productDiv.appendChild(productItem);
                });
            }
        });
    } catch (error) {
        console.error('Error fetching or processing products:', error);
    }
}

function filterProducts(category) {
    displayProducts(category);
}

displayProducts(); // Display all products initially
