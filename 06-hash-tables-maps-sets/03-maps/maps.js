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

// console.log(map1.get(3));
// console.log(map1.get(myFunction));
map1.set(2, "Anan");
console.log(map1);

console.log(map1.size);
map1.delete(myFunction);
console.log(map1);

for (let [key, value] of map1) {
  console.log(`${key} = ${value}`);
}

map1.clear();
console.log(map1);
