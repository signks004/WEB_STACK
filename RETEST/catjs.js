const catApiUrl = 'https://api.thecatapi.com/v1/images/search?limit=10';
const productsSection = document.getElementById('products');

async function fetchCatImages() {
    try {
        const response = await fetch(catApiUrl);
        const catData = await response.json();

        catData.forEach(cat => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.innerHTML = `
                <img src="${cat.url}" alt="Cat Image">
                <p>Cat ID: ${cat.id}</p>
            `;
            productsSection.appendChild(productDiv);
        });
    } catch (error) {
        console.error('Error fetching cat images:', error);
    }
}



fetchCatImages();

