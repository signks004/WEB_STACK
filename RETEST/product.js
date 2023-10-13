const products = [
    {
        id: 1,
        name: 'Cat Bed',
        description: 'A cozy bed for your furry friend.',
        price: 25.99,
        imageUrl: 'cat-bed.jpg',
    },
    {
        id: 2,
        name: 'Cat Toys Set',
        description: 'A set of fun toys to keep your cat entertained.',
        price: 12.99,
        imageUrl: 'cat-toys.jpg',
    },
    {
        id: 3,
        name: 'Cat Food',
        description: 'Nutritious cat food for a healthy diet.',
        price: 15.49,
        imageUrl: 'cat-food.jpg',
    },
    {
        id: 4,
        name: 'Cat Scratching Post',
        description: 'A scratching post to keep your cats claws healthy.',
        price: 19.99,
        imageUrl: 'cat-scratcher.jpg',
    },
    {
        id: 5,
        name: 'Cat Litter Box',
        description: 'A litter box for your cats convenience.',
        price: 22.99,
        imageUrl: 'cat-litter-box.jpg',
    },
    {
        id: 6,
        name: 'Cat Collar with Bell',
        description: 'A stylish collar for your feline friend.',
        price: 8.99,
        imageUrl: 'cat-collar.jpg',
    },
    {
        id: 7,
        name: 'Cat Grooming Kit',
        description: 'Grooming tools to keep your cat looking its best.',
        price: 14.99,
        imageUrl: 'cat-grooming-kit.jpg',
    },
    {
        id: 8,
        name: 'Cat Carrier Bag',
        description: 'A comfortable carrier bag for trips to the vet.',
        price: 28.99,
        imageUrl: 'cat-carrier.jpg',
    },
    {
        id: 9,
        name: 'Cat Water Fountain',
        description: 'A water fountain to keep your cat hydrated.',
        price: 19.49,
        imageUrl: 'cat-water-fountain.jpg',
    },
    {
        id: 10,
        name: 'Cat Tower with Scratching Posts',
        description: 'A multi-level cat tower for play and rest.',
        price: 59.99,
        imageUrl: 'cat-tower.jpg',
    },
    // Add more product objects as needed.
];

function displayProducts() {
    const productsSection = document.getElementById('products');

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');
        productDiv.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>${product.description}</p>
            <p>Price: $${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsSection.appendChild(productDiv);
    });
}

displayProducts();
