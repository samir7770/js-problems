// const fibonacci = [0, 1];

// for (let i = 2; i <= 10; i++) {
//   fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
// }

// console.log(fibonacci);

fibonacci = (nthNum) => {
  let fibonacci = [0, 1];
  for (let i = 2; i < nthNum; i++) {
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
  }
  console.log(fibonacci);
};

fibonacci(10);
