const scores = [10, 30, 15, 25, 50, 40, 5];

const arrayFiltrat = scores.filter(elem => {
  return elem > 25;
});

console.log('arrayFiltrat:', arrayFiltrat);

const users = [
  { name: 'shaun', premium: true },
  { name: 'yoshi', premium: false },
  { name: 'mario', premium: false },
  { name: 'chun-li', premium: true },
];

const premiumUsers = users.filter(element => element.premium);

console.log('premiumUsers:', premiumUsers);
