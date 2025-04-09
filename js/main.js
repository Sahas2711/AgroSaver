// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    const toggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('.main-nav');
    const body = document.body;
    
    if (toggle && nav) {
        // Initialize menu state
        let isMenuOpen = false;

        // Toggle menu function
        function toggleMenu() {
            isMenuOpen = !isMenuOpen;
            toggle.classList.toggle('active');
            nav.classList.toggle('active');
            body.classList.toggle('menu-open');
        }

        // Toggle menu on button click
        toggle.addEventListener('click', function(e) {
            e.stopPropagation();
            e.preventDefault();
            toggleMenu();
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (isMenuOpen && !nav.contains(e.target) && e.target !== toggle) {
                toggleMenu();
            }
        });

        // Close menu when clicking links
        document.querySelectorAll('.main-nav a').forEach(link => {
            link.addEventListener('click', function(e) {
                if (isMenuOpen) {
                    e.stopPropagation();
                    toggleMenu();
                }
            });
        });

        // Close menu on escape key
        document.addEventListener('keydown', function(e) {
            if (isMenuOpen && e.key === 'Escape') {
                toggleMenu();
            }
        });
    }

    // Other existing JavaScript code...
});
// Wait for both DOM and all assets to load
window.addEventListener('load', function() {
    // Hide loader when everything is ready
    const loader = document.querySelector('.page-loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => loader.style.display = 'none', 300);
    }

    // Product data
    const products = [
        {
            id: 1,
            name: 'John Deere Tractor',
            category: 'Machinery',
            price: 45000,
            rating: 4.5,
            image: 'assets/images/john_deere_tractor.svg',
            features: ['60 HP', '4WD', 'Hydrostatic transmission'],
            badge: 'Popular'
        },
        {
            id: 2,
            name: 'Round Hay Baler',
            category: 'Equipment',
            price: 32000,
            rating: 4.2,
            image: 'assets/images/round_hay_baler.svg',
            features: ['4x5 bale size', 'Net wrap', '540 PTO'],
            badge: 'New'
        }
    ];

    // Render products
    function renderProducts() {
        const productGrid = document.querySelector('.product-grid');
        const loadingIndicator = document.querySelector('.loading-indicator');
    
        if (loadingIndicator) loadingIndicator.style.display = 'none';
    
        if (productGrid) {
            // Clear previously rendered products
            productGrid.innerHTML = '';
    
            products.forEach(product => {
                const productCard = document.createElement('div');
                productCard.className = 'product-card';
                productCard.innerHTML = `
                    <img src="assets/images/${product.name.toLowerCase().replace(/\s+/g, '_')}.svg" alt="${product.name}" onerror="this.src='assets/images/farm_compare_logo.svg'">
                    <h3>${product.name}</h3>
                    <p>$${product.price.toLocaleString()}</p>
                `;
                productGrid.appendChild(productCard);
            });
        }
    }

    

    // Initialize
    renderProducts();

    // Hero section functionality
    function initHeroSection() {
        // Animate stats counters
        const statNumbers = document.querySelectorAll('.stat-number');
        statNumbers.forEach(stat => {
            const target = parseInt(stat.dataset.count);
            const duration = 2000;
            const start = 0;
            const increment = target / (duration / 16);
            
            let current = start;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    clearInterval(timer);
                    current = target;
                }
                stat.textContent = Math.floor(current);
            }, 16);
        });

        // Browse products button functionality
        const browseBtn = document.getElementById('browseProducts');
        if (browseBtn) {
            browseBtn.addEventListener('click', function() {
                window.location.href = 'products.html';
            });
        }

        // Scroll indicator functionality
        const scrollIndicator = document.querySelector('.hero-scroll-indicator');
        if (scrollIndicator) {
            scrollIndicator.addEventListener('click', () => {
                const featuredSection = document.querySelector('.featured-products');
                if (featuredSection) {
                    featuredSection.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        }

        // Parallax effect for decorative elements
        window.addEventListener('scroll', () => {
            const scrollPosition = window.scrollY;
            const circle = document.querySelector('.circle');
            const square = document.querySelector('.square');
            const triangle = document.querySelector('.triangle');
            
            if (circle) circle.style.transform = `translateY(${scrollPosition * 0.2}px)`;
            if (square) square.style.transform = `rotate(45deg) translateY(${scrollPosition * 0.15}px)`;
            if (triangle) triangle.style.transform = `translateY(${scrollPosition * 0.1}px)`;
        });
    }

    // Initialize hero section
    initHeroSection();
    
    function initializeComparisonTool() {
        // Populate product dropdowns
        const dropdowns = document.querySelectorAll('.product-dropdown');
        dropdowns.forEach(dropdown => {
            products.forEach(product => {
                const option = document.createElement('option');
                option.value = product.id;
                option.textContent = product.name;
                dropdown.appendChild(option);
            });

            dropdown.addEventListener('change', updateComparison);
        });

        function updateComparison() {
            const product1Id = document.querySelectorAll('.product-dropdown')[0].value;
            const product2Id = document.querySelectorAll('.product-dropdown')[1].value;
            
            if (!product1Id || !product2Id) return;

            const product1 = products.find(p => p.id == product1Id);
            const product2 = products.find(p => p.id == product2Id);

            // Update product details
            updateProductDetails(0, product1);
            updateProductDetails(1, product2);

            // Update comparison table
            updateComparisonTable(product1, product2);
        }

        function updateProductDetails(index, product) {
            const detailsContainer = document.querySelectorAll('.product-details')[index];
            detailsContainer.innerHTML = `
                <h4>${product.name}</h4>
                <p><strong>Price:</strong> $${product.price.toLocaleString()}</p>
                <ul>
                    ${product.features.map(feature => 
                        `<li>${feature}</li>`
                    ).join('')}
                </ul>
            `;
        }

        function updateComparisonTable(product1, product2) {
            const tbody = document.querySelector('.comparison-table tbody');
            tbody.innerHTML = '';

            // Create table rows for common features
            const features = ['Price', ...product1.features, ...product2.features]
                .filter((v, i, a) => a.indexOf(v) === i); // Unique features

            features.forEach(feature => {
                const row = document.createElement('tr');
                if (feature === 'Price') {
                    row.innerHTML = `
                        <td>${feature}</td>
                        <td>$${product1.price.toLocaleString()}</td>
                        <td>$${product2.price.toLocaleString()}</td>
                    `;
                } else {
                    row.innerHTML = `
                        <td>${feature}</td>
                        <td>${product1.features.includes(feature) ? '✓' : '✗'}</td>
                        <td>${product2.features.includes(feature) ? '✓' : '✗'}</td>
                    `;
                }
                tbody.appendChild(row);
            });
        }
    }

    // Initialize comparison tool
    if (document.querySelector('.comparison-tool')) {
        initializeComparisonTool();
    }

    // Error handling
    window.addEventListener('error', function(e) {
        console.error('Error occurred:', e.message);
        if (loader) {
            loader.style.opacity = '0';
            setTimeout(() => loader.style.display = 'none', 300);
        }
        const errorDisplay = document.createElement('div');
        errorDisplay.className = 'error-message';
        errorDisplay.textContent = 'Failed to load content. Please refresh the page.';
        document.body.appendChild(errorDisplay);
    });
});