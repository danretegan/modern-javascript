//! Symbols:

const symbolOne = Symbol('a generic name');
const symbolTwo = Symbol('a generic name');

console.log(symbolOne, typeof symbolOne);
console.log(symbolTwo, typeof symbolTwo);

console.log(symbolOne === symbolTwo);
console.log(symbolOne == symbolTwo);

const ninja = {};

ninja.age = 30;
//* proprietatea belt nu poate fi decat o singura data:
ninja['belt'] = 'orange'; // Adaugă proprietatea 'belt' cu valoarea 'orange'
ninja['belt'] = 'black'; // Suprascrie proprietatea 'belt' cu valoarea 'black'

//* folosind ca proprietate symbol, ele fiind unice, nu vor fi suprascrise:
ninja[symbolOne] = 'ryu'; // Adaugă o proprietate cu cheia symbolOne și valoarea 'ryu'
ninja[symbolTwo] = 'shaun'; // Adaugă o altă proprietate cu cheia symbolTwo și valoarea 'shaun'

console.log(ninja);
