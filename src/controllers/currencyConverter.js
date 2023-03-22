'use strict';

const pesosConverter = document.getElementById('pesosConverter');

const price_id = document.getElementById('price');

const valueInCOP = document.getElementById('valueInCOP');

// const quantity = document.getElementById('productQuantity').value;

const testBtn = document.getElementById('testBtn');

const exchangeRate = 4500;

let counter = 0;

const pressBtn = () => {
  return counter++;
};

testBtn.addEventListener('click', (event) => {
  testBtn.innerText = pressBtn();
});

const pesosConverterFunction = (price_id, counter) => {
  const floatPrice = parseFloat(price_id.textContent);
  //const floatQuantity = parseFloat(quantity);
  const pesosValue = floatPrice * exchangeRate * counter;
  return `$ ${pesosValue}`;
};

console.log(pesosConverterFunction(price_id, counter));

pesosConverter.addEventListener('click', (event) => {
  valueInCOP.innerText = pesosConverterFunction(price_id, counter);
});

//console.log(pressBtn());

// export * from 'currencyConverter';
