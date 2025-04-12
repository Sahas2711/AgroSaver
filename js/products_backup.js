// Array of all products (30 total)
const allProducts = [
    // ... (keep all existing product definitions unchanged)
    {
        name: "Ventilation Fan Kit",
        desc: "Energy-efficient fan for livestock housing",
        brand: "AirFlow",
        spec: "Diameter: 600 mm",
        img: "images/farm-comapre.png",
        category: "Housing",
        price: Math.floor(Math.random() * 9000) + 1000
    },
    {
        name: "Hydraulic Bale Grab", 
        desc: "Soft-handling hydraulic grab for wrapped bales",
        brand: "AgriLift",
        spec: "Clamp Width: 0.9m–1.8m",
        img: "images/hy_bale.png",
        category: "Bale Handling Equipment",
        price: Math.floor(Math.random() * 9000) + 1000
    },
    {
        name: "Bale Spike Pro 300",
        desc: "Heavy-duty bale spike for round and square bales",
        brand: "FarmTech",
        spec: "Capacity: 1200 kg",
        img: "images/bale-greeze.png",
        category: "Bale Handling Equipment",
        price: Math.floor(Math.random() * 9000) + 1000
    },
    {
        name: "Galvanized Calf Pen",
        desc: "Indoor housing unit with anti-corrosive panels",
        brand: "CalfGuard",
        spec: "Size: 1.2m x 2.0m",
        img: "images/pr4.png",
        category: "Housing",
        price: Math.floor(Math.random() * 9000) + 1000
    },
    {
        name: "Automatic Feeder",
        desc: "Programmable feed dispenser for livestock",
        brand: "FeedMaster",
        spec: "Capacity: 50kg",
        img: "images/feeder.jpg",
        category: "Feeding",
        price: Math.floor(Math.random() * 9000) + 1000
    },
    {
        name: "Tractor Attachment Kit",
        desc: "Multi-purpose front loader attachments",
        brand: "AgriTech",
        spec: "Compatible with 50-100HP",
        img: "images/tractor-attachment.jpg",
        category: "Attachments",
        price: Math.floor(Math.random() * 9000) + 1000
    },
    {
        name: "Irrigation Sprinkler",
        desc: "360° rotating sprinkler for fields",
        brand: "WaterPro",
        spec: "Coverage: 20m radius",
        img: "images/sprinkler.jpg",
        category: "Irrigation",
        price: Math.floor(Math.random() * 9000) + 1000
    },
    {
        name: "Manure Spreader",
        desc: "Hydraulic spreader for organic fertilizer",
        brand: "EcoFarm",
        spec: "Capacity: 2000L",
        img: "images/spreader.jpg",
        category: "Fertilizers",
        price: Math.floor(Math.random() * 9000) + 1000
    },

        {
            name: "Solar-Powered Electric Fence",
            desc: "Eco-friendly perimeter control system",
            brand: "SunSecure",
            spec: "Range: 5 km",
            img: "images/solar-fence.jpg",
            category: "Fencing",
            price: Math.floor(Math.random() * 9000) + 1000
        },
        {
            name: "Portable Milking Machine",
            desc: "Compact milker with dual bucket system",
            brand: "DairyEase",
            spec: "Capacity: 25L x 2",
            img: "images/milker.jpg",
            category: "Milking Equipment",
            price: Math.floor(Math.random() * 9000) + 1000
        },
        {
            name: "Seed Drill Machine",
            desc: "Precision seeder for uniform sowing",
            brand: "AgroSow",
            spec: "Rows: 11",
            img: "images/seed-drill.jpg",
            category: "Planting",
            price: Math.floor(Math.random() * 9000) + 1000
        },
        {
            name: "Rotary Tiller",
            desc: "Heavy-duty rotary tiller for land prep",
            brand: "SoilPro",
            spec: "Width: 1.5m",
            img: "images/rotary-tiller.jpg",
            category: "Land Preparation",
            price: Math.floor(Math.random() * 9000) + 1000
        },
        {
            name: "Crop Drone Sprayer",
            desc: "Automated crop spraying with GPS navigation",
            brand: "AgriFly",
            spec: "Tank: 10L",
            img: "images/drone.jpg",
            category: "Crop Protection",
            price: Math.floor(Math.random() * 9000) + 1000
        },
        {
            name: "Livestock Weighing Scale",
            desc: "Digital scale for cattle and livestock",
            brand: "WeighMate",
            spec: "Max Load: 1500kg",
            img: "images/livestock-scale.jpg",
            category: "Monitoring",
            price: Math.floor(Math.random() * 9000) + 1000
        },
        {
            name: "Grain Moisture Meter",
            desc: "Portable meter for accurate grain analysis",
            brand: "GrainGuard",
            spec: "Accuracy: ±0.5%",
            img: "images/moisture-meter.jpg",
            category: "Harvesting Tools",
            price: Math.floor(Math.random() * 9000) + 1000
        },
        {
            name: "Heavy-Duty Wheelbarrow",
            desc: "Reinforced steel frame farm wheelbarrow",
            brand: "TuffBarrow",
            spec: "Volume: 100L",
            img: "images/wheelbarrow.jpg",
            category: "Tools",
            price: Math.floor(Math.random() * 9000) + 1000
        },
        {
            name: "Compost Turner Machine",
            desc: "Efficient compost aerator and mixer",
            brand: "EcoTurn",
            spec: "Width: 2.5m",
            img: "images/compost-turner.jpg",
            category: "Composting",
            price: Math.floor(Math.random() * 9000) + 1000
        },
        {
            name: "Automatic Egg Incubator",
            desc: "Digital incubator with temperature control",
            brand: "HatchEase",
            spec: "Capacity: 48 eggs",
            img: "images/incubator.jpg",
            category: "Poultry",
            price: Math.floor(Math.random() * 9000) + 1000
        },
        {
            name: "Silage Wrap Film",
            desc: "UV-resistant wrap for silage bales",
            brand: "WrapSure",
            spec: "Length: 1500m",
            img: "images/silage-wrap.jpg",
            category: "Storage",
            price: Math.floor(Math.random() * 9000) + 1000
        },
        {
            name: "Grain Storage Bin",
            desc: "Galvanized steel bin for crop storage",
            brand: "SafeGrain",
            spec: "Capacity: 20 tons",
            img: "images/storage-bin.jpg",
            category: "Storage",
            price: Math.floor(Math.random() * 9000) + 1000
        },
        {
            name: "Soil pH Tester",
            desc: "Digital soil pH and moisture monitor",
            brand: "SoilSense",
            spec: "Range: 3.5–9.0 pH",
            img: "images/ph-tester.jpg",
            category: "Testing Tools",
            price: Math.floor(Math.random() * 9000) + 1000
        },
        {
            name: "Crop Netting",
            desc: "Protective netting for fruits and vegetables",
            brand: "NetGuard",
            spec: "Size: 10m x 50m",
            img: "images/crop-net.jpg",
            category: "Crop Protection",
            price: Math.floor(Math.random() * 9000) + 1000
        },
        {
            name: "Cattle Brush",
            desc: "Rotating brush for cow comfort and grooming",
            brand: "BrushBeef",
            spec: "Motor: 200W",
            img: "images/cattle-brush.jpg",
            category: "Animal Care",
            price: Math.floor(Math.random() * 9000) + 1000
        },
        {
            name: "Hay Rake",
            desc: "Efficient rake for collecting hay",
            brand: "RakeMaster",
            spec: "Width: 3.0m",
            img: "images/hay-rake.jpg",
            category: "Harvesting Tools",
            price: Math.floor(Math.random() * 9000) + 1000
        },
        {
            name: "Pesticide Spray Pump",
            desc: "High-pressure knapsack sprayer",
            brand: "SprayJet",
            spec: "Capacity: 16L",
            img: "images/spray-pump.jpg",
            category: "Crop Protection",
            price: Math.floor(Math.random() * 9000) + 1000
        },
        {
            name: "Greenhouse Tunnel Kit",
            desc: "Modular polytunnel for seasonal crops",
            brand: "GrowHouse",
            spec: "Size: 4m x 10m",
            img: "images/greenhouse.jpg",
            category: "Infrastructure",
            price: Math.floor(Math.random() * 9000) + 1000
        },
        {
            name: "Water Tank Trailer",
            desc: "Mobile water supply unit for fields",
            brand: "HydroHaul",
            spec: "Capacity: 1000L",
            img: "images/water-tank.jpg",
            category: "Irrigation",
            price: Math.floor(Math.random() * 9000) + 1000
        },
        {
            name: "Fodder Chopper",
            desc: "Motorized cutter for green fodder",
            brand: "ChopPro",
            spec: "Blade Speed: 2500 RPM",
            img: "images/fodder-chopper.jpg",
            category: "Feeding",
            price: Math.floor(Math.random() * 9000) + 1000
        },
        {
            name: "Field Cultivator",
            desc: "Spring-loaded cultivator for deep tilling",
            brand: "AgriRoot",
            spec: "Width: 2.1m",
            img: "images/cultivator.jpg",
            category: "Land Preparation",
            price: Math.floor(Math.random() * 9000) + 1000
        },
        {
            name: "Cow Comfort Mat",
            desc: "Rubber mat to improve cattle lying comfort",
            brand: "ComfortMoo",
            spec: "Size: 1.8m x 1.2m",
            img: "images/cow-mat.jpg",
            category: "Animal Care",
            price: Math.floor(Math.random() * 9000) + 1000
        },
        {
            name: "Drip Irrigation Kit",
            desc: "Water-saving irrigation system",
            brand: "DripWise",
            spec: "Coverage: 1 acre",
            img: "images/drip-kit.jpg",
            category: "Irrigation",
            price: Math.floor(Math.random() * 9000) + 1000
        },
        {
            name: "Battery Operated Weeder",
            desc: "Lightweight weeding tool with lithium battery",
            brand: "WeedZap",
            spec: "Runtime: 3 hrs",
            img: "images/weeder.jpg",
            category: "Weeding Tools",
            price: Math.floor(Math.random() * 9000) + 1000
        },
        {
            name: "Rain Gun Sprinkler",
            desc: "High-pressure irrigation gun",
            brand: "AquaBlast",
            spec: "Range: 30m",
            img: "images/rain-gun.jpg",
            category: "Irrigation",
            price: Math.floor(Math.random() * 9000) + 1000
        },
        {
            name: "Livestock Mineral Feeder",
            desc: "Weather-resistant mineral dispenser",
            brand: "MineralMate",
            spec: "Capacity: 30kg",
            img: "images/mineral-feeder.jpg",
            category: "Feeding",
            price: Math.floor(Math.random() * 9000) + 1000
        },
        {
            name: "Poultry Drinker Set",
            desc: "Gravity-fed water supply for poultry",
            brand: "HydraHen",
            spec: "Capacity: 10L",
            img: "images/poultry-drinker.jpg",
            category: "Poultry",
            price: Math.floor(Math.random() * 9000) + 1000
        },
        {
            name: "Plastic Crate",
            desc: "Multi-use crates for harvesting and transport",
            brand: "FarmCrate",
            spec: "Size: 600x400x300 mm",
            img: "images/crate.jpg",
            category: "Storage",
            price: Math.floor(Math.random() * 9000) + 1000
        },
        {
            name: "Diesel Water Pump",
            desc: "High-flow pump for agricultural water needs",
            brand: "PumpPro",
            spec: "Power: 5 HP",
            img: "images/diesel-pump.jpg",
            category: "Irrigation",
            price: Math.floor(Math.random() * 9000) + 1000
        },
        {
            name: "Post Hole Digger",
            desc: "Tractor-mounted digger for fencing",
            brand: "HoleMate",
            spec: "Depth: 1.2m",
            img: "images/post-hole.jpg",
            category: "Fencing",
            price: Math.floor(Math.random() * 9000) + 1000
        },
        {
            name: "Disc Plough",
            desc: "Efficient plough for turning heavy soil",
            brand: "AgriDisc",
            spec: "Discs: 3",
            img: "images/disc-plough.jpg",
            category: "Land Preparation",
            price: Math.floor(Math.random() * 9000) + 1000
        },
        {
            name: "Chaff Cutter",
            desc: "Electric cutter for animal fodder",
            brand: "FodderEase",
            spec: "Power: 2HP",
            img: "images/chaff-cutter.jpg",
            category: "Feeding",
            price: Math.floor(Math.random() * 9000) + 1000
        },
        {
            name: "Cow Hoof Trimming Kit",
            desc: "Essential tools for hoof care",
            brand: "HoofGuard",
            spec: "Items: 5-piece kit",
            img: "images/hoof-kit.jpg",
            category: "Animal Care",
            price: Math.floor(Math.random() * 9000) + 1000
        },
        {
            name: "Electric Shearing Machine",
            desc: "Sheep shearing with precision control",
            brand: "WoolTrim",
            spec: "Speed: 2800 rpm",
            img: "images/shearing.jpg",
            category: "Animal Care",
            price: Math.floor(Math.random() * 9000) + 1000
        },
        {
            name: "Beekeeping Starter Kit",
            desc: "Complete tools for beginners in apiculture",
            brand: "BeeBox",
            spec: "Includes: smoker, veil, hive tool, brush",
            img: "images/beekeeping.jpg",
            category: "Beekeeping",
            price: Math.floor(Math.random() * 9000) + 1000
        },
        {
            name: "Electric Grain Grinder",
            desc: "Multi-purpose grinder for animal feed",
            brand: "GrindMax",
            spec: "Power: 3 HP",
            img: "images/grain-grinder.jpg",
            category: "Feeding",
            price: Math.floor(Math.random() * 9000) + 1000
        },
        {
            name: "Soil Auger",
            desc: "Hand tool for sample collection and aeration",
            brand: "SoilDrill",
            spec: "Length: 1.5m",
            img: "images/soil-auger.jpg",
            category: "Testing Tools",
            price: Math.floor(Math.random() * 9000) + 1000
        },
        {
            name: "Tractor Rear Blade",
            desc: "Versatile blade for grading and leveling",
            brand: "LevelTrac",
            spec: "Width: 6 feet",
            img: "images/rear-blade.jpg",
            category: "Attachments",
            price: Math.floor(Math.random() * 9000) + 1000
        },
        {
            name: "Floating Fish Feed",
            desc: "High-protein pellets for aquaculture",
            brand: "AquaFeed",
            spec: "Bag: 25kg",
            img: "images/fish-feed.jpg",
            category: "Aquaculture",
            price: Math.floor(Math.random() * 9000) + 1000
        },
        {
            name: "Insect Light Trap",
            desc: "Attracts and traps pests without chemicals",
            brand: "BugTrap",
            spec: "Area: 200 sq. meters",
            img: "images/insect-trap.jpg",
            category: "Pest Control",
            price: Math.floor(Math.random() * 9000) + 1000
        },
        {
            name: "Organic Vermicompost Bin",
            desc: "Worm-based composting system",
            brand: "VermiPro",
            spec: "Capacity: 80L",
            img: "images/vermicompost.jpg",
            category: "Composting",
            price: Math.floor(Math.random() * 9000) + 1000
        },
        {
            name: "Electric Fence Tester",
            desc: "Quick tool for checking fence current",
            brand: "FenceCheck",
            spec: "Range: 2kV–10kV",
            img: "images/fence-tester.jpg",
            category: "Fencing",
            price: Math.floor(Math.random() * 9000) + 1000
        },
        {
            name: "Portable Cattle Pen",
            desc: "Foldable fencing solution for livestock",
            brand: "FlexiPen",
            spec: "Panels: 6",
            img: "images/cattle-pen.jpg",
            category: "Housing",
            price: Math.floor(Math.random() * 9000) + 1000
        },
        {
            name: "Crop Residue Shredder",
            desc: "Attached to tractors for residue management",
            brand: "ShredAgri",
            spec: "Working Width: 1.8m",
            img: "images/residue-shredder.jpg",
            category: "Crop Protection",
            price: Math.floor(Math.random() * 9000) + 1000
        },
        {
            name: "Plastic Mulch Layer",
            desc: "Lay mulch film with precision",
            brand: "MulchEZ",
            spec: "Width: 1m",
            img: "images/mulch-layer.jpg",
            category: "Planting",
            price: Math.floor(Math.random() * 9000) + 1000
        },
        {
            name: "Fruit Grading Machine",
            desc: "Grades produce by size and weight",
            brand: "GradeFresh",
            spec: "Capacity: 2 T/hr",
            img: "images/fruit-grader.jpg",
            category: "Harvesting Tools",
            price: Math.floor(Math.random() * 9000) + 1000
        },
        {
            name: "Smart Weather Station",
            desc: "Wireless station with soil & climate sensors",
            brand: "AgriWeather",
            spec: "Connects: App + Cloud",
            img: "images/weather-station.jpg",
            category: "Monitoring",
            price: Math.floor(Math.random() * 9000) + 1000
        },
        {
            name: "Solar Lantern",
            desc: "Rechargeable light for night farm tasks",
            brand: "SunLite",
            spec: "Battery: 3000mAh",
            img: "images/solar-lantern.jpg",
            category: "Tools",
            price: Math.floor(Math.random() * 9000) + 1000
        }
    ];
    


