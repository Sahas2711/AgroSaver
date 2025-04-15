const allProducts = [
    {
        name: "Mahindra Arjun Novo 605",
        desc: "Powerful 55 HP tractor for heavy-duty farming",
        brand: "Mahindra",
        spec: "Engine: 55 HP, Transmission: SynchroMesh",
        img: "https://www.kubota.com/innovation/our-stories/images/tractor-india/img_hero_slider_06.jpg",
        category: "Tractor",
        price: 820000
    },
    {
        name: "Swaraj 744 FE",
        desc: "Best-selling multi-purpose tractor",
        brand: "Swaraj",
        spec: "Engine: 48 HP, Gearbox: 8F + 2R",
        img: "https://th.bing.com/th/id/OIP.K4XUC3BTV5IiT3VSmOL_mQHaEM?w=303&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        category: "Tractor",
        price: 560000
    },
    {
        name: "John Deere 5050 D",
        desc: "Reliable performance and fuel-efficient",
        brand: "John Deere",
        spec: "Engine: 50 HP, Steering: Power",
        img: "https://th.bing.com/th/id/OIP.cgxmCqtTjqGb03FdAitVPAHaFW?rs=1&pid=ImgDetMain",
        category: "Tractor",
        price: 680000
    },
    {
        name: "Eicher 380",
        desc: "Affordable tractor for small farms",
        brand: "Eicher",
        spec: "Engine: 40 HP, Cooling: Air-Cooled",
        img: "https://www.mahindratractor.com/sites/default/files/styles/807x480/public/2023-09/which-mahindra-tractor-is-the-best-tractor-in-the-market_637824541009359945%20%281%29_1.webp?itok=S3F13Ld8",
        category: "Tractor",
        price: 450000
    },
    {
        name: "Sonalika DI 745 III",
        desc: "Versatile tractor with high lifting capacity",
        brand: "Sonalika",
        spec: "Engine: 50 HP, PTO: 540 RPM",
        img: "https://www.onelap.in/news/wp-content/uploads/2020/04/tractor.jpg",
        category: "Tractor",
        price: 590000
    },
    {
        name: "Powertrac Euro 50",
        desc: "Fuel-efficient tractor for rugged use",
        brand: "Powertrac",
        spec: "Engine: 50 HP, Brakes: Oil Immersed",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt-sKn5ErDCvEPfKZSqincww5nj8ewMXGMHA&s",
        category: "Tractor",
        price: 530000
    },
    {
        name: "Farmtrac 45 Classic",
        desc: "Ideal for both haulage and agriculture",
        brand: "Farmtrac",
        spec: "Engine: 45 HP, Hydraulics: 1800 kg",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGg84bgDBFQX8ZvaJwxYCAPBt7h5jFmOWN7w&s",
        category: "Tractor",
        price: 520000
    },
    {
        name: "Kubota MU4501",
        desc: "Advanced Japanese technology for Indian farms",
        brand: "Kubota",
        spec: "Engine: 45 HP, Gearbox: 8F + 4R",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3AG7a2Wwiulb7tKOwUW9VavHiz1fuUmR_ZA&s",
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
    if(productName === "eicher-380") {return "tr1.html";}
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
showProducts();

// Reload on filter change
document.querySelectorAll('.filter-group input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        location.reload();
    });
});
