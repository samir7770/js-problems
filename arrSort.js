// function sumOfOdd(arr) {
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 != 0) {
//       total += arr[i];
//     }
//   }
// }

// console.log(sumOfOdd([12, 2, 34, 3, 5, 1, 36]));

let a = [1, 3, 0, -4, -7];

const valueCheck = (arr) => {
  let negSum = 0;
  let posCount = 0;

  if (!arr || !arr.length) {
    return [];
  } else {
    arr.map((element) => {
      if (element < 0) {
        negSum = negSum + element;
      } else if (element > 0) {
        posCount++;
      }
    });
    return [posCount, negSum];
  }
};

const vCheck = (array) =>
  array && array.length
    ? [
        array.filter((element) => element > 0).length,
        array.filter((element) => element < 0).reduce((p, c) => p + c, 0),
      ]
    : [];

console.log(vCheck(a));
