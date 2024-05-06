const getTodos = (resource, callback) => {
  const request = new XMLHttpRequest();

  request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status === 200) {
      const data = JSON.parse(request.responseText);
      callback(undefined, data);
    } else if (request.readyState === 4) {
      callback('Could not fetch data!', undefined);
    }
  });

  request.open('GET', resource);
  request.send();
};

//TODO Apelam getTodos spre resursa dorita:
getTodos('./todos/luigi.json', (err, data) => {
  console.log('./todos/luigi.json:', data);

  //TODO Apelam din nou getTodos spre alta resursa:
  getTodos('./todos/mario.json', (err, data) => {
    console.log('./todos/mario.json:', data);

    //TODO Apelam din nou getTodos spre alta resursa:
    getTodos('./todos/shaun.json', (err, data) => {
      console.log('./todos/shaun.json:', data);
    });
  });
});
