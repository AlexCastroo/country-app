import Product from "./models/Product.js";

document.addEventListener('DOMContentLoaded', function() {
const data = {
    "huerto": {
      "id": 1,
      "nombre": "Huerto El Abuelo",
      "productos": [
        {
          "id": 11,
          "nombre": "Tomates",
          "categoria": "Verdura",
          "temporada": "Verano",
          "precio": 2.50,
          "unidad": "kg",
          "disponibilidad": 10,
          "imagen": "https://www.pexels.com/es-es/buscar/tomates/"
        },
        {
          "id": 12,
          "nombre": "Lechugas",
          "categoria": "Verdura",
          "temporada": "Todo el año",
          "precio": 1.50,
          "unidad": "unidad",
          "disponibilidad": 15,
          "imagen": "https://www.pexels.com/photo/bottom-view-of-green-leaved-tree-during-daytime-91153/"
        },
        {
          "id": 13,
          "nombre": "Pimientos",
          "categoria": "Verdura",
          "temporada": "Verano",
          "precio": 2.00,
          "unidad": "kg",
          "disponibilidad": 8,
          "imagen": "https://www.pexels.com/es-es/buscar/pimiento/"
        },
        {
          "id": 14,
          "nombre": "Manzanas",
          "categoria": "Fruta",
          "temporada": "Otoño",
          "precio": 3.00,
          "unidad": "kg",
          "disponibilidad": 20,
          "imagen": "https://www.pexels.com/es-es/buscar/manzana/"
        },
        {
          "id": 15,
          "nombre": "Peras",
          "categoria": "Fruta",
          "temporada": "Otoño",
          "precio": 2.50,
          "unidad": "kg",
          "disponibilidad": 15,
          "imagen": "https://www.pexels.com/es-es/buscar/pera/"
        },
        {
          "id": 16,
          "nombre": "Uvas",
          "categoria": "Fruta",
          "temporada": "Verano",
          "precio": 4.00,
          "unidad": "kg",
          "disponibilidad": 12,
          "imagen": "https://www.pexels.com/es-es/buscar/uvas/"
        },
        {
          "id": 17,
          "nombre": "Cebollas",
          "categoria": "Verdura",
          "temporada": "Todo el año",
          "precio": 1.00,
          "unidad": "kg",
          "disponibilidad": 25,
          "imagen": "https://www.pexels.com/es-es/buscar/cebolla/"
        },
        {
          "id": 18,
          "nombre": "Patatas",
          "categoria": "Hortaliza",
          "temporada": "Otoño",
          "precio": 1.50,
          "unidad": "kg",
          "disponibilidad": 30,
          "imagen": "https://www.pexels.com/es-es/buscar/patata/"
        },
        {
          "id": 19,
          "nombre": "Calabazas",
          "categoria": "Hortaliza",
          "temporada": "Otoño",
          "precio": 2.00,
          "unidad": "unidad",
          "disponibilidad": 10,
          "imagen": "https://www.pexels.com/es-es/buscar/calabaza/"
        },
        {
          "id": 20,
          "nombre": "Berenjenas",
          "categoria": "Verdura",
          "temporada": "Verano",
          "precio": 2.50,
          "unidad": "kg",
          "disponibilidad": 15,
          "imagen": "https://www.pexels.com/es-es/buscar/berenjena/"
        }
    ]}
}
 
const cart = {
    "productos": []
}   

   

const tbody = document.querySelector('#tbody');
const products = data.huerto.productos;
 
const tbody_cart = document.querySelector('#tbody_cart');
const cart_added = cart.productos;

tbody.addEventListener('click', handleEditClick);
 
for (let i = 0; i < products.length; i++) 
{
  const product = new Product(products[i].id, products[i].nombre, products[i].precio, products[i].description, products[i].categoria, products[i].temporada, products[i].disponibilidad, products[i].imagen,);  
  
  const row = `<tr class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
    <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
      ${product.name} 
    </th>
    <td class="px-6 py-4">${product.category}</td>
    <td class="px-6 py-4">${product.station}</td>
    <td class="px-6 py-4">${product.price}</td> 
    <td id="stock_` + i + `" class="px-6 py-4">${product.stock}</td> 
    <td class="px-6 py-4 text-right">

    <button 
      name="añadir" 
      id="edit-button-${i}" 
      type="button" 
      class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
      Añadir
    </button>

    <button 
      name="quitar" 
      id="edit-button-${i}" 
      type="button" 
      class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
      Quitar
    </button>
    </td>
  </tr>`;

  
  tbody.innerHTML += row;
  //console.log(row); 
}

function handleEditClick(event) 
{
  const button = event.target;
  const productId = parseInt(button.id.slice(12)); // Extrae el índice del producto del ID del botón
  const product = products[productId]; // Obtiene el producto correspondiente al índice
  const disponibilidad = product.disponibilidad; // Obtiene el valor de disponibilidad
  const elemento = document.getElementById(`stock_${productId}`);
  console.log(elemento); 
  
  switch (button.name) {
    case 'añadir':
      let nueva_disponibilidad = disponibilidad + 1;
      console.log('¡Botón de añadir presionado para el producto:', product.nombre);
      console.log('Disponibilidad:', nueva_disponibilidad);
      product.disponibilidad = nueva_disponibilidad; 
      elemento.innerHTML = product.disponibilidad;
      addToCart(product);
      break;  
        
    case 'quitar':
      let restar_disponibilidad = disponibilidad - 1;
      console.log('¡Botón de quitar presionado para el producto:', product.nombre);
      console.log('Disponibilidad:', product.disponibilidad);
      product.disponibilidad = restar_disponibilidad;
      elemento.innerHTML = product.disponibilidad
    break; 

    default:
      break;
  }

}

function addToCart(producto) 
{
  // Verificar si el producto ya está en el carrito
  const index = cart.productos.findIndex(p => p.nombre === producto.nombre);

  if (index !== -1) {
    cart.productos[index].disponibilidad += 1;
    document.getElementById(`disponibilidad_${index}`).innerText = cart.productos[index].disponibilidad;
  } else {
    cart.productos.push(producto);
    const row = `<tr class="bg-gray-50 border-b dark:bg-gray-800 dark:border-gray-700">
      <td class="px-6 py-4">${producto.nombre}</td> 
      <td class="px-6 py-4">${producto.categoria}</td>
      <td class="px-6 py-4">${producto.precio}</td> 
      <td id="disponibilidad_${cart.productos.length - 1}" class="px-6 py-4">${producto.disponibilidad}</td>
    </tr>`;
  
    tbody_cart.innerHTML += row;
  }
}

});