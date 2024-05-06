//! timestamps:
// returnează timpul în milisecunde de la 1 ianuarie 1970

const before = new Date('February 1 2019 7:30:59');
const now = new Date();

console.log(now);
console.log(before);
console.log(now.getTime(), before.getTime());

const diff = now.getTime() - before.getTime();
console.log('diff=', diff);

const mins = Math.round(diff / 1000 / 60);
const hours = Math.round(diff / 1000 / 60 / 60);
const days = Math.round(diff / 1000 / 60 / 60 / 24);
const weeks = Math.round(diff / 1000 / 60 / 60 / 24 / 7);
const month = Math.round(diff / 1000 / 60 / 60 / 24 / 30);
const years = Math.round(diff / 1000 / 60 / 60 / 24 / 365);

console.log('minute:', mins);
console.log('ore:', hours);
console.log('zile:', days);
console.log('saptamani:', weeks);
console.log('luni:', month);
console.log('ani:', years);

//! converting timestamps into date objects:
const timestamp = 1675938474990;
const data = new Date(1675938474990);
console.log(data);
