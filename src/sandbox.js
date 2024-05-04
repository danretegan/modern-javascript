const products = [
  { name: 'gold star', price: 30 },
  { name: 'green shell', price: 10 },
  { name: 'red shell', price: 40 },
  { name: 'banana skin', price: 5 },
  { name: 'mushroom', price: 50 },
];

// const filteredProducts = products.filter(element => element.price > 20);
// console.log(filteredProducts);

// const promos = filteredProducts.map(element => {
//   return `PROMO: the ${element.name} is ${element.price / 2} $`;
// });

const promos = products
  .filter(element => element.price > 20)
  .map(element => `PROMO: the ${element.name} is ${element.price / 2} $`);

console.log(promos);
