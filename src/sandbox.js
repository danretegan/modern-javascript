//! constructor functions:

function User(username, email) {
  this.username = username;
  this.email = email;
}

//! definim metoda direct pe prototype:
User.prototype.login = function () {
  console.log(`${this.username} has logged in.`);

  return this; //* allow method chaining!
};

const userOne = new User('danretegan', 'danretegan@yahoo.com');
const userTwo = new User('ion', 'ion@ion.com');

console.log(userOne, userTwo);
userOne.login();

console.log(User.prototype);
