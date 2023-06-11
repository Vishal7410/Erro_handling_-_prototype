// 10. Filter by Category.

function filterProductsByCategory(products){
    return function (category){
        return products.filter(product => product.category === category);

    }
}

var product = [
    { name: "Shirt", category: "Clothing" },
    { name: "Pants", category: "Clothing" },
    { name: "Hat", category: "Accessories" },
    { name: "Sunglasses", category: "Accessories" },
];
var ClothingProducts = filterProductsByCategory(product)("Accessories");

console.log(ClothingProducts);
