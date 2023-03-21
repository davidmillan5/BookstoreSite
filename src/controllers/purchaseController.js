'use strict';
//LLamo a la memoria para acceder a los datos guardados:
let infoProduct = JSON.parse(localStorage.getItem('product'));
console.log(infoProduct);

let pic = document.getElementById('picture');
pic.src = infoProduct.cover;

let title = document.getElementById('title');
title.textContent = infoProduct.title;

let description = document.getElementById('description');
description.textContent = infoProduct.description;

let price = document.getElementById('price');
price.textContent = infoProduct.price;

let cartInfo = JSON.parse(localStorage.getItem('cart'));

let cart = [];

let pill = document.getElementById('pill');

if (cartInfo != null) {
  cart = cartInfo;
  pill.textContent = cart.length;
} else {
  cart = [];
}

let btnAddProduct = document.getElementById('btnAddProduct');
btnAddProduct.addEventListener('click', () => {
  cart.push(infoProduct);
  pill.textContent = cart.length;
  localStorage.setItem('cart', JSON.stringify(cart));
});
