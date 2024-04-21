//! object literals

let user = {
  name: 'Crystal',
  age: 30,
  email: 'crystal@thenetninja.co.uk',
  location: 'Berlin',
  blogs: ['why mac & cheese rules', '10 things to make with marmite'],
  login() {
    console.log('the user logged in');
  },
  logout() {
    console.log('the user logged out');
  },
  // logBlogs: () => {
  logBlogs() {
    console.log(this);
    console.log(this.blogs);
    console.log(`${this.name} has written the following blogs:`);
    this.blogs.forEach(element => {
      console.info('-', element);
    });
  },
};

// user.login();
// user.logout();
user.logBlogs();
console.log(this);
