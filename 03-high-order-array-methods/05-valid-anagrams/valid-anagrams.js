function validAnagrams(str1, str2) {
  const s1 = str1.split("").sort().join("");
  const s2 = str2.split("").sort().join("");

  if (s1 === s2) {
    return true;
  } else {
    return false;
  }
}

console.log(validAnagrams("listen", "silent"));
console.log(validAnagrams("hello", "world"));
console.log(validAnagrams("astronomer", "moonstarer"));
