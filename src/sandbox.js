// const content = document.querySelector('p');
// console.log('1', content.classList);

// content.classList.add('error');
// console.log('2', content.classList);

// content.classList.remove('error');
// console.log('3', content.classList);

// content.classList.add('success');
// console.log('4', content.classList);

const paras = document.querySelectorAll('p');

paras.forEach(element => {
  console.log(element.textContent);
  if (element.textContent.includes('error')) {
    element.classList.add('error');
  }

  if (element.textContent.includes('success')) {
    element.classList.add('success');
  }
});

console.log('===================');

Array.from(paras).forEach(element => {
  console.log('clasa adaugata:', element.classList.toString());
});

const title = document.querySelector('.title');
title.classList.toggle('test');
title.classList.toggle('test');

//TODO classList.toggle() verifică dacă clasa specificată este deja aplicată elementului. Dacă este, o elimină; dacă nu este, o adaugă. Această metodă este utilă pentru a schimba starea vizuală a unui element în răspuns la anumite evenimente sau condiții, fără a fi nevoie să urmărim manual dacă clasa a fost deja aplicată sau nu.
