import Product from "./Product.js";

export default class CartProducts {
    constructor(products = [], quantity = 0, sub_total) {
        this.products = products;
        this.quantity = quantity;
        this.sub_total = sub_total;
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
            this.products[index].total = this.products[index].quantity * this.products[index].price;
            const elemento = document.getElementById(`uds_${product.id}`);
            const total = document.getElementById(`total_${product.id}`);
            elemento.innerHTML = product.quantity;
            total.innerHTML = product.total;

            this.updateCartSubtotal();

        } 
        else 
        {
            product.quantity = 1;
            //this.products[index].total = this.products[index].quantity * this.products[index].price +`€`;
            this.products.push(product);

            const row = `<tr id="item_${product.id}" class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
                <td class="px-6 py-4">${product.name}</td> 
                <td class="px-6 py-4">${product.category}</td>
                <td class="px-6 py-4">${product.station}</td>
                <td class="px-6 py-4">${product.price}</td> 
                <td id="uds_${product.id}"class="px-6 py-4">${product.quantity}</td>
                <td id="total_${product.id}"class="px-6 py-4">${product.total = product.quantity * product.price}
            </td>
            </tr>`;
            this.updateCartSubtotal();
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
            this.products[index].total = this.products[index].quantity * this.products[index].price;
            this.products[index].total -= this.products[index].price;
            const uds = document.getElementById(`uds_${productId}`);
            //console.log(sub_total);
            if (this.products[index].quantity === 0)
            {
                this.products.splice(index, 1);
                const row = document.querySelector(`#item_${productId}`);
                row.remove();      
            }
            else    
            {   
                const sub_total = document.getElementById(`total_${productId}`);
                uds.innerHTML = this.products[index].quantity;
                sub_total.innerHTML = this.products[index].total;
                
            }

            
        }

        this.updateCartSubtotal();
    }

    // AHEAERWEDCWECWERV24RG ->

    removeCart(CartProducts) 
    {
        this.products = CartProducts = [];
        var tbody_cart = document.getElementById(`tbody_cart`);
        tbody_cart.innerHTML = '';
        const cart_total = document.getElementById(`total_cart`);
        cart_total.innerHTML = '';
    }

    updateCartSubtotal()
    {
        this.sub_total = 0;
        const cart_total = document.getElementById(`total_cart`);

        for(let i = 0 ; i < this.products.length ; i++)
        {
            this.sub_total += this.products[i].total;
            console.log(this.sub_total);
        }
        
        cart_total.innerHTML = this.sub_total+`€`;
    }
}
