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
  let text = String.lastIndexOf(".js");
  if (text) {
    return true;
  } else {
    false;
  }
}

console.log(isJavaScriptFile("index.jpg"));
