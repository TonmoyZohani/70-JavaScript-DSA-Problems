
const myFunction = () => {
  return `This is a game`;
};

const map1 = new Map([
  [1, "Khaled"],
  [2, "Taharim"],
  [3, "Inan"],
  [4, "Silmun"],
  [myFunction, "This is function"],
]);


console.log(map1.get(3));
console.log(map1.get(myFunction));
