

// Get all products (would normally come from API)
const allProducts = [
    {
        id: 1,
        name: 'Mahindra Arjun Novo 605 DI-i',
        price: 780000,
        features: {
            'Power': '57 HP',
            'Drive': '2WD',
            'Transmission': 'Synchromesh'
        }
    },
    {
        id: 2,
        name: 'Swaraj 744 FE',
        price: 680000,
        features: {
            'Power': '48 HP',
            'Cooling': 'Water Cooled',
            'Fuel Tank': '60 L'
        }
    },
    {
        id: 3,
        name: 'KisanKraft Power Weeder',
        price: 48000,
        features: {
            'Engine': '4 Stroke Petrol',
            'Power': '7 HP',
            'Working Width': '90 cm'
        }
    },
    {
        id: 4,
        name: 'Disc Harrow',
        price: 42000,
        features: {
            'Disc Diameter': '22 inch',
            'Frame Type': 'Heavy Duty',
            'Suitable For': 'All Tractors'
        }
    },
    {
        id: 5,
        name: 'Cultivator (9 Tynes)',
        price: 29000,
        features: {
            'Frame': 'Mild Steel',
            'Width': '6 ft',
            'Mounting': '3 Point Linkage'
        }
    },
    {
        id: 6,
        name: 'Paddy Thresher',
        price: 55000,
        features: {
            'Capacity': '800 kg/hr',
            'Power Source': 'Tractor PTO',
            'Operation': 'Multi-crop'
        }
    },
    {
        id: 7,
        name: 'Rotavator (5 ft)',
        price: 67000,
        features: {
            'Blades': 'L-type',
            'Tractor Power': '35-50 HP',
            'Working Width': '5 ft'
        }
    },
    {
        id: 8,
        name: 'Mini Rice Mill',
        price: 95000,
        features: {
            'Capacity': '150 kg/hr',
            'Electric Motor': '3 HP',
            'Use': 'Rice Dehusking'
        }
    },
    {
        id: 9,
        name: 'Solar Water Pump (5 HP)',
        price: 180000,
        features: {
            'Pump Type': 'Submersible',
            'Panels': '2 kW',
            'Application': 'Irrigation'
        }
    },
    {
        id: 10,
        name: 'Manual Seed Drill',
        price: 8500,
        features: {
            'Rows': '6',
            'Operation': 'Manual',
            'Suitable Crops': 'Wheat, Maize'
        }
    },
    {
        id: 11,
        name: 'Knapsack Sprayer',
        price: 2500,
        features: {
            'Tank Capacity': '16 L',
            'Pump Type': 'Piston',
            'Operation': 'Manual'
        }
    },
    {
        id: 12,
        name: 'Tractor Trailer (Tipping)',
        price: 130000,
        features: {
            'Capacity': '3 Tons',
            'Axle': 'Single',
            'Hydraulic': 'Yes'
        }
    },
    {
        id: 13,
        name: 'Automatic Sugarcane Planter',
        price: 240000,
        features: {
            'Rows': '2',
            'Tractor Power': '50 HP+',
            'Fertilizer Attachment': 'Yes'
        }
    },
    {
        id: 14,
        name: 'Drip Irrigation Kit',
        price: 30000,
        features: {
            'Coverage': '1 Acre',
            'Water Saving': '60%',
            'Suitable For': 'Vegetables, Fruits'
        }
    },
    {
        id: 15,
        name: 'Chaff Cutter (Electric)',
        price: 22000,
        features: {
            'Blades': '4',
            'Motor': '2 HP',
            'Output': '400 kg/hr'
        }
    },
    {
        id: 16,
        name: 'Zero Till Seed Drill',
        price: 95000,
        features: {
            'Rows': '9',
            'Used For': 'Direct Seeding',
            'Suitable Crops': 'Wheat, Gram'
        }
    },
    {
        id: 17,
        name: 'Grain Moisture Meter',
        price: 5200,
        features: {
            'Accuracy': '±0.5%',
            'Battery': '9V',
            'Suitable Grains': 'Wheat, Rice, Maize'
        }
    },
    {
        id: 18,
        name: 'Animal Feed Grinder',
        price: 48000,
        features: {
            'Motor': '5 HP',
            'Capacity': '600 kg/hr',
            'Operation': 'Electric'
        }
    },
    {
        id: 19,
        name: 'Vermicompost Bed Kit',
        price: 3800,
        features: {
            'Material': 'UV Stabilized HDPE',
            'Size': '12x4x2 ft',
            'Included': 'Support Rods, Net'
        }
    },
    {
        id: 20,
        name: 'Soil pH & Moisture Tester',
        price: 1500,
        features: {
            'Measurement': 'pH & Moisture',
            'Power': 'No battery required',
            'Application': 'Soil Health Check'
        }
    }
];

// // Get product IDs from URL
// const urlParams = new URLSearchParams(window.location.search);
// const productIds = urlParams.get('products')?.split(',').map(Number) || [];

