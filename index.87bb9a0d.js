//! Async & Await:
(async()=>{const o=await fetch("./todos/luigi.json");return await o.json()})().then((o=>console.log("resolved:",o))).catch((o=>console.log(o)));
//# sourceMappingURL=index.87bb9a0d.js.map
