const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');

button.addEventListener('click', () => {
  popup.style.display = 'block';
});

close.addEventListener('click', () => {
  popup.style.display = 'none';
});

popup.addEventListener('click', e => {
  // Ne asiguram ca popup-ul se inchide DOAR daca se face click pe wrapper si nu pe popup:
  console.log(e.target);
  if (e.target.className === 'popup-wrapper') {
    popup.style.display = 'none';
  }
});
