function power(base, n) {
  if (n === 0) {
    return 1;
  }

  return base * power(base, n - 1);
}

console.log(power(2, 3));
console.log(power(5, 2));
console.log(power(3, 4));
