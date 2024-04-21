//! Math object:

console.log(Math);
console.log(Math.PI);

const random = Math.random();
console.log('random number:', random);

const random10 = random * 10;
console.log('random number * 10 =', random10);
console.log('round:', Math.round(random10));
console.log('floor:', Math.floor(random10));
console.log('ceil:', Math.ceil(random10));
console.log('trunc:', Math.trunc(random10));

console.log(
  'un numar intreg, aleator, intre 1 si 100:',
  Math.round(random * 100)
);
