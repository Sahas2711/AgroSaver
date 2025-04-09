// Get product IDs from URL
const urlParams = new URLSearchParams(window.location.search);
const productIds = urlParams.get('products')?.split(',').map(Number) || [];

// Get all products (would normally come from API)
const allProducts = [
    {
        id: 1,
        name: 'John Deere Tractor',
        price: 45000,
        features: {
            'Power': '60 HP',
            'Drive': '4WD',
            'Transmission': 'Hydrostatic'
        }
    },
    {
        id: 2,
        name: 'Round Hay Baler',
        price: 32000,
        features: {
            'Bale Size': '4x5',
            'Wrap Type': 'Net wrap',
            'PTO': '540 RPM'
        }
    },
    {
        id: 3,
        name: 'Grain Drill',
        price: 18500,
        features: {
            'Width': '15 ft',
            'Openers': 'Double disc',
            'Spacing': '7.5"'
        }
    },
    {
        id: 4,
        name: 'Sprayer',
        price: 28000,
        features: {
            'Tank Capacity': '500 gal',
            'Boom Length': '90 ft',
            'GPS': 'Ready'
        }
    }
];

// Filter products to compare
const productsToCompare = allProducts.filter(p => productIds.includes(p.id));

// DOM elements
const comparisonTable = document.getElementById('comparison-data');

// Display comparison
function displayComparison() {
    // Clear existing rows
    comparisonTable.innerHTML = '';

    // Show message if not enough products
    if (productsToCompare.length < 2) {
        comparisonTable.innerHTML = `
            <tr>
                <td colspan="3" style="text-align: center; padding: 2rem;">
                    Please select at least 2 products to compare
                </td>
            </tr>
        `;
        return;
    }

    // Add header row with product names
    const headerRow = document.createElement('tr');
    headerRow.innerHTML = `
        <th>Feature</th>
        ${productsToCompare.map(p => `<th>${p.name}</th>`).join('')}
    `;
    comparisonTable.appendChild(headerRow);

    // Add price row
    const priceRow = document.createElement('tr');
    priceRow.innerHTML = `
        <td>Price</td>
        ${productsToCompare.map(p => `<td>$${p.price.toLocaleString()}</td>`).join('')}
    `;
    comparisonTable.appendChild(priceRow);

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
        comparisonTable.appendChild(row);
    });

    // Add clear comparison button
    const clearRow = document.createElement('tr');
    clearRow.innerHTML = `
        <td colspan="${productsToCompare.length + 1}" style="text-align: center; padding: 1rem;">
            <button onclick="clearComparison()" style="padding: 0.5rem 1rem; background-color: #f44336; color: white; border: none; border-radius: 4px; cursor: pointer;">
                Clear Comparison
            </button>
        </td>
    `;
    comparisonTable.appendChild(clearRow);
}

function clearComparison() {
    localStorage.removeItem('compareProducts');
    window.location.href = 'compare.html';
}

// Initialize comparison page
document.addEventListener('DOMContentLoaded', displayComparison);
