const nameSet = new Set(["John", "Jane", "Joe", "Jane", "Joe"]);

console.log(nameSet);
console.log(nameSet.size);
console.log([...nameSet]);
console.log(nameSet.has("John"));
