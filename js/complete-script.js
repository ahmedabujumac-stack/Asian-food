// Shopping Cart Class for managing items
class ShoppingCart {
    constructor() {
        this.items = [];
    }

    addItem(product) {
        this.items.push(product);
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.id !== productId);
    }

    calculateTotal() {
        return this.items.reduce((total, item) => total + item.price, 0);
    }
}

// Product Class for products
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

// ProductsManager to handle product rendering and search
class ProductsManager {
    constructor(products) {
        this.products = products;
    }

    renderProducts() {
        const productContainer = document.getElementById('product-list');
        productContainer.innerHTML = '';
        this.products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.innerHTML = `<h3>${product.name}</h3><p>${product.price}</p>`;
            productElement.setAttribute('data-product-id', product.id);
            productContainer.appendChild(productElement);
        });
    }

    searchProducts(searchTerm) {
        return this.products.filter(product => product.name.includes(searchTerm));
    }
}

// UserProfile for user management
class UserProfile {
    constructor() {
        this.user = null;
    }

    login(username) {
        this.user = { username: username };
    }

    logout() {
        this.user = null;
    }
}

// AdminPanel for admin controls
class AdminPanel {
    constructor(productsManager) {
        this.productsManager = productsManager;
    }

    addProduct(product) {
        this.productsManager.products.push(product);
        this.productsManager.renderProducts();
    }

    removeProduct(productId) {
        this.productsManager.products = this.productsManager.products.filter(product => product.id !== productId);
        this.productsManager.renderProducts();
    }
}

// Checkout functionality
function checkout(shoppingCart) {
    const total = shoppingCart.calculateTotal();
    alert(`Total amount: ${total}`);
}
