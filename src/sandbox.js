const form = document.querySelector('.signup-form');
// const username = document.querySelector('#username');

form.addEventListener('submit', e => {
  e.preventDefault();
  // console.log(username.value);
  //TODO daca input-ul are id sau name putem folosi .notation si id /name:
  console.log(form.username.value);
});
