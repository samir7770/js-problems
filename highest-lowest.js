// highLow = (arr) => {
//   let large = arr[0];
//   for (item of arr) {
//     if (item < large) {
//       item = large;
//     }
//   }
//   return large;
// };

// let a = [1, 2, 3, 4, 5, 6];
// console.log(highLow(a));

function isIsogram(str) {
  let ismo = [];
  let number = 0;
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (!ismo[str[i]]) {
      ismo[str[i]] = 1;
    } else if (ismo[str[i]] < 2) {
      ismo[str[i]] += 1;
      number++;
    }
  }
  return number;
}

console.log(isIsogram("Dermatoglyphics"));
console.log(isIsogram("ababa"));
console.log(isIsogram("moOse"));
