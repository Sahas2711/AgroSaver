const allProducts = [
    {
        name: "Mahindra Arjun Novo 605",
        desc: "Powerful 55 HP tractor for heavy-duty farming",
        brand: "Mahindra",
        spec: "Engine: 55 HP, Transmission: SynchroMesh",
        img: "images/mahindra-arjun.png",
        category: "Tractor",
        price: 820000
    },
    {
        name: "Swaraj 744 FE",
        desc: "Best-selling multi-purpose tractor",
        brand: "Swaraj",
        spec: "Engine: 48 HP, Gearbox: 8F + 2R",
        img: "images/swaraj-744.png",
        category: "Tractor",
        price: 560000
    },
    {
        name: "John Deere 5050 D",
        desc: "Reliable performance and fuel-efficient",
        brand: "John Deere",
        spec: "Engine: 50 HP, Steering: Power",
        img: "images/john-deere-5050.png",
        category: "Tractor",
        price: 680000
    },
    {
        name: "Eicher 380",
        desc: "Affordable tractor for small farms",
        brand: "Eicher",
        spec: "Engine: 40 HP, Cooling: Air-Cooled",
        img: "images/eicher-380.png",
        category: "Tractor",
        price: 450000
    },
    {
        name: "Sonalika DI 745 III",
        desc: "Versatile tractor with high lifting capacity",
        brand: "Sonalika",
        spec: "Engine: 50 HP, PTO: 540 RPM",
        img: "images/sonalika-745.png",
        category: "Tractor",
        price: 590000
    },
    {
        name: "Powertrac Euro 50",
        desc: "Fuel-efficient tractor for rugged use",
        brand: "Powertrac",
        spec: "Engine: 50 HP, Brakes: Oil Immersed",
        img: "images/powertrac-euro.png",
        category: "Tractor",
        price: 530000
    },
    {
        name: "Farmtrac 45 Classic",
        desc: "Ideal for both haulage and agriculture",
        brand: "Farmtrac",
        spec: "Engine: 45 HP, Hydraulics: 1800 kg",
        img: "images/farmtrac-45.png",
        category: "Tractor",
        price: 520000
    },
    {
        name: "Kubota MU4501",
        desc: "Advanced Japanese technology for Indian farms",
        brand: "Kubota",
        spec: "Engine: 45 HP, Gearbox: 8F + 4R",
        img: "images/kubota-mu4501.png",
        category: "Tractor",
        price: 780000
    }
];

function showProducts(searchTerm = '') {
    const container = document.getElementById('tractorproductsContainer');
    container.innerHTML = '';

    let filteredProducts = allProducts;
    if (searchTerm) {
        filteredProducts = allProducts.filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.category.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }

    let productsToShow = filteredProducts;
    const isProductsPage = window.location.pathname.includes('products.html');

    if (isProductsPage) {
        const featuredProductNames = [
            "Mahindra Arjun Novo 605",
            "Swaraj 744 FE",
            "John Deere 5050 D",
            "Eicher 380",
            "Sonalika DI 745 III",
            "Powertrac Euro 50",
            "Farmtrac 45 Classic",
            "Kubota MU4501"
        ];

        productsToShow = filteredProducts.filter(product =>
            featuredProductNames.includes(product.name)
        );
    }

    // ✅ Sort products by price (lowest to highest)
    productsToShow.sort((a, b) => a.price - b.price);

    document.querySelector('.results-count').textContent =
        `${productsToShow.length} Results returned${searchTerm ? ` for "${searchTerm}"` : ''}`;

    productsToShow.forEach(product => {
        container.innerHTML += `
            <div class="product-card">
                <img src="${product.img}" alt="${product.name}" onerror="this.onerror=null;this.src='images/pr_image.png';" class="product-image">
                <h3>${product.name}</h3>
                <p>${product.desc}</p>
                <div class="product-price">₹${product.price.toLocaleString()}</div>
                <div class="product-specs">
                    <span>Brand: ${product.brand}</span>
                    <span>${product.spec}</span>
                </div>
                <button class="view-details" onclick="window.location.href='${getProductDetailsPageUrl(product)}'">View Details</button>
            </div>
        `;
    });
}

function getProductDetailsPageUrl(product) {
    const productName = product.name.toLowerCase().replace(/\s+/g, '-');
    return `${productName}.html`;
}

// Search button click
document.querySelector('.compare-button').addEventListener('click', function () {
    const searchInput = document.querySelector('.search-input');
    const searchTerm = searchInput.value.trim();
    showProducts(searchTerm);
    document.querySelector('.search-results').style.display = 'block';
});

// Enter key in search input
document.querySelector('.search-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        document.querySelector('.compare-button').click();
    }
});

// Filter change logic
document.querySelectorAll('.filter-group input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', function () {
        const searchTerm = document.querySelector('.search-input').value.trim();
        showProducts(searchTerm);
    });
});

function getActiveFilters() {
    const activeFilters = [];
    document.querySelectorAll('.filter-group input[type="checkbox"]:checked').forEach(checkbox => {
        activeFilters.push(checkbox.nextElementSibling.textContent.trim());
    });
    return activeFilters;
}
