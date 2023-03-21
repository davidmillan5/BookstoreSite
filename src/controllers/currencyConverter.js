'use strict';

const pesosConverter = document.getElementById('pesosConverter');

const price_id = document.getElementById('price');

const valueInCOP = document.getElementById('valueInCOP');

const pesosConverterFunction = (price_id) => {
  const floatPrice = parseFloat(price_id);
  const pesosValue = floatPrice * 4500;
  console.log(pesosValue);
};

pesosConverter.addEventListener('click', pesosConverterFunction(price_id));

console.log(pesosConverterFunction(price_id));
