//! Reduce Method:
const scores1 = [10, 20, 60, 40, 70, 90, 30, 5];

const reduceScores = scores1.reduce((acc, element) => {
  if (element > 50) {
    acc = acc + 1;
    // acc++
  }
  return acc;
}, 0);

console.warn(`Avem ${reduceScores} scoruri mai mari de 50!`);

const scores2 = [
  { player: 'mario', score: 50 },
  { player: 'yoshi', score: 30 },
  { player: 'mario', score: 70 },
  { player: 'cryst', score: 60 },
  { player: 'mario', score: 50 },
  { player: 'yoshi', score: 30 },
  { player: 'mario', score: 70 },
  { player: 'cryst', score: 60 },
  { player: 'mario', score: 50 },
  { player: 'yoshi', score: 30 },
  { player: 'mario', score: 70 },
  { player: 'cryst', score: 60 },
  { player: 'mario', score: 50 },
  { player: 'yoshi', score: 30 },
  { player: 'mario', score: 70 },
  { player: 'cryst', score: 60 },
  { player: 'mario', score: 50 },
  { player: 'yoshi', score: 30 },
  { player: 'mario', score: 70 },
  { player: 'cryst', score: 60 },
];

const mariosScore = scores2.reduce((acc, element) => {
  if (element.player === 'mario') {
    acc = acc + element.score;
    // acc += element.score;
  }
  return acc;
}, 0);

console.info(`Mario a facut in total ${mariosScore} puncte.`);
