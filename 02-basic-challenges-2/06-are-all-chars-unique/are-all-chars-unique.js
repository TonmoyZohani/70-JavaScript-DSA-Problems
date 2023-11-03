function areAllCharactersUnique(str) {
  let strCode = [];

  for (let i = 0; i < str.length; i++) {
    strCode.push(str[i].charCodeAt(0));
  }

  let set = new Set(strCode);

  return [...set].length === str.length;
}

console.log(areAllCharactersUnique("abcdefg"));
console.log(areAllCharactersUnique("abcdefgA"));
console.log(areAllCharactersUnique("programming"));
console.log(areAllCharactersUnique(""));
console.log(areAllCharactersUnique("a"));
