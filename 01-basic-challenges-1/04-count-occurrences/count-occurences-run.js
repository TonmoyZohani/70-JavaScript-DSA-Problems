const countOccurrences = (str, let) => {
  let cnt = 0;
  const strArr = str.split("");

  strArr.forEach((item) => {
    if (item === let) {
      cnt++;
    }
  });

  return cnt;
};

const result = countOccurrences("hello", "l");
const result1 = countOccurrences("hello", "z");
console.log(result);
console.log(result1);
