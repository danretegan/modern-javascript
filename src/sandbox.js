// ! Async & Await:

const getTodos = async () => {
  const response = await fetch('./todos/luigi.json');
  console.log(response); //Response {type: 'basic', …}
  // Folosim metoda json() pentru a extrage datele:
  const data = await response.json();
  console.log(data);
  console.log('=====================');
  // Returnam datele extrase:
  return data;
};

const test = getTodos();
console.log('async returneaza intotdeauna o promisiune:', test); // Promise
console.log('=====================');

getTodos()
  .then(data => console.log('resolved:', data))
  .catch(err => console.log(err));

//* Codul este mult mai curat si mult mai simplu:

//*  const getTodos = async () => {
//*  const response = await fetch('./todos/luigi.json');
//*  const data = await response.json();
//*  return data;
//* };

//* getTodos()
//*  .then(data => console.log('resolved:', data))
//*  .catch(err => console.log(err));

// fetch('./todos/luigi.json')
//   .then(response => {
//     console.log('resolved:', response);
//     return response.json();
//   })
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log('rejected:', err);
//   });
