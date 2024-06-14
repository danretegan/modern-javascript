!function(){
//! Constructorul User:
function o(o,n){this.username=o,this.email=n}
//! Definim metoda login pe prototipul User:
//! Constructorul Admin:
function n(n,e,t){o.call(this,n,e),this.title=t}o.prototype.login=function(){return console.log("".concat(this.username," has logged in.")),this},n.prototype=Object.create(o.prototype),n.prototype.deleteUser=function(){};var e=new o("danretegan","danretegan@yahoo.com"),t=new o("ion","ion@ion.com"),i=new n("admin","admin@admin.com","black-belt-ninja");console.log(e,t,i),e.login(),console.log(n.prototype)}();
//# sourceMappingURL=index.bc5aa24c.js.map
