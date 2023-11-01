function validateEmail(email) {
  let arr = email.split("");

  let checkOne = arr.find((a) => a === "@");
  let checkTwo = arr.find((a) => a === ".");

  return checkOne && checkTwo ? true : false;
}

console.log(validateEmail("john@gmail.com"));
console.log(validateEmail("john@gmail"));
