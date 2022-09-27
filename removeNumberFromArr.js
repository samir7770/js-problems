// let numbers = [1, 2, 3, 4, 5, 6, 7, 5, 9, 5];
// let outputNumber = [];
// let removeNumber = 5;
// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] != removeNumber) {
//     outputNumber.push(numbers[i]);
//   }
// }

// console.log(outputNumber);

let numbers = [1, 2, 3, 4, 5, 6, 7, 5, 9, 5];
let outputNumber = [];
function a(removeNumber) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] != removeNumber) {
      outputNumber.push(numbers[i]);
    }
  }
  return outputNumber;
}
console.log(a(9));
