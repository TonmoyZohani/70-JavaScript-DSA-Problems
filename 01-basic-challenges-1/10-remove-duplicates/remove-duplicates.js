function removeDuplicates(arr) {
  let word = new Set(arr);

  return [...word];
}

console.log(removeDuplicates([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(removeDuplicates([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
console.log(removeDuplicates([1, 2, 3, 4, 5, true, 1, 'hello', 2, 3, 'hello', true]));
