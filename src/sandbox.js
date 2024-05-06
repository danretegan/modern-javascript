const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
  if (request.readyState === 4 && request.status === 200) {
    console.info('request:', request);
    console.log('request.responseText:', request.responseText);
  } else if (request.readyState === 4) {
    console.error('Could not fetch the data!');
  }
});

request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
request.send();
