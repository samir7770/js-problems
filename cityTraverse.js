function isValidWalk(walk) {
  let length = walk.length;

  if (length == 10) {
    let south = walk.filter((value) => value == "s");
    let north = walk.filter((value) => value == "n");
    let east = walk.filter((value) => value == "e");
    let west = walk.filter((value) => value == "w");
    if (south.length === north.length && east.length === west.length) {
      return true;
    }
    return false;
  } else {
    return false;
  }
}

// let result = isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]);
let result = isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"]);
console.log(result);