// Function to display products
function showProducts(searchTerm = '') {
    const container = document.getElementById('productsContainer');
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
        // Show only these 8 specific products on products.html
        const featuredProductNames = [
            "Hydraulic Bale Grab",
            "Galvanized Calf Pen",
            "Automatic Feeder",
            "Tractor Attachment Kit",
            "Irrigation Sprinkler",
            "Manure Spreader",
            "Solar-Powered Electric Fence",
            "Portable Milking Machine"
        ];
        productsToShow = filteredProducts.filter(product => 
            featuredProductNames.includes(product.name)
        );
    }

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
                <button class="view-details" onclick="window.location.href='${product.name === 'Hydraulic Bale Grab' ? 'bale_grab.html' : product.name === 'Galvanized Calf Pen' ? 'calf_pen.html' : '#'}'">View Details</button>
            </div>
        `;
    });
}

// Search button click
document.querySelector('.compare-button').addEventListener('click', function () {
    const searchInput = document.querySelector('.search-input');
    const searchTerm = searchInput.value.trim();
    showProducts(searchTerm);
    document.querySelector('.search-results').style.display = 'block';
});

// Enter key in search input
document.querySelector('.search-input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        document.querySelector('.compare-button').click();
    }
});

// Reload on filter change
document.querySelectorAll('.filter-group input[type="checkbox"]').forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        location.reload();
    });
});
