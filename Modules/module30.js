// ==================
// Pracitce Problem 1
// ==================

const multiply = (num1, num2, num3) => num1 * num2 * num3;
// console.log(multiply(2, 3, 4));

const threeLine = `I am a web developer.
I love to code.
I love to eat biriyani. `;
// console.log(threeLine);

const add = (num1, num2 = 0) => num1 + num2;
// console.log(add(0));

// ==================
// Pracitce Problem 2
// ==================

const even = (friends) => {
  let evenFriends = [];
  for (let friend of friends) {
    let friendLength = friend.length;
    if (friendLength % 2 == 0) {
      evenFriends.push(friend);
    }
  }
  return evenFriends;
};

const check = ["robin", "sifat", "pial", "jobayed"];
// console.log(even(check));

// ==================
// Pracitce Problem 3
// ==================

const squareSum = (nums) => {
  let sum = 0;
  for (let num of nums) {
    const square = Math.pow(num, 2);
    sum += square;
  }
  const avg = sum / nums.length;
  return avg;
};

const arr = [1, 2, 3];
// console.log(squareSum(arr));

// ==================
// Pracitce Problem 3
// ==================

const maxNum = (arr1, arr2) => {
  const newArr = [...arr1, ...arr2];
  const max = Math.max(...newArr);
  return max;
};

const test = [1, 2, 3];
const test2 = [4, 5];

console.log(maxNum(test, test2));
