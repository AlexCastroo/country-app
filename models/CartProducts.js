import Product from "./Product.js";

export default class CartProducts {
    constructor(products = [], quantity = 0) {
        this.products = products;
        this.quantity = quantity;
    }

    setProducts(products) { 
        this.products = products; 
    }
    getProducts() { 
        return this.products; 
    }
    setQuantity(quantity) { 
        this.quantity = quantity; 
    }
    getQuantity() { 
        return this.quantity; 
    }

    addToCart(product) {
        var tbody_cart = document.querySelector('#tbody_cart');

        const index = this.products.findIndex(p => p.id === product.id);
        console.log(index);
        if (index !== -1)
        {
            this.products[index].quantity++;
            const elemento = document.getElementById(`uds_${product.id}`);
            elemento.innerHTML = product.quantity;
        } 
        else 
        {
            product.quantity = 1;
            this.products.push(product);

            const row = `<tr id="item_${product.id}" class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="px-6 py-4">${product.name}</td> 
                <td class="px-6 py-4">${product.category}</td>
                <td class="px-6 py-4">${product.station}</td>
                <td class="px-6 py-4">${product.price}</td> 
                <td id="disponibilidad_${this.products.length - 1}" class="px-6 py-4">${product.stock}</td>
                <td id="uds_${product.id}"class="px-6 py-4">${product.quantity}</td>
                <td class="px-6 py-4">${product.stock}</td> 
            </tr>`;

            tbody_cart.innerHTML += row;
        }
        // Increment products added quantity
        this.quantity++;
    }

    removeFromCart(productId) 
    {
        const index = this.products.findIndex(product => product.id === productId);

        if (index !== -1) {
            this.products[index].quantity--;
            this.quantity--;
            const uds = document.getElementById(`uds_${productId}`);

            if (this.products[index].quantity === 0)
            {
                this.products.splice(index, 1);
                const row = document.querySelector(`#item_${productId}`);
                row.remove();
            }
            else    
            {
                uds.innerHTML = this.products[index].quantity;
            }
        }
    }

    // AQUIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII VA BIEN ! mejor

    removeCart(CartProducts) 
    {
        this.products = CartProducts = [];
        var tbody_cart = document.querySelector('#tbody_cart');
        tbody_cart.innerHTML = '';
    }
}
