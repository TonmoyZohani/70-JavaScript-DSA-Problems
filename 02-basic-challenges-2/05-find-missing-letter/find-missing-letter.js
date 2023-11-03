function findMissingLetter(arr) {
  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (let i = 0; i < arr.length; i++) {
    const currIndex = alphabet.indexOf(arr[i]);
    const nextIndex = alphabet.indexOf(arr[i + 1]);

    if (nextIndex - currIndex !== 1) {
      return alphabet[currIndex + 1];
    }
  }
}

console.log(findMissingLetter(["a", "b", "c", "d", "f"]));
console.log(findMissingLetter(["O", "Q", "R", "S"]));
