//TODO get element by id:

const title = document.getElementById('page-title');
console.log(title);
console.log('=====================');

//TODO get element`s!` by class name (HTMLCollection):

const errors = document.getElementsByClassName('error');
console.log(errors);
console.log(errors[0]);
console.log(errors[1]);
//! Atentie: metoda forEach NU functioneaza pe HTMLCollection!
console.log('=====================');

//TODO get element`s!` by their tag name (HTMLCollection):

const paragraphs = document.getElementsByTagName('p');
console.log(paragraphs);
console.log(paragraphs[0]);
console.log(paragraphs[1]);
console.log(paragraphs[2]);
console.log('=====================');

//TODO Rezumat:
console.log('HTMLCollection methods: .item() .namedItem()');
console.log(
  'Node List methods: .item() .entries() .forEach() .keys() .values()'
);

/**
HTMLCollection methods:
.item()
.namedItem()

Node List methods:
.item()
.entries()
.forEach()
.keys()
.values() 
*/
