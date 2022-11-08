const arr = [33, 50, 79, 78, 90, 101, 30];

const divide = arr.filter((x) => x % 10 === 0);
// console.log(divide);

const name = ["amir", "kamir", "jomir"];
const names = name.filter((x) => x[1] === "m");
// console.log(names);
const nameFind = name.find((x) => x[2] === "m");
console.log(nameFind);
