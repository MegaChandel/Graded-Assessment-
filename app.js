// Graded Assessment: Working with JSON Data
// You are tasked with implementing a product management system. 
//The system will use JSON data for storing information about products. 

const productData = [
    {
        id: 1,
        name: "Smartphone",
        category: "Electronics",
        price: 10,
        available: true
    },
    {
        id: 2,
        name: "Ball",
        category: "Toys",
        price: 40,
        available: true
    },
    {
        id: 3,
        name: "Laptop",
        category: "Electronics",
        price: 100,
        available: false
    }
];

// read and Parse the JSON data
function parseProductData(data) {
    return data;
}

const products = parseProductData(productData);

// Add a new product
function addProduct(products, product) {
    return [...products, product];
}

const newProduct = {
    id: 4,
    name: "Six of Crows",
    category: "Books",
    price: 19.5,
    available: true
};

const updatedProducts = addProduct(products, newProduct);

// Update the price of a product
function updateProductPrice(products, productId, newPrice) {
    return products.map((product) =>
        product.id === productId ? { ...product, price: newPrice } : product
    );
}

const updatedProductsWithPrice = updateProductPrice(updatedProducts, 2, 34.9);

//Filter products based on availability
function filterAvailableProducts(products) {
    return products.filter((product) => product.available);
}

const availableProducts = filterAvailableProducts(updatedProductsWithPrice);

// Filter products by category
function filterProductsByCategory(products, category) {
    return products.filter((product) => product.category === category);
}

const electronicsProducts = filterProductsByCategory(updatedProductsWithPrice, "Electronics");

// results
console.log("Products:", products);
console.log("All Products ; along with new Product (4):", updatedProducts);
console.log("All Products ; along with updated Price of product id :2:", updatedProductsWithPrice);
console.log("Available Products:", availableProducts);
console.log("Electronics Products:", electronicsProducts);
