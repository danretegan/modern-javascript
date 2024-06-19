//! Sets:

const namesArray = ['ryu', 'chun', 'ryu', 'shaun'];
console.log(namesArray);

console.log('Sets:');
// const namesSet = new Set(['ryu', 'chun', 'ryu', 'shaun']);
const namesSet = new Set(namesArray);
console.log(namesSet);

const uniqueNames = [...namesSet];
console.log(uniqueNames);

//! acelasi lucru scris intr-o singura linie:
const uniqueNames2 = [...new Set(namesArray)];
console.log(uniqueNames2);

console.log('=================================');
console.log('The methods of the Set:');

const ages = new Set();

ages.add(20);
ages.add(25).add(30);
ages.add(25);
console.log(ages);
console.log('The size of the Set is =', ages.size);

ages.delete(25);

console.log(ages);
console.log('Now the size of the Set is =', ages.size);

console.log('The Set has the value 30?', ages.has(30));
console.log('The Set has the value 25?', ages.has(25));

ages.clear();
console.log(ages);

const ninjas = new Set([
  { name: 'shaun', age: 30 },
  { name: 'crystal', age: 29 },
  { name: 'chun-li', age: 32 },
]);

ninjas.forEach(elem => {
  console.log(elem.name, elem.age);
});
