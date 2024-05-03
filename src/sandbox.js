const copy = document.querySelector('.copy-me');
copy.addEventListener('copy', () => {
  console.log('© The document is under copyright!');
});

const box = document.querySelector('.box');
box.addEventListener('mousemove', event => {
  // console.log('mouse move!');
  // console.log(event);
  // console.log(event.offsetX, event.offsetY);
  box.textContent = `X pos: ${event.offsetX}, Y pos: ${event.offsetY}`;
});

document.addEventListener('wheel', evt => {
  console.log(evt.pageX, evt.pageY);
});
