const button = document.querySelector('button');

button.addEventListener('click', () => {
  console.log('s-a dat click pe buton!');
});

// ===========================================

const items = document.querySelectorAll('li');

items.forEach(element => {
  element.addEventListener('click', event => {
    // console.log('item clicked');
    // console.log(event);
    console.log(event.target);
    // console.log(element);
    event.target.style.textDecoration = 'line-through';
  });
});
