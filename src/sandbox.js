const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
  console.log('request:', request);
  console.warn('request.readyState:', request.readyState);
  if (request.readyState === 4) {
    console.log(
      'if (request.readyState = 4) {request.responseText}:',
      request.responseText
    );
  }
});

request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
request.send();
