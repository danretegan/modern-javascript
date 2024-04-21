//! Objects in Arrays:
var user={name:"Crystal",age:30,email:"crystal@thenetninja.co.uk",location:"Berlin",blogs:[{title:"why mac & cheese rules",likes:30},{title:"10 things to make with marmite",likes:50}],login:function(){},logout:function(){},logBlogs:function(){console.log(this),console.log(this.blogs),console.log("".concat(this.name," has written the following blogs:")),this.blogs.forEach((function(o){console.info("-",o.title,"/ likes:",o.likes)}))}};user.logBlogs();
//# sourceMappingURL=index.decb30e0.js.map
