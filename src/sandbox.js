const getTodos = callback => {
  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);
      console.log(request.responseText);
      console.log(data);
      callback(undefined, data);
    } else if (request.readyState === 4) {
      callback('Could not fetch data!', undefined);
    }
  });

  request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
  request.send();
};

getTodos((err, data) => {
  console.warn('callback fired!');

  if (err) {
    console.log('error:', err);
  } else {
    console.log('data:', data);
  }
});
