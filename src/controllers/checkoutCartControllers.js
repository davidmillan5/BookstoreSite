'use strict';

let infoProduct = JSON.parse(localStorage.getItem('product'));
console.log(infoProduct);

// let pic = document.getElementById('picture');
// pic.src = infoProduct.cover;

// let title = document.getElementById('title');
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
  if (counter > 0) {
    cart.push(infoProduct);
    pill.textContent = counter;
    localStorage.setItem('cart', JSON.stringify(cart));
  }
});

let btnClearCart = document.getElementById('btnClearCart');
btnClearCart.addEventListener('click', () => {
  cart.pop();
  pill.textContent = cart.length;
  localStorage.removeItem('cart', JSON.stringify(cart));
});
