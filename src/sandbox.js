const getTodos = (resource, callback) => {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject('Error getting resource!');
      }
    });

    request.open('GET', resource);
    request.send();
  });
};

getTodos('./todos/luigi.json')
  .then(data => {
    console.log('promise resolved:', data);
  })
  .catch(err => {
    console.log('promise rejected:', err);
  });

//TODO Promise example:

// const getSomething = () => {
//   return new Promise((resolve, reject) => {
// fetch some data
// resolve('some data');
//     reject('some error');
//   });
// };

// getSomething().then(
//   data => {
//     console.log(data);
//   },
//   err => {
//     console.log(err);
//   }
// );

// getSomething()
//   .then(data => {
//     console.log(data);
//   })
//   .catch(err => {
//     console.log(err);
//   });
