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

class Admin extends User {
  constructor(username, email, title) {
    super(username, email);
    this.title = title;
  }
  deleteUser(user) {
    users = users.filter(elem => {
      return elem.username !== user.username;
    });
  }
}

const userOne = new User('danretegan', 'danretegan@yahoo.com');
const userTwo = new User('ion', 'ion@ion.com');
const userThree = new Admin('admin', 'admin@admin.com', 'black-belt-ninja');

console.log(userThree);
