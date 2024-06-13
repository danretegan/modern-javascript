//! store data in localStorage:
localStorage.setItem('name', 'Mario');
localStorage.setItem('age', 50);

//! get data from localStorage:
let nume = localStorage.getItem('name');
let varsta = localStorage.getItem('age');

console.log(nume, varsta);

//! updating data from localStorage:
//* varianta 1:
localStorage.setItem('name', 'Luigi');

//* varianta 2 (dot notation):
localStorage.age = 40;

nume = localStorage.getItem('name');
varsta = localStorage.getItem('age');

console.log(nume, varsta);
