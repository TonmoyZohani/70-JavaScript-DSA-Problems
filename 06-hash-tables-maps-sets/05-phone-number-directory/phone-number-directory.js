const phoneNumbers = [
  "John:123-456-7890",
  "Jane:987-654-3210",
  "Joe:555-555-5555",
];

function phoneNumberDirectory(numbers) {
  const map1 = new Map();

  numbers.map((a) => {
    let phoneArr = a.split(":");
    map1.set(phoneArr[0], phoneArr[1]);
  });

  return map1;
}

console.log(phoneNumberDirectory(phoneNumbers));
