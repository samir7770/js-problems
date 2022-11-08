const arr = [1, 9, 17, 22];

// using for loop
let sum = 0;
for (let num of arr) {
  sum += num;
}
// console.log(sum);

function summation(a, b) {
  return a + b;
}

const sumReduce = arr.reduce(summation, 0);
const sumReduceArrow = arr.reduce((a, b) => a + b, 0);
// console.log(sumReduce);
// console.log(sumReduceArrow);

const people = [
  { name: "Meena", age: 20 },
  { name: "Rina", age: 15 },
  { name: "Suchorita", age: 22 },
];

let sumOfAge = 0;
for (let num of people) {
  sumOfAge += num.age;
}
// console.log(sumOfAge);
function ageSum(a, b) {
  return a + b.age;
}
// const reduceAgeSum = people.reduce((a, b) => a + b.age, 0);
const reduceAgeSum = people.reduce(ageSum, 0);
console.log(reduceAgeSum);
