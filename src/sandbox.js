//! rest parameter:
console.log('rest parameter:');

const double = (...nums) => {
  console.log(nums);
  //* do something
  return nums.map(num => num * 2);
};

const result = double(1, 2, 3, 4, 5, 9, 8, 7, 5, 6);
console.log(result);

console.log('=================================');

//! spread syntax (arrays):
console.log('spread syntax (arrays):');

const people = ['shaun', 'ryu', 'crystal'];
console.log(people);
console.log(...people);

const members = ['mario', 'chun', ...people];
console.log(members);

console.log('=================================');

//! spread syntax (objects):
console.log('spread syntax (objects):');

const person = { name: 'Dan', age: 50, job: 'developer' };
console.log('person =', person);

const personClone = { ...person, location: 'Bistrita' };
console.log('personClone =', personClone);
