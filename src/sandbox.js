//! Find Method:
const scores = [10, 5, 0, 40, 60, 10, 20, 70];

const firstHighScore = scores.find(element => {
  return element > 50;
});

console.log(`Primul scor mai mare decat 50 este: ${firstHighScore}`);
