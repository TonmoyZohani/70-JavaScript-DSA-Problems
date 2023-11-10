function symmetricDifference(arr1, arr2) {
  const setArr1 = new Set(arr1);
  const setArr2 = new Set(arr2);

  const fullArr = [...setArr1, ...setArr2];
  const fullArrSet = new Set(fullArr);
  return [...fullArrSet];
}

console.log(symmetricDifference([1, 2, 3], [3, 4, 5]));
console.log(symmetricDifference([1, 2, 3, 4, 5], [5, 4, 3, 2, 1]));
console.log(symmetricDifference([1, 2, 3], [4, 5, 6]));
