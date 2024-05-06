const now = new Date();

console.log(dateFns.isToday(now));
console.log(dateFns.isToday(545454));

//TODO formating options:

console.log(dateFns.format(now, 'yyyy'));
console.log(dateFns.format(now, 'MMMM'));
console.log(dateFns.format(now, 'eeee'));
console.log(dateFns.format(now, 'do'));

console.log(dateFns.format(now, 'eeee, MMMM do yyyy'));

//TODO comparing dates:

const before = new Date('February 1 2019 12:00:00');

const distance = dateFns.formatDistance(now, before);

console.log(`the text was written ${distance} ago`);
