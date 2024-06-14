class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
    this.score = 0;
  }
  login() {
    console.log(`${this.username} just logged in.`);
    return this;
  }
  logout() {
    console.log(`${this.username} logged out.`);
    return this;
  }
  incScore() {
    this.score += 1;
    console.log(`${this.username} has a score of ${this.score}`);
    return this;
  }
}

//* cream o noua clasa, "Admin", care adauga proprietati noi (extends /extinde) la proprietatile clasei "User" (inheritance /moşteneşte):
class Admin extends User {
  deleteUser(user) {
    users = users.filter(elem => {
      return elem.username !== user.username;
    });
  }
}

const userOne = new User('danretegan', 'danretegan@yahoo.com');
const userTwo = new User('ion', 'ion@ion.com');
const userThree = new Admin('admin', 'admin@admin.com');

console.log(userOne, userTwo, userThree);

let users = [userOne, userTwo, userThree];
console.log(users);

userThree.deleteUser(userTwo);
console.log(users);
