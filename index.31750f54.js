//! rest parameter:
console.log("rest parameter:");const o=((...o)=>(console.log(o),o.map((o=>2*o))))(1,2,3,4,5,9,8,7,5,6);console.log(o),console.log("================================="),
//! spread syntax (arrays):
console.log("spread syntax (arrays):");const s=["shaun","ryu","crystal"];console.log(s),console.log(...s);const l=["mario","chun",...s];console.log(l),console.log("================================="),
//! spread syntax (objects):
console.log("spread syntax (objects):");const n={name:"Dan",age:50,job:"developer"};console.log("person =",n);const e={...n,location:"Bistrita"};console.log("personClone =",e);
//# sourceMappingURL=index.31750f54.js.map
