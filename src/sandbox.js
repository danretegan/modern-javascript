const ul = document.querySelector('ul');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  const li = document.createElement('li');
  li.textContent = 'something to do!';
  ul.prepend(li);
});

// const items = document.querySelectorAll('li');

// items.forEach(element => {
//   element.addEventListener('click', event => {
//     console.log('event in LI!');
//     event.stopPropagation();
//     event.target.remove();
//   });
// });

ul.addEventListener('click', e => {
  console.log('event in UL!');
  console.log(e.target);
  console.log(e);
  // target:li, tagName: "LI"
  if (e.target.tagName === 'LI') {
    e.target.remove();
  }
});