// // Filter products to compare
// const productsToCompare = allProducts.filter(p => productIds.includes(p.id));

// // DOM elements
// const comparisonTable = document.getElementById('comparison-data');
// console.log(comparisonTable);
// // Display comparison
// function displayComparison() {
//     // Clear existing rows
//     comparisonTable.innerHTML = '';

//     // Show message if not enough products
//     if (productsToCompare.length < 2) {
//         comparisonTable.innerHTML = `
//             <tr>
//                 <td colspan="3" style="text-align: center; padding: 2rem;">
//                     Please select at least 2 products to compare
//                 </td>
//             </tr>
//         `;
//         return;
//     }

//     // Add header row with product names
//     const headerRow = document.createElement('tr');
//     headerRow.innerHTML = `
//         <th>Feature</th>
//         ${productsToCompare.map(p => `<th>${p.name}</th>`).join('')}
//     `;
//     comparisonTable.appendChild(headerRow);

//     // Add price row
//     const priceRow = document.createElement('tr');
//     priceRow.innerHTML = `
//         <td>Price</td>
//         ${productsToCompare.map(p => `<td>$${p.price.toLocaleString()}</td>`).join('')}
//     `;
//     comparisonTable.appendChild(priceRow);

//     // Get all unique features from all products
//     const allFeatures = new Set();
//     productsToCompare.forEach(p => {
//         Object.keys(p.features).forEach(f => allFeatures.add(f));
//     });

//     // Add feature rows
//     allFeatures.forEach(feature => {
//         const row = document.createElement('tr');
//         row.innerHTML = `
//             <td>${feature}</td>
//             ${productsToCompare.map(p => `<td>${p.features[feature] || '-'}</td>`).join('')}
//         `;
//         comparisonTable.appendChild(row);
//     });

//     // Add clear comparison button
//     const clearRow = document.createElement('tr');
//     clearRow.innerHTML = `
//         <td colspan="${productsToCompare.length + 1}" style="text-align: center; padding: 1rem;">
//             <button onclick="clearComparison()" style="padding: 0.5rem 1rem; background-color: #f44336; color: white; border: none; border-radius: 4px; cursor: pointer;">
//                 Clear Comparison
//             </button>
//         </td>
//     `;
//     comparisonTable.appendChild(clearRow);
// }

// function clearComparison() {
//     localStorage.removeItem('compareProducts');
//     window.location.href = 'compare.html';
// }

// // Initialize comparison page
// document.addEventListener('DOMContentLoaded', displayComparison);

document.addEventListener('DOMContentLoaded', () => {
    const productDropdowns = document.querySelectorAll('.product-dropdown');
    const comparisonTableBody = document.querySelector('.comparison-table tbody');

    // Populate dropdowns with products
    productDropdowns.forEach(dropdown => {
        allProducts.forEach(product => {
            const option = document.createElement('option');
            option.value = product.id;
            option.textContent = product.name;
            dropdown.appendChild(option);
        });

        dropdown.addEventListener('change', updateComparison);
    });

    function updateComparison() {
        const selectedIds = Array.from(productDropdowns).map(dropdown => Number(dropdown.value));
        const productsToCompare = allProducts.filter(p => selectedIds.includes(p.id));

        // Clear existing comparison results
        comparisonTableBody.innerHTML = '';

        // Show message if not enough products
        if (productsToCompare.length < 2) {
            comparisonTableBody.innerHTML = `
                <tr>
                    <td colspan="3" style="text-align: center; padding: 2rem;">
                        Please select at least 2 products to compare
                    </td>
                </tr>
            `;
            return;
        }

        // Add price row
        const priceRow = document.createElement('tr');
        priceRow.innerHTML = `
            <td>Price</td>
            ${productsToCompare.map(p => `<td>₹${p.price.toLocaleString()}</td>`).join('')}
        `;
        comparisonTableBody.appendChild(priceRow);

        // Get all unique features from all products
        const allFeatures = new Set();
        productsToCompare.forEach(p => {
            Object.keys(p.features).forEach(f => allFeatures.add(f));
        });

        // Add feature rows
        allFeatures.forEach(feature => {
            const row = document.createElement('tr');
            row.innerHTML = `  
                <td>${feature}</td>
                ${productsToCompare.map(p => `<td>${p.features[feature] || '-'}</td>`).join('')}
            `;
            comparisonTableBody.appendChild(row);
        });

        // Add last row with details and view details buttons
        const detailsRow = document.createElement('tr');
        detailsRow.innerHTML = `
            <td>Details</td>
            <td><a href="tractors.html" style="padding: 0.5rem 1rem; background-color: #4CAF50; color: white; text-decoration: none; border-radius: 4px;">View Details</a></td>
            <td><a href="tractors.html" style="padding: 0.5rem 1rem; background-color: #4CAF50; color: white; text-decoration: none; border-radius: 4px;">View Details</a></td>
        `;
        comparisonTableBody.appendChild(detailsRow);
    }
});
