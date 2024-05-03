const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z]{6,12}$/;

//TODO validation:
form.addEventListener('submit', e => {
  e.preventDefault();

  const username = form.username.value;

  if (usernamePattern.test(username)) {
    feedback.textContent = 'that username is valid!';
  } else {
    feedback.textContent =
      'username must contain only letters & be between 6 & 12 characters';
  }
});

//TODO live feedback:
form.username.addEventListener('keyup', e => {
  // console.log(e.target.value, form.username.value);
  console.log(e);
  if (usernamePattern.test(e.target.value)) {
    // console.info('passed!');
    form.username.setAttribute('class', 'success');
  } else {
    // console.error('failed!');
    form.username.setAttribute('class', 'error');
  }
});
