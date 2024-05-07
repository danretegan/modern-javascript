const o=async()=>{const o=await fetch("./todos/luigi.json");console.log(o);const n=await o.json();return console.log(n),console.log("====================="),n},n=o();console.log("async returneaza intotdeauna o promisiune:",n),console.log("====================="),o().then((o=>console.log("resolved:",o))).catch((o=>console.log(o)));
//# sourceMappingURL=index.c34e33dd.js.map
