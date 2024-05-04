//! Sort Method:

// example 1 - reverse strings:
const names = ['mario', 'shaun', 'chun-li', 'yoshi', 'luigi'];
console.log('array-ul original, "names":', names);

const reverseArray = names.reverse();
console.log('.reverse() inverseaza ordinea in array:', reverseArray);
console.log('listam din nou array-ul "names":', names);
console.warn(
  'Dupa cum se vede mai sus, array-ul original a fost modificat! Deci nu are rost folosirea unei noi constante.'
);

// example 2 - sort strings:
names.sort();
console.log('Sortam array-ul "names.sort();":', names);
