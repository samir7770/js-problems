// প্রাকটিস প্রব্লেম- ৫ খানা

// ১. একটা কোড লিখো। যেটা দিয়ে কোন একটা array এর মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিতে পারবে।

// let arr = [3, 4, 1, 5, 8, 2];
// let first = arr[0];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] < first) {
//     first = arr[i];
//   }
// }

// console.log(first);

// =========================
// ২. একটা কোড লিখো যেটা দিয়ে তিনটা সংখ্যার মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিবে।

// let num1 = 56;
// let num2 = 87;
// let num3 = 38;

// By Ternary
// =========

// num1 > num2 && num1 > num3
//   ? console.log(num1 + " is bigger than other numbers")
//   : num2 > num1 && num2 > num3
//   ? console.log(num2 + " is bigger than other numbers")
//   : console.log(num3 + " is bigger than other numbers");

// Math.Max
// ========

// console.log(Math.max(num1, num2, num3));

// ===============================
// ৩. একটা ফাংশন লিখো। সেই ফাংশনের মধ্যে ইনপুট হিসেবে একটা array নিবে। সেই array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হবে ইনপুট নেয়া array এর মধ্যে যতগুলা সংখ্যা আছে। সেই সংখ্যা গুলার গড় বের করবে। তারপর সেই গড় ফাংশনের রিটার্ন হিসেবে দিয়ে দিবে। একটু চিন্তা করো। বুঝার চেষ্টা করো। ট্রাই করো। দেখো পারো কিনা।

// function avg(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum / arr.length;
// }

// console.log(avg([2, 5, 8]));

// ======================
// ৪. একটা ফাংশন লিখো। যেটা ইনপুট প্যারামিটার হিসেবে একটা আয়তক্ষেত্রের দৈর্ঘ্য আর উচ্চতাকে নিবে। তারপর সেই আয়তক্ষেত্র এর area (আয়তন) কে রেজাল্ট হিসেবে রিটার্ন করবে।

// function area(length, height) {
//   return length * height;
// }

// console.log(area(10, 2));

// ৫. (ট্রিকি) কোন একটা array এর মধ্যে অনেকগুলা সংখ্যা আছে। সেই সংখ্যাগুলো থেকে second largest সংখ্যা বের করার একটা প্রোগ্রাম লিখো। দরকার হলে গুগলে সার্চ দাও। তারপর সার্চ রেজাল্ট দেখে বুঝে বুঝে করার চেষ্টা করো।

// let arr = [11, 2, 5, 4, 6, 8, 10];
// arr.sort(function (a, b) {
//   return a - b;
// });

// let secondLast = arr[arr.length - 2];
// let secondLarge = arr[0];
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > secondLarge) {
//     newArr.push(arr[i]);
//   }
// }

// console.log(newArr);

// console.log(secondLast);

function find_second_lg(number) {
  let first = 0;
  let second = 0;

  for (let i = 0; i <= number.length - 1; i++) {
    if (number[i] > first) {
      second = first;
      first = number[i];
    } else if (number[i] > second && number[i] != first) {
      second = number[i];
    }
  }
  console.log(second);
}
let arr = [10, 50, 30];
find_second_lg(arr);
