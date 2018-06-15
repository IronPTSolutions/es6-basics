const PI = 3.1416;
const TAX = 0.21;

function Product(name, price) {
    this.name = name;
    this.price = price;
}

Product.prototype.getFinalPrice = function() {
    const taxedPrice = this.price + (this.price *  TAX);
    return Number(taxedPrice.toFixed(2));
}

const products = [
    new Product('Mac', 1000),
    new Product('Pencil', 0.4),
    new Product('Orange', 2),
    new Product('RPi3', 34)
];

for (let product of products) {
    console.log(`${product.name}: ${product.getFinalPrice()}`);
}