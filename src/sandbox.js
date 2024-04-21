//! 1) primitive values:
console.log('1) primitive values:');

let scoreOne = 50;
let scoreTwo = scoreOne;
console.log(`scoreOne = ${scoreOne}`, 'and', `scoreTwo = ${scoreTwo}`);

scoreOne = 100;
console.log(`scoreOne = ${scoreOne}`, 'and', `scoreTwo = ${scoreTwo}`);

console.warn(
  'Desi am modificat valoare lui scoreOne (scoreOne = 100), SI scoreTwo = scoreOne, totusi scoreTwo ramane = 50'
);

//! 2) reference values:
console.log('2) reference values:');

const userOne = { name: 'Dan', age: 38 };
const userTwo = userOne;

console.log('userOne:', userOne, 'userTwo:', userTwo);

userTwo.age = 35;
console.log('userOne:', userOne, 'userTwo:', userTwo);

console.warn(
  'Acum, daca modificam o valorea dintr-un obiect (userTwo.age = 35), modificarea se va vedea si in celalalt obiect.'
);

//!Concluzie:
console.log(
  'Valorile primitive sunt stocate direct în stivă (stack), fiecare având propria lor copie independentă, deci modificarea unei valori NU afecteaza cealalta copie. Pe de altă parte, valorile de referință, cum ar fi obiectele, sunt stocate în zona de memorie numita heap, iar variabilele conțin doar referințe către acele obiecte. Când se modifică un obiect prin una dintre referințe, modificarea este vizibilă și pentru celelalte referințe către acel obiect, deoarece toate aceste referințe indică aceeași locație în memorie.'
);
