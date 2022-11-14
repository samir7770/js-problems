const a = "bbbbaccddd";

const arr = [];
const result = [];

for (let i = 0; i < 26; i++) {
  arr[i] = 0;
}
for (let i = 0; i < a.length; i++) {
  let charIndex = a[i].charCodeAt(0) - 97;
  arr[charIndex]++;
}

console.log(arr);

// const L = arr.filter((item) => item > 0).length;
// let max = 0;
// let maxIndex = 0;
// for (let i = 0; i < L; i++) {
//   for (let j = 0; j < 26; j++) {
//     if (arr[j] > max) {
//       max = arr[j];
//       maxIndex = j;
//     }
//   }
//   for (let i = 0; i < max; i++) {
//     result.push(String.fromCharCode(maxIndex + 97));
//   }
//   arr[maxIndex] = 0;
//   maxIndex = 0;
//   max = 0;
// }

// console.log(result.join(""));
// arr.map((ele, ind) => console.log(String.fromCharCode(ind + 97), ele));
