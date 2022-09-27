// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

// spell = (str) => {
//   let strLow = str.toLowerCase();
//   for (let i = 0; i < strLow.length; i++) {
//     for (let j = i + 1; j < strLow.length; j++) {
//       if (strLow[i] == strLow[j]) {
//         return false;
//       }
//     }
//   }
//   return true;
// };

// console.log(spell("Dermatooglyphics"));

// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

// Example
// "abcde" -> 0 # no characters repeats more than once
// "aabbcde" -> 2 # 'a' and 'b'
// "aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
// "indivisibility" -> 1 # 'i' occurs six times
// "Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
// "aA11" -> 2 # 'a' and '1'
// "ABBA" -> 2 # 'A' and 'B' each occur twice

spell = (str) => {
  let count = 0;
  let newArr = [];
  let strLow = str.toLowerCase();
  for (let i = 0; i < strLow.length; i++) {
    for (let j = i + 1; j < strLow.length; j++) {
      if (strLow[i] == strLow[j] && !newArr.includes(strLow[i])) {
        newArr.push(strLow[i]);
      }
    }
  }
  return newArr.length;
};

console.log(spell("aaaaabccccccdee"));
