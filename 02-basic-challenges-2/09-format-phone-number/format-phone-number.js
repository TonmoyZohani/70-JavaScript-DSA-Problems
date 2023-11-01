// function formatPhoneNumber(number) {
//   number.splice(0, 0, "(");
//   number.splice(4, 0, ")");
//   number.splice(5, 0, " ");
//   number.splice(9, 0, "-");
//   let n = "";

//   for (let i = 0; i < number.length; i++) {
//     n += number[i];
//   }
//   return n;
// }

function formatPhoneNumber(number) {
  let areaCode = number.slice(0, 3).join("");
  let firstPart = number.slice(3, 6).join("");
  let secondPart = number.slice(6, 10).join("");

  return `(${areaCode}) ${firstPart}-${secondPart}`;
}

console.log(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
