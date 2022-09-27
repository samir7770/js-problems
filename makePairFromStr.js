// function extractArray(str) {
//   var newArray = [];

//   for (let i = 0; i < str.length; i = i + 2) {
//     if (str[i + 1]) {
//       newArray.push(str[i] + str[i + 1]);
//     } else {
//       newArray.push(str[i] + "_");
//     }
//   }
//   return newArray;
// }

// console.log(extractArray("abcde"));

let a = "salmanShar";
let b = [];

for (let i = 0; i < a.length; i += 3) {
  if (a[i + 1] && a[i + 2]) {
    b.push(a[i] + a[i + 1] + a[i + 2]);
  } else if (a[i + 1]) {
    b.push(a[i] + a[i + 1] + "_");
  } else {
    b.push(a[i] + "_ _");
  }
}

for (let i = 0; i < b.length; i++) {
  console.log(b[i]);
}
