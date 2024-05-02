const article = document.querySelector('article');

//! children:
console.log(article);
console.log(article.children);
// Avem HTMLCollection, dar in HTMLCollection nu putem folosi metoda forEach.

// Folosim Array.from(article.children) si transformam HTMLCollection intr-un array. Acum putem folosi forEeach!
console.log(Array.from(article.children));

//! Acum putem folosi metoda forEach:
Array.from(article.children).forEach(elementCopil => {
  elementCopil.classList.add('new-class');
  console.log('children:', elementCopil);
});

console.log('===============');

//! parentElement:
const title = document.querySelector('h2');
console.log('parent Element:', title.parentElement);
console.log('parent parent Element:', title.parentElement.parentElement);

console.log('===============');

//! nextElementSibling:
console.log('next Element Sibling:', title.nextElementSibling);
console.log('previous Element Sibling:', title.previousElementSibling);

console.log('===============');

//! chaining:
console.log('chaining:', title.nextElementSibling.parentElement.children);
