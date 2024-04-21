//! Adding & Changing Page Content

const para = document.querySelector('p');
console.log(para);
console.log('vechiul text: ', para.innerText);

//! Folosindu-ne de querySelector si de proprietatea innerText am INLOCUIT vechiul text in primul <p>:
para.innerText = 'am schimbat textul in browser!';
console.log('noul text:', para.innerText);
console.log('====================');

const paras = document.querySelectorAll('p');

paras.forEach(element => {
  console.log(element.innerText);
  //! Folosindu-ne de querySelectorAll, de proprietatea innerText si de += am ADAUGAT text de data aceasta, in toate <p>:
  element.innerText += ' new text';
});
console.log('====================');

//! Inlocuim sau adaugam (+=) cod HTML:
const content = document.querySelector('.content');
console.log('vechiul HTML: ', content.innerHTML);
content.innerHTML = '<h2> THIS IS A NEW h2 TITLE </h2>';
console.log('noul HTML:', content.innerHTML);

//! Adaugam (+=) in div-ul cu clasa content o lista de persoane, fiecare persoana intr-un paragraf:
const people = ['Dan', 'Radu', 'Ion', 'Vasile'];

people.forEach(element => {
  content.innerHTML += `<p>${element}</p>`;
});
