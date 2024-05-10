import Product from "./models/Product.js";
import CartProducts from "./models/CartProducts.js";
document.addEventListener('DOMContentLoaded', function() {

const data = {
    "huerto": {
      "id": 1,
      "nombre": "Huerto El Abuelo",
      "productos": [
        {
          "id": 11,
          "name": "Tomates",
          "price": 2.50,
          "description": "Descripcyion",
          "category": "Verdura",
          "station": "Verano",
          "stock": 10,
          "image": "https://www.pexels.com/es-es/buscar/tomates/"
        },
        {
          "id": 12,
          "name": "Lechugas",
          "price": 1.50,
          "description" : "Descryopnco",
          "category": "Verdura",
          "station": "Todo el año",
          "stock": 15,
          "image": "https://www.pexels.com/photo/bottom-view-of-green-leaved-tree-during-daytime-91153/"
        },
        {
          "id": 13,
          "name": "Pimientos",
          "price": 2.00,
          "description" : "Descryopnco",
          "category": "Verdura",
          "station": "Verano",
          "stock": 8,
          "image": "https://www.pexels.com/es-es/buscar/pimiento/"
        },
        {
          "id": 14,
          "name": "Manzanas",
          "price": 3.00,
          "description" : "Descryopnco",
          "category": "Fruta",
          "station": "Otoño",
          "stock": 20,
          "image": "https://www.pexels.com/es-es/buscar/manzana/"
        },
        {
          "id": 15,
          "name": "Peras",
          "price": 2.50,
          "description" : "Descryopnco",
          "category": "Fruta",
          "station": "Otoño",
          "stock": 15,
          "image": "https://www.pexels.com/es-es/buscar/pera/"
        },
        {
          "id": 16,
          "name": "Uvas",
          "price": 4.00,
          "description" : "Descryopnco",
          "category": "Fruta",
          "station": "Verano",
          "stock": 12,
          "image": "https://www.pexels.com/es-es/buscar/uvas/"
        },
        {
          "id": 17,
          "name": "Cebollas",
          "price": 1.00,
          "description" : "Descryopnco",
          "category": "Verdura",
          "station": "Todo el año",
          "stock": 25,
          "image": "https://www.pexels.com/es-es/buscar/cebolla/"
        },
        {
          "id": 18,
          "name": "Patatas",
          "price": 1.50,
          "description" : "Descryopnco",
          "category": "Hortaliza",
          "station": "Otoño",
          "stock": 30,
          "image": "https://www.pexels.com/es-es/buscar/patata/"
        },
        {
          "id": 19,
          "name": "Calabazas",
          "price": 2.00,
          "description" : "Descryopnco",
          "category": "Hortaliza",
          "station": "Otoño",
          "stock": 10,
          "image": "https://www.pexels.com/es-es/buscar/calabaza/"
        },
        {
          "id": 20,
          "name": "Berenjenas",
          "price": 2.50,
          "description" : "Descryopnco",
          "category": "Verdura",
          "station": "Verano",
          "stock": 15,
          "image": "https://www.pexels.com/es-es/buscar/berenjena/"
        }
    ]}
} 
 
const tbody = document.querySelector('#tbody');

tbody.addEventListener('click', handleEditClick);
const products = data.huerto.productos;
const productos = products.map(producto => new Product(
  producto.id,
  producto.name,
  producto.price,
  producto.description,
  producto.category,
  producto.station, 
  producto.stock,
  producto.image  
));

console.log(productos);
  
for (let i = 0; i < productos.length; i++) 
{
  const product = new Product(products[i].id, products[i].name, products[i].price, products[i].description, products[i].category, products[i].station, products[i].stock, products[i].image,);  
  
  const row = `<tr class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
      ${product.name} 
    </th>
    <td class="px-6 py-4">

    <button 
      name="add-item" 
      id="edit-button-${i}" 
      type="button" 
      class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
      Añadir
    </button>

    <button 
      name="remove-item" 
      id="edit-button-${i}" 
      type="button" 
      class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
      Quitar
    </button>
    </td>
    <td class="px-6 py-4">${product.category}</td>
    <td class="px-6 py-4">${product.station}</td>
    <td class="px-6 py-4">${product.price}</td> 
    <td id="stock_` + i + `" class="px-6 py-4">${product.stock}</td> 
    
  </tr>`;
  
  tbody.innerHTML += row;
}

  
// CART
let cart = new CartProducts();
console.log(cart); 


document.getElementById('remove_cart').addEventListener('click', function() {
  cart.removeCart(cart);
});



function handleEditClick(event) 
{
  const button = event.target;
  const productId = parseInt(button.id.slice(12));
  
  
  const product = productos[productId]; 
  const stock = product.stock; 
  const elemento = document.getElementById(`stock_${productId}`);
  
  switch (button.name) {
    case 'add-item':
      let increased_stock = stock - 1;
      product.stock = increased_stock; 
      elemento.innerHTML = product.stock;
      if(product.stock !== 0)
      {
        cart.addToCart(product);
      }
      else{
        document.getElementById(button.id).disabled = true;
      }
     
      console.log(cart); 
      break;  
        
    case 'remove-item':
      let decrease_stock = stock + 1;
      product.stock = decrease_stock;
      elemento.innerHTML = product.stock
      cart.removeFromCart(product.id);
      //cart.updateCartSubtotal();
      document.getElementById(button.id).disabled = false;
    break; 

    default:
      break;
  }

}


});