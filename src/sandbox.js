//! Constructorul User:
function User(username, email) {
  this.username = username;
  this.email = email;
}

//! Definim metoda login pe prototipul User:
User.prototype.login = function () {
  console.log(`${this.username} has logged in.`);
  return this;
};

//! Constructorul Admin:
function Admin(username, email, title) {
  User.call(this, username, email); //* Apelăm constructorul User cu contextul this din Admin pentru a moșteni și seta proprietățile username și email.

  this.title = title; //*Adaugam proprietati noi numai pe Admin.
}

//* 1. Setăm prototipul Admin să fie un obiect creat din prototipul User pentru a moșteni metodele User:
Admin.prototype = Object.create(User.prototype);

//* 2. Adaugam metode noi pe prototipul Admin:
Admin.prototype.deleteUser = function () {
  // TODO delete a user.
};

const userOne = new User('danretegan', 'danretegan@yahoo.com');
const userTwo = new User('ion', 'ion@ion.com');
const userThree = new Admin('admin', 'admin@admin.com', 'black-belt-ninja');

console.log(userOne, userTwo, userThree);
userOne.login();

//* Vezi in consola unde este functia deleteUser si mostenirile din User via Object:
console.log(Admin.prototype);
