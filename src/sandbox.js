//! Objects in Arrays:

// const blogs = [
//   {
//     title: "why mac & cheese rules",
//     likes: 30,
//   },
//   {
//     title: "10 things to make with marmite",
//     likes: 50,
//   },
// ];

// console.log(blogs);

let user = {
  name: 'Crystal',
  age: 30,
  email: 'crystal@thenetninja.co.uk',
  location: 'Berlin',
  blogs: [
    {
      title: 'why mac & cheese rules',
      likes: 30,
    },
    {
      title: '10 things to make with marmite',
      likes: 50,
    },
  ],
  login() {
    // console.log("the user logged in");
  },
  logout() {
    // console.log("the user logged out");
  },
  // logBlogs: () => {
  logBlogs() {
    console.log(this);
    console.log(this.blogs);
    console.log(`${this.name} has written the following blogs:`);
    this.blogs.forEach(element => {
      console.info('-', element.title, '/ likes:', element.likes);
    });
  },
};

// user.login();
// user.logout();
user.logBlogs();
// console.log(this);
