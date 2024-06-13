class User {
  constructor(username, ceva) {
    //! set up properties of the object:
    this.username = username;
    this.ceva = ceva;
  }
}

const userOne = new User('Dan', 'ceva');
const userTwo = new User('Ion', 'ceva');

console.log(userOne);
console.log(userTwo);

//* the "new" keyword:
//* 1. - it creates a new empty object {};
//* 2. - it binds the value of "this" to the empy object;
//* 3. - it calls the constructor function to "build" the object.
