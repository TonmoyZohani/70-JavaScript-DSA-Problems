function titleCase(str) {
  let strArr = str.toUpperCase().split(" ");
  // let title = [];

  const title = strArr.map((item) => {
    return item.charAt(0).toUpperCase() + item.slice(1).toLowerCase();
  });
  return title.join(" ");
}

console.log(titleCase("I'm a little tea pot"));
console.log(titleCase("sHoRt AnD sToUt"));
console.log(titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"));

