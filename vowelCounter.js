// Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string.

function a(str) {
  let b = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] == "a" ||
      str[i] == "e" ||
      str[i] == "i" ||
      str[i] == "o" ||
      str[i] == "u" ||
      str[i] == "A" ||
      str[i] == "E" ||
      str[i] == "I" ||
      str[i] == "O" ||
      str[i] == "U"
    ) {
      b++;
    }
  }
  return b;
}

console.log(a("salmaniou"));

function vowelCount(str) {
  let vowelList = "aeiouAEIOU";
  let vowelNumberCount = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowelList.indexOf(str[i]) !== -1) {
      vowelNumberCount += 1;
    }
  }
  return vowelNumberCount;
}

console.log(vowelCount("The quick brown fx"));
