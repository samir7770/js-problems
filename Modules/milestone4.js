// ===========
// Problem:1  radianToDegree
// ===========
function radianToDegree(radian) {
  if (typeof radian == "number") {
    let degree = (radian * 180) / Math.PI;
    degree = parseFloat(degree.toFixed(2));
    return degree;
  } else {
    return "Please Enter a Number";
  }
}

// console.log(radianToDegree(15));

// ===========
// Problem:2  isJavaScriptFile
// ===========

function isJavaScriptFile(String) {
  if (typeof String == "string") {
    let index = String.lastIndexOf(".js");
    if (index == String.length - 3) {
      return true;
    } else {
      return false;
    }
  } else {
    return "Please Provide a String";
  }
}

// console.log(isJavaScriptFile("sjhfhjsdbfhjbsjhfb.js"));

// ===========
// Problem 3: oilPrice
// ===========

function oilPrice(diesel, petrol, octane) {
  if (
    typeof diesel != "number" ||
    typeof petrol != "number" ||
    typeof diesel != "number"
  ) {
    return "Please input a number";
  } else {
    let dieselPrice = 114 * diesel;
    let petrolPrice = 130 * petrol;
    let octanePrice = 135 * octane;
    let totalCost = dieselPrice + petrolPrice + octanePrice;
    return totalCost;
  }
}

// console.log(oilPrice(23, 78, 10));

// ===========
// Problem 4: publicBusFare
// ===========

// একটি বড় সংখ্যাক মানুষজন পিকনিকে যাবে। বাসের সংখ্যা মানুষের সংখার উপর নির্ভর করবে। ধরো আমাদের বাস ও মাইক্রো আছে ।প্রতিটি বাসের ক্যাপাসিটি ৫০ জন এবং প্রতিটি মাইক্রবাসের ক্যাপাসিটি ১১ জন এবং পাবলিক বাসের প্রতিটি টিকেটের মূল্য ২৫০ টাকা করে। এখন তোমাকে একটি ফাংশন লিখতে হবে যার নাম হবে publicBusFare যেটি প্যরামিটার হিসেবে একটা সংখ্যা (কতজন যাবে )  নিবে । মোট কতটাকা পাবলিক বাস ফেয়ারে যাবে সেটি তোমাকে রিটার্ন করবে ।

// উদাহরণ১ঃ
//  যদি ১১৭ জন মানুষ পিকনিকে যায় তাহলে আমাদের বাস লাগবে ২ টি ও মাইক্রোবাস লাগবে ১ টি । বাকি মানুষ পাবলিক বাসে যাবে। এই কয়জন মানুষগুলোর জন্য পাবলিক বাসের ভাড়া মোট কত হবে সেটি রিটার্ন করতে হবে।

// উদাহরণ২ঃ
//  যদি ২৩৫ জন মানুষ পিকনিকে যায় তাহলে আমাদের বাস লাগবে ৪ টি ও মাইক্রোবাস লাগবে ৩ টি এবং বাকি মানুষ পাবলিক বাসে যাবে। এই কয়জন মানুষগুলোর জন্য পাবলিক বাসের ভাড়া মোট কত হবে সেটি রিটার্ন করতে হবে।

function publicBusFare(pessenger) {
  if (typeof pessenger != "number") {
    return "Please Input A valid Nnumber";
  } else {
    let busReminder = pessenger % 50;
    let carReminder = busReminder % 11;
    let totalFare = carReminder * 250;
    return totalFare;
  }
}

// console.log(publicBusFare(63));
