let arr = [1, 3, 6, 8, 9, 5];

function sumOfOdd(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 != 0) {
      sum = sum + array[i];
    }
  }
  return sum;
}

console.log(sumOfOdd(arr));
