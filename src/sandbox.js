//TODO The Query Selector:

const paragraph1 = document.querySelector('p');
const paragraph3 = document.querySelector('.error');
const div2 = document.querySelector('div.error');

//TODO Select element /Inspect /Copy /Copy selector!
const paragraph2 = document.querySelector(
  'body > div:nth-child(3) > p:nth-child(2)'
);
console.log(paragraph1);
console.log(paragraph3);
console.log(div2);
console.log(paragraph2);
console.log('=====================');

//TODO Se selecteaza (si se listeaza) toate elementele <p>:
const paragraphs = document.querySelectorAll('p');
console.log(paragraphs);
console.log('=====================');

//TODO Sau selectam si listam un anumit element <p>:
console.log(paragraphs[0]);
console.log(paragraphs[1]);
console.log(paragraphs[2]);
console.log('=====================');

//TODO Putem folosi metoda forEach:
paragraphs.forEach(element => {
  console.log(element);
});

//TODO Selectam toate clasele .error:
const errors = document.querySelectorAll('.error');
console.log('=====================');
console.log(errors);
