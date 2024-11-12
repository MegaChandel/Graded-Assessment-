//Problem:You are tasked with implementing a product management system. The system will useJSON data for storing information about products.
//Each product has the followingproperties:• id: Unique identifier for the product.• name: Name of the product.• category: Category of the 
//product.• price: Price of the product.• available: Boolean indicating if the product is in stock.The tasks below involve reading JSON data,
//adding new products, updating productinformation, and filtering products based on certain conditions.

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
function parseproductdata(data) {
    return data;
}
const products = parseproductdata(productData);
function addproduct(products, product) {
    const updatedproducts = [...products, product];
    return updatedproducts;
}
const newproduct = {
    id: 4,
    name: "Six of Crows",
    category: "Books",
    price: 19.5,
    available: true
};
const updatedproducts = addProduct(products, newProduct);
function updateproductprice(products, productId, newPrice) {
    const updatedlist = products.map((product) => {
        if (product.id === productId) {
            return { ...product, price: newprice };
        }
        return product; 
    });
    return updatedlist;
}
const updatedproductswithPrice = updateproductprice(updatedproducts, 2, 34.9);
function filteravailableproducts(products) {
    const available = products.filter((product) => product.available);
    return available;
}
const availableproducts = filteravailableproducts(updatedproductswithprice);
function filterproductsBycategory(products, category) {
    const filtered = products.filter((product) => product.category === category);
    return filtered;
}
const electronicsproducts = filterproductsBycategory(updatedproductswithprice, "Electronics");
console.log("Original Products:", products);
console.log("All Products (after adding new product):", updatedProducts);
console.log("Products after updating price (id = 2):", updatedProductsWithPrice);
console.log("Available Products:", availableProducts);
console.log("Electronics Products:", electronicsProducts);
