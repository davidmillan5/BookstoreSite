'use strict';
import { products } from '../helpers/dataBase.js';
import { productShowcase } from '../helpers/productShowcase.js';

//llamando a la fila
let row = document.getElementById('booksrow');

//Pintar los productos de la tienda
productShowcase(products);

//Escuchando clic en la fila contenedora de productos
row.addEventListener('click', function (event) {
  let selectionatedData = {};
  let card = event.target.parentElement;

  selectionatedData.cover = card.querySelector('img').src;
  selectionatedData.title = card.querySelector('h3').textContent;
  selectionatedData.price = card.querySelector('h5').textContent;

  //usaremos la memoria del pc para guardar esta info
  localStorage.setItem('product', JSON.stringify(selectionatedData));

  window.location.href = './src/views/productinfo.html';
});
