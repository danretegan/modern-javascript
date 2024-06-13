const userOne = {
  username: 'Dan',
  email: 'danretegan@yahoo.com',
  login() {
    console.log('The user logged in.');
  },
  logout() {
    console.log('The user logged out.');
  },
};

console.log('username:', userOne.username, '/', 'email:', userOne.email);
userOne.login();
userOne.logout();

const userTwo = {
  username: 'Ion',
  email: 'ionretegan@yahoo.com',
  login() {
    console.log('The user logged in.');
  },
  logout() {
    console.log('The user logged out.');
  },
};

console.log('username:', userTwo.username, '/', 'email:', userTwo.email);
userTwo.login();
userTwo.logout();

const userThree = new User('test@test@yahoo.com', 'test');
