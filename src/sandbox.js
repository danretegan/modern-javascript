const link = document.querySelector('a');

console.log(link.getAttribute('href'));

link.setAttribute('href', 'https://www.youtube.com');
link.innerText = 'change to YouTube!';

console.log(link.getAttribute('href'));

console.log('=======================');

const mssg = document.querySelector('p');

console.log(mssg.getAttribute('class'));
mssg.setAttribute('class', 'success');
console.log(mssg.getAttribute('class'));
mssg.setAttribute('style', 'color: green;');
