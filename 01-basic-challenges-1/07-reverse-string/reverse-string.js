function reverseString(str) {
  //   return str.split("").reverse().join('');
  let reverse = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str.charAt(i);
  }

  return reverse;
}

console.log(reverseString("hello"));
console.log(reverseString("world"));
console.log(reverseString(""));
