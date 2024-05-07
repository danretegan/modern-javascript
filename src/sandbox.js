//! Throwing & Catching Errors:

const getTodos = async () => {
  const response = await fetch('./todos/luigix.json');

  if (response.status !== 200) {
    throw new Error('Nu am putut obtine datele!');
  }
  const data = await response.json();
  return data;
};

getTodos()
  .then(data => console.log('resolved:', data))
  .catch(err => console.log('rejected:', err.message));
