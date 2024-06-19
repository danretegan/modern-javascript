//! Sets:
const e=["ryu","chun","ryu","shaun"];console.log(e),console.log("Sets:");const o=new Set(e);console.log(o);const l=[...o];console.log(l);
//! acelasi lucru scris intr-o singura linie:
const s=[...new Set(e)];console.log(s),console.log("================================="),console.log("The methods of the Set:");const n=new Set;n.add(20),n.add(25).add(30),n.add(25),console.log(n),console.log("The size of the Set is =",n.size),n.delete(25),console.log(n),console.log("Now the size of the Set is =",n.size),console.log("The Set has the value 30?",n.has(30)),console.log("The Set has the value 25?",n.has(25)),n.clear(),console.log(n);new Set([{name:"shaun",age:30},{name:"crystal",age:29},{name:"chun-li",age:32}]).forEach((e=>{console.log(e.name,e.age)}));
//# sourceMappingURL=index.8bb063ff.js.map
