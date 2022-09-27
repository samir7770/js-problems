function isLeapYear(year) {
  if (year % 4 == 0) {
    return "This is a Leap Year";
  } else {
    return "This is not a Leap Year";
  }
}

// console.log(isLeapYear(2020));

function isLeapYearArr(year) {
  let newArr = [];
  for (let i = 0; i < year.length; i++) {
    if (year[i] % 4 == 0) {
      newArr.push(year[i]);
    }
  }
  return newArr;
}

console.log(isLeapYearArr([2022, 1900, 2023, 2016, 2012]));
