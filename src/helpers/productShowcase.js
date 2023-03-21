'use strict';

export function productShowcase(products) {
  products.forEach(function (product) {
    let column = document.createElement('div');
    column.classList.add('col');

    let card = document.createElement('div');
    card.classList.add('card', 'h-100', 'shadow');

    let image = document.createElement('img');
    image.classList.add('img-fluid', 'w-100');
    image.src = product.cover[0];

    let title = document.createElement('h3');
    title.classList.add('text-center');
    title.textContent = product.title;

    let price = document.createElement('h5');
    price.classList.add('text-center', 'text-success', 'fw-bold');
    price.textContent = 'USD ' + product.price;

    let description = document.createElement('p');
    description.classList.add('text-center', 'fw-bold', 'd-none');
    description.textContent = product.description;

    card.addEventListener('mouseover', function () {
      image.src = product.cover[1];
    });

    card.addEventListener('mouseleave', function () {
      image.src = product.cover[0];
    });

    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(price);
    card.appendChild(description);
    column.appendChild(card);
    booksrow.appendChild(column);
  });
}
