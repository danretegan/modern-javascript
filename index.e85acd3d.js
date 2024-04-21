//! object literals
var user={name:"Crystal",age:30,email:"crystal@thenetninja.co.uk",location:"Berlin",blogs:["why mac & cheese rules","10 things to make with marmite"],login:function(){console.log("the user logged in")},logout:function(){console.log("the user logged out")},logBlogs:function(){console.log(this),console.log(this.blogs),console.log("".concat(this.name," has written the following blogs:")),this.blogs.forEach((function(o){console.info("-",o)}))}};user.logBlogs(),console.log(this);
//# sourceMappingURL=index.e85acd3d.js.map
