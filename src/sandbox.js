//! dates & times:

const now = new Date();
console.log(now);
console.warn('Date() este un', typeof now);

//! year, month, day, times:

console.log('getFullYear:', now.getFullYear());
// returnează luna (0-11, unde 0 este ianuarie):
console.warn('Atentie! getMonth:', now.getMonth());
console.log('getDate:', now.getDate());
// returnează ziua săptămânii (0-6, unde 0 este duminică):
console.warn('Atentie: in ce zi din saptamana suntem / getDay:', now.getDay());

console.log('getHours:', now.getHours());
console.log('getMinutes:', now.getMinutes());
console.log('getSeconds', now.getSeconds());

//! timestamps:
// returnează timpul în milisecunde de la 1 ianuarie 1970
console.log('timestamps in ms from 01.ian.1970 / getTime:', now.getTime());

//! date strings:
console.log('toDateString:', now.toDateString());
console.log('toTimeString:', now.toTimeString());
console.log('toLocaleString:', now.toLocaleString());
