//! Throwing & Catching Errors:
(async()=>{const e=await fetch("./todos/luigix.json");if(200!==e.status)throw new Error("Nu am putut obtine datele!");return await e.json()})().then((e=>console.log("resolved:",e))).catch((e=>console.log("rejected:",e.message)));
//# sourceMappingURL=index.a238e7b7.js.map
