//! timestamps:
var before=new Date("February 1 2019 7:30:59"),now=new Date;console.log(now),console.log(before),console.log(now.getTime(),before.getTime());var diff=now.getTime()-before.getTime();console.log("diff=",diff);var mins=Math.round(diff/1e3/60),hours=Math.round(diff/1e3/60/60),days=Math.round(diff/1e3/60/60/24),weeks=Math.round(diff/1e3/60/60/24/7),month=Math.round(diff/1e3/60/60/24/30),years=Math.round(diff/1e3/60/60/24/365);console.log("minute:",mins),console.log("ore:",hours),console.log("zile:",days),console.log("saptamani:",weeks),console.log("luni:",month),console.log("ani:",years);
//! converting timestamps into date objects:
var timestamp=1675938474990,data=new Date(1675938474990);console.log(data);
//# sourceMappingURL=index.941997ec.js.map
