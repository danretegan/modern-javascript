class User {
  constructor(username, email) {
    //* set up properties of the object:
    this.username = username;
    this.email = email;
    this.score = 0;
  }
  login() {
    console.log(`${this.username} just logged in.`);

    //* daca vrem sa inlantuim metodele (method chaining) trebuie sa returnam "this":
    return this;
  }
  logout() {
    console.log(`${this.username} logged out.`);

    return this;
  }
  incScore() {
    this.score = this.score + 1;

    console.log(`${this.username} has a score of ${this.score}`);

    return this;
  }
}

const userOne = new User('danretegan', 'danretegan@yahoo.com');
const userTwo = new User('ion', 'ion@ion.com');

console.log(userOne);
userOne.login();
userOne.incScore();
userOne.logout();

console.log('======================');

console.log(userTwo);
userTwo.login().incScore().incScore().logout();

//* the "new" keyword:
//* 1. - it creates a new empty object {};
//* 2. - it binds the value of "this" to the empy object;
//* 3. - it calls the constructor function to "build" the object.
