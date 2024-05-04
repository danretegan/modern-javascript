//! Sort Method:

//TODO example 1 - reverse strings:
const names = ['mario', 'shaun', 'chun-li', 'yoshi', 'luigi'];
console.log('array-ul original, "names":', names);

const reverseArray = names.reverse();
console.log('.reverse() inverseaza ordinea in array:', reverseArray);
console.log('listam din nou array-ul "names":', names);
console.warn(
  'Dupa cum se vede mai sus, array-ul original a fost modificat! Deci nu are rost folosirea unei noi constante.'
);

//TODO example 2 - sort strings:
names.sort();
console.log('Sortam array-ul "names.sort();":', names);

console.log('=================================');

//TODO example 3 - sorting numbers:
const scores = [10, 50, 20, 5, 35, 70, 45];

scores.sort((a, b) => a - b);
console.log('sortare crescatoare:', scores); // Afiseaza: [5, 10, 20, 35, 45, 50, 70]
0;
scores.sort((a, b) => b - a);
console.log('sortare descrescatoare:', scores); // Afiseaza: [70, 50, 45, 35, 20, 10, 5]
