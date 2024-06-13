//! store data in localStorage:
localStorage.setItem('name', 'Mario');
localStorage.setItem('age', 50);

//! get data from localStorage:
let nume = localStorage.getItem('name');
let varsta = localStorage.getItem('age');

console.log(nume, varsta);

//! deleting data from local storage:
// localStorage.removeItem('name');
localStorage.clear();

nume = localStorage.getItem('name');
varsta = localStorage.getItem('age');

console.log(nume, varsta);
