function factorial(number) {
  let result = 1;
  for (let i = 1; i <= number; i++) {
    result = result * i;
  }
  return result;
}

// console.log(factorial(6));

function factorial(number) {
  let result = 1;
  for (let i = number; i > 0; i--) {
    result = result * i;
  }
  return result;
}

// console.log(factorial(6));

function factorial(number) {
  let result = 1;
  let i = number;
  while (i > 0) {
    result = result * i;
    i--;
  }
  return result;
}
console.log(factorial(6));
