function reverseString(str) {
  if (str.length === 0 || str.length === 1) {
    return str;
  }

  return reverseString(str.substring(1)) + str[0];
}

console.log(reverseString(""));
console.log(reverseString("a"));
console.log(reverseString("hello"));
