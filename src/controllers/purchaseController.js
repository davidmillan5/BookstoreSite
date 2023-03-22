'use strict';

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

const pesosConverter = document.getElementById('pesosConverter');

const price_id = document.getElementById('price');

const valueInCOP = document.getElementById('valueInCOP');

// const quantity = document.getElementById('productQuantity').value;

const testBtn = document.getElementById('testBtn');

const minusBtn = document.getElementById('minusBtn');

const plusBtn = document.getElementById('plusBtn');

const exchangeRate = 4500;

const plusBtnFc = () => {
  return counter++;
};

const minusBtnFc = () => {
  return counter--;
};

plusBtn.addEventListener('click', (event) => {
  if (counter >= 0) {
    testBtn.innerText = plusBtnFc();
  } else {
    Swal.fire('Something Wrong Happened Try To refresh the Page');
  }
});

minusBtn.addEventListener('click', (event) => {
  if (counter > 0) {
    testBtn.innerText = minusBtnFc();
  } else {
    Swal.fire('Something Wrong Happened Try To refresh the Page');
  }
});

let counter = 0;

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
    pill.textContent = cart.length;
    localStorage.setItem('cart', JSON.stringify(cart));
  } else {
    Swal.fire('Something Wrong Happened Try To refresh the Page');
  }
});

let btnClearCart = document.getElementById('btnClearCart');
btnClearCart.addEventListener('click', () => {
  cart.pop();
  pill.textContent = cart.length;
  localStorage.removeItem('cart', JSON.stringify(cart));
});
