const highLow = (arr) => {
  let large = arr[0];
  for (item of arr) {
    if (item > large) {
      large = item;
    }
  }
  return large;
};

// function highLow(arr) {
//   let large = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > large) {
//       large = arr[i];
//     }
//   }
//   return large;
// }

let a = [1, 2, 3, 4, 5, 6, 7];
console.log(highLow(a));
