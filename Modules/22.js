// Prime number

const primeNumber = (num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return "Not a prime number";
    } else {
      return "This is a prime number";
    }
  }
};

// console.log(primeNumber(6));

// Separating negative array

negChecker = (arr) => {
  let posArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 0) {
      posArr.push(arr[i]);
    } else {
      return posArr;
    }
  }
};
let arr = [1, 2, 4, 5, 0, -7, 6, -9, 8];
console.log(negChecker(arr));
