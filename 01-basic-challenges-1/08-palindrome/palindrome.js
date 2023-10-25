function isPalindrome(str) {
  let reverse = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str.charAt(i);
  }

  if (str === reverse) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome("madam"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));
console.log(isPalindrome(""));
