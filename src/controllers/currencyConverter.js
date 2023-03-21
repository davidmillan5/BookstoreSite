'use strict';

const pesosConverter = document.getElementById('pesosConverter');

const price_id = document.getElementById('price');

const valueInCOP = document.getElementById('valueInCOP');

const pesosConverterFunction = (price_id) => {
  const floatPrice = parseFloat(price_id.textContent);
  const pesosValue = floatPrice * 4500;
  return pesosValue;
};

valueInCOP.innerText = pesosConverterFunction(price_id);
