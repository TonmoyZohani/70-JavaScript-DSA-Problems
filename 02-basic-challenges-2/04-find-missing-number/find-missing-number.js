function findMissingNumber(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  const missingArr = [];
  let sum1 = 0;
  let sum2 = 0;

  for (let i = 1; i <= arr[arr.length - 1]; i++) {
    sum1 += i;
  }

  for (let i = 0; i < sortedArr.length; i++) {
    sum2 += arr[i];
  }

  return sum1 - sum2;
}

console.log(findMissingNumber([1, 2, 3, 4, 6, 7, 8, 9, 10]));
console.log(findMissingNumber([10, 8, 6, 7, 5, 4, 2, 3, 1]));
// console.log(findMissingNumber([10, 5, 1, 2, 4, 6, 8, 3, 9]));
