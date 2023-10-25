function countVowels(str) {
  let word = str.toLowerCase();

  let cnt = 0;

  for (let i = 0; i < word.length; i++) {
    if (
      word[i] === "a" ||
      word[i] === "e" ||
      word[i] === "i" ||
      word[i] === "o" ||
      word[i] === "u"
    ) {
      cnt++;
    }
  }

  return cnt;
}

console.log(countVowels("hello"));
console.log(countVowels("why"));
console.log(countVowels("mississippi"));
