

const cart = [];

function addToCart(product) {
    // Find the product by its ID from the products array.
    const selectedProduct = products.find(item => item.id === product);

    // Check if the product is already in the cart.
    const existingProduct = cart.find(item => item.id === selectedProduct.id);

    if (existingProduct) {
        // If the product is already in the cart, increase its quantity.
        existingProduct.quantity++;
    } else {
        // If it's not in the cart, add it with a quantity of 1.
        cart.push({ ...selectedProduct, quantity: 1 });
    }

    displayCart(); // Update the displayed cart.
}

function displayCart() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');

    // Clear the existing cart items.
    cartItems.innerHTML = '';

    // Display each item in the cart.
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;
        cartItems.appendChild(listItem);
    });

    // Calculate and display the total amount.
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    cartTotal.textContent = total.toFixed(2);
}
