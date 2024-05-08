import Product from "./Product";

export default class CartProducts 
{
    constructor()
    {
        this.products = new Product([]);
        this.quantity = quantity;
    }

    // Setters y getters
    setProduct(Product) { this.products = Product };
    getProduct() { return Product};

    setQuantity(quantity) { this.quantity = quantity};
    getQuantity() { return this.quantity};
}