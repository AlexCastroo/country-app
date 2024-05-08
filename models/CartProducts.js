import Product from "./Product";

export default class CartProducts 
{
    constructor(Product = [], quantity)
    {
        this.products = Product([]);
        this.quantity = quantity;
    }

    // Setters y getters
    setProduct(Product) { this.products = Product };
    getProduct() { return Product};

    setQuantity(quantity) { this.quantity = quantity};
    getQuantity() { return this.quantity};

    addToCart(Product)
    {
        if(this.products.include(Product) === true)
            {
                console.log('Está añadido -> Incrementar su unidad');
            }else{
                console.loh('No esta añadido -> AÑadir nueva instancia');
            }
    }
}