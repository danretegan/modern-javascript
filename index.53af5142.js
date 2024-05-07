//! Throwing & Catching Errors:
(async()=>{const e=await fetch("./todos/luigi.json");if(200!==e.status)throw new Error("Nu am putut obtine datele!");return await e.json()})().then((e=>console.log("resolved:",e))).catch((e=>console.log("rejected:",e.message)));
//# sourceMappingURL=index.53af5142.js.map
