function highestScoringWord(str) {
  const sentence = str.split(" ");
  let sum;

  const scores = sentence.map((word) => {
    let score = 0;
    for (const letter of word) {
      score += letter.charCodeAt(0) - 96;
    }
    return score;
  });

  const maxScore = Math.max(...scores);
  const index = scores.indexOf(maxScore);

  return sentence[index];
}

console.log(highestScoringWord("man i need a taxi up to ubud"));
console.log(highestScoringWord("what time are we climbing up the volcano"));
console.log(highestScoringWord("take me to semynak"));
