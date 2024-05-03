const form = document.querySelector('.signup-form');
// const username = document.querySelector('#username');

form.addEventListener('submit', e => {
  e.preventDefault();
  // console.log(username.value);
  //TODO daca input-ul are id sau name putem folosi .notation si id /name:
  console.log(form.username.value);
});

//TODO testing RegEx:
const username = 'shaunp';
const pattern = /^[a-z]{6,}$/;

//TODO Metoda 1 test:
let result = pattern.test(username);

if (result) {
  console.log('Metoda 1 test: RegEx test pased! :)');
} else {
  console.log('Metoda 1 test: RegEx test failed! :(');
}

//TODO Metoda 2 search:
let result2 = username.search(pattern);
console.log('Metoda 2 search:', result2);
