'use strict';

const pesosConverter = document.getElementById('pesosConverter');

const price_id = document.getElementById('price');

const valueInCOP = document.getElementById('valueInCOP');

const quantity = document.getElementById('productQuantity').value;

const exchangeRate = 4500;
console.log(quantity);

const pesosConverterFunction = (price_id) => {
  const floatPrice = parseFloat(price_id.textContent);
  const floatQuantity = parseFloat(quantity);
  const pesosValue = floatPrice * exchangeRate * floatQuantity;
  return `$ ${pesosValue}`;
};

valueInCOP.innerText = pesosConverterFunction(price_id);
