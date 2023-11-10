const isValidIPv4 = (input) => {
  const octetes = input.split(".");
  if (octetes.length !== 4) {
    return false;
  }
};

console.log(isValidIPv4("1.2.3.4"));
console.log(parseInt(2).toString());
