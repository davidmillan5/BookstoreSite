'use strict';

const pesosConverter = document.getElementById('pesosConverter');

const price_id = document.getElementById('price');

const valueInCOP = document.getElementById('valueInCOP');

// const quantity = document.getElementById('productQuantity').value;

const testBtn = document.getElementById('testBtn');

const minusBtn = document.getElementById('minusBtn');

const plusBtn = document.getElementById('plusBtn');

const exchangeRate = 4500;

let counter = 0;

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

const pesosConverterFunction = (price_id, counter) => {
  if (counter > 0) {
    const floatPrice = parseFloat(price_id.textContent);
    //const floatQuantity = parseFloat(quantity);
    const pesosValue = floatPrice * exchangeRate * counter;
    return `$ ${pesosValue}`;
  } else if (counter < 0) {
    Swal.fire('Something Wrong Happened Try To refresh the Page');
  }
};

console.log(pesosConverterFunction(price_id, counter));

pesosConverter.addEventListener('click', (event) => {
  valueInCOP.innerText = pesosConverterFunction(price_id, counter);
});

//console.log(pressBtn());

// export * from 'currencyConverter';
