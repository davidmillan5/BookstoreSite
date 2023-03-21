'use strict';

const pesosConverter = document.getElementById('pesosConverter');

const price_id = document.getElementById('price');

const valueInCOP = document.getElementById('valueInCOP');

const quantity = document.getElementById('quantity');

const exchangeRate = 4500;

const pesosConverterFunction = (price_id) => {
  const floatPrice = parseFloat(price_id.textContent);
  const floatQuantity = parseFloat(quantity.textContent);
  const pesosValue = floatPrice * exchangeRate;
  return `$ ${pesosValue}`;
};

valueInCOP.innerText = pesosConverterFunction(price_id);
