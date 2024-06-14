//! Constructorul User:
function o(o,n){this.username=o,this.email=n}
//! Definim metoda login pe prototipul User:
//! Constructorul Admin:
function n(n,e,t){o.call(this,n,e),this.title=t}o.prototype.login=function(){return console.log(`${this.username} has logged in.`),this},n.prototype=Object.create(o.prototype),n.prototype.deleteUser=function(){};const e=new o("danretegan","danretegan@yahoo.com"),t=new o("ion","ion@ion.com"),i=new n("admin","admin@admin.com","black-belt-ninja");console.log(e,t,i),e.login(),console.log(n.prototype);
//# sourceMappingURL=index.6a94189e.js.map
