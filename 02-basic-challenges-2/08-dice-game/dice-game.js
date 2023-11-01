function diceGameSimulation(sim) {
  let arr = [];

  for (i = 0; i < sim; i++) {
    let obj = { dice1: "", dice2: "", sum: "", result: "" };
    obj.dice1 = Math.floor(Math.random() * 6 + 1);
    obj.dice2 = Math.floor(Math.random() * 6 + 1);
    obj.sum = obj.dice1 + obj.dice2;
    obj.result =
      obj.sum === 7 || obj.sum === 11
        ? "win"
        : obj.sum === 2 || obj.sum === 3 || obj.sum === 12
        ? "lose"
        : "roll again";

    arr.push(obj);
  }

  return arr;
}

console.log(diceGameSimulation(3));
