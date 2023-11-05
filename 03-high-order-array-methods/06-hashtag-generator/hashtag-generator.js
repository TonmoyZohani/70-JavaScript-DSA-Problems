function generateHashtag(str) {
  if (str.trim() === "") {
    return false;
  }

  const words = str.trim().split(/\s+/);
  const capitalizedWords = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  const fullSentence = capitalizedWords.join("");

  if (fullSentence.length > 140) {
    return false;
  } else {
    return `#${fullSentence}`;
  }
}

console.log(generateHashtag("JavaScript is awesome"));
console.log(generateHashtag("hello world"));
console.log(
  generateHashtag(
    "This is a very very very very very very very very very very very very very very long input that should result in a false hashtag because it exceeds the character limit of 140"
  )
);
console.log(generateHashtag(""));
