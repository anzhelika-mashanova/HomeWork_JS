const items = [{
    title: 'IPhone 12',
    quantity: 2,
    price: 1000,
  },
  {
    title: 'Magic Mouse',
    quantity: 3,
    price: 100,
  },
  {
    title: 'MI Band 6',
    quantity: 4,
    price: 50,
  },
  {
    title: 'Monitor ASUS',
    quantity: 1,
    price: 700,
  },
  {
    title: 'USB Flash Drive',
    quantity: 5,
    price: 20,
  },
]

function totalAmout(products) {
  let sumOfOrder = 0;
  for (let i = 0; i < products.length; i++) {
    sumOfOrder += products[i].price * products[i].quantity;
  }
  console.log('Общая стоимость вашего заказа: ' + sumOfOrder + ' $');
}

function avaragePriceOfOneProduct(products) {
  let count = 0;
  let sumOfOrder = 0;
  for (let i = 0; i < products.length; i++) {
    sumOfOrder += products[i].price * products[i].quantity;
    count += products[i].quantity;
  }
  return sumOfOrder / count;
}

function printSorted(products) {
  products.sort((a, b) => a.price - b.price);
  return console.log(products);
}

totalAmout(items);
console.log(avaragePriceOfOneProduct(items));
printSorted(items);