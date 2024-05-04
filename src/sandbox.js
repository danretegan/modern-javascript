//! Reduce Method:
const scores = [10, 20, 60, 40, 70, 90, 30, 5];

const reduceScores = scores.reduce((acc, element) => {
  if (element > 50) {
    acc = acc + 1;
    // acc++
  }
  return acc;
}, 0);

console.log(reduceScores);
