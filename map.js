const odd = [1, 3, 5, 7, 9];
console.log(odd);

// Even Array with For
let evenFor = [];
for (let num of odd) {
  const evenNum = num + 1;
  evenFor.push(evenNum);
}
// console.log(evenFor);

// Even Array with map
const evenMap = odd.map((x) => {
  const one = x + 1;
  const two = one + 1;
  return two;
});
console.log(evenMap);
