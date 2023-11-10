// const anagramGroups = new Map([["student", ["A", "B"]]]);
// anagramGroups.get("student").push("C");
// console.log(anagramGroups);

function anagramGrouping(words) {
  const anagramGroup = new Map();

  for (const word of words) {
    const sortedWord = word.split("").sort().join("");

    if (anagramGroup.has(sortedWord)) {
      anagramGroup.get(sortedWord).push(word);
    } else {
      anagramGroup.set(sortedWord, [word]);
    }
  }

  return Array.from(anagramGroup.values());
  //   return anagramGroup;
}

console.log(anagramGrouping(["cat", "act", "dog", "god", "tac"]));
