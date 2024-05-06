const getTodos = callback => {
  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status === 200) {
      callback(undefined, request.responseText);
    } else if (request.readyState === 4) {
      callback('Could not fetch data!', undefined);
    }
  });

  request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
  request.send();
};

//! Exemplificare cod asincron:
console.warn('Exemplificare cod asincron:');
console.log(1);
console.log(2);

getTodos((err, data) => {
  console.warn('callback fired!');

  if (err) {
    console.log('error:', err);
  } else {
    console.log('data:', data);
  }
});

console.log(3);
console.log(4);
