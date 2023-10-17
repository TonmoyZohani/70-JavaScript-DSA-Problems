function calculator(num1, num2, op) {
  if (op === "+") {
    return num1 + num2;
  } else if (op === "-") {
    return num1 - num2;
  } else if (op === "*") {
    return num1 * num2;
  } else if (op === "/") {
    return num1 / num2;
  }
}

console.log(calculator(1, 2, "+"));
console.log(calculator(10, 5, "-"));
console.log(calculator(2, 2, "*"));
console.log(calculator(10, 5, "/"));

// calculator(1, 2, "+"); // 3
// calculator(10, 5, "-"); // 5
// calculator(2, 2, "*"); // 4
// calculator(10, 5, "/"); // 2

module.exports = calculator;
