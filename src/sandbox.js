// Map Method:
const prices = [20, 10, 30, 25, 15, 40, 80, 5];

const salePrices = prices.map(pret => pret / 2);
console.log('salePrices (50% off):', salePrices);

console.log('===============================');

const products = [
  { name: 'gold star', price: 20 },
  { name: 'mushroom', price: 40 },
  { name: 'green shells', price: 30 },
  { name: 'banana skin', price: 10 },
  { name: 'red shells', price: 50 },
];

const saleProducts = products.map(element => {
  if (element.price > 30) {
    //TODO refacem elementul obiect cu pretul redus (nu modificam originalul!):
    return { name: element.name, price: element.price / 2 };
  }
  //TODO returnam elementul obiect nemodificat:
  return element;
});

console.log('some products on sale:', saleProducts);
