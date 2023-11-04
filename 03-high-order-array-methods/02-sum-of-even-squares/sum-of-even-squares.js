function sumOfEvenSquares(arr) {
  const numbers = arr.filter((a) => a % 2 === 0).map((a) => a * a);

  return numbers;
}

console.log(sumOfEvenSquares([1, 2, 3, 4, 5]));
console.log(sumOfEvenSquares([-1, 0, 1, 2, 3, 4]));
console.log(sumOfEvenSquares([]));

