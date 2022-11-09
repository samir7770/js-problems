let a = 12;
const b = 23;

const c = {
  name: "Billa",
  id: 2345,
  address: "Uganda",
};

const temp = `This is ${c.name}. 
My id is ${c.id}. 
I am ${b} years old and working for ${a} years.`;
// console.log(temp);

const divide = (num) => num / 5;
// console.log(divide(15));

const multiSum = (a, b) => (a + 2) * (b + 2);
// console.log(multiSum(1, 2));

const para = (a, b, c) => a * b * c;
// console.log(para(1, 2, 4));

const multiSumAgain = (a, b) => {
  const first = a + 2;
  const second = b + 2;
  return first * second;
};

// console.log(multiSumAgain(1, 2));

// function test(a) {
//   console.log(arguments);
// }

// const test = (a) => console.log(arguments);

// test(2);

const arr = [1, 2, 3, 4, 6, 7, 8, 9];

const resultMap = arr.map((x) => x * 5);
// console.log(resultMap);

const resultForeach = arr.forEach((x) => x * 5);
// console.log(resultForeach);

const oddNum = arr.filter((x) => x % 2 != 0);
// console.log(oddNum);

const tk = [
  { id: 1, price: 4000 },
  { id: 2, price: 6000 },
  { id: 3, price: 5000 },
];

const resultTk = tk.find((x) => x.price === 5000);
// console.log(resultTk);

// Map
// Go through all the Elements in the Array and do something (same thing) to all of the Elements and return

// forEach
// Go through all the Elements in the Array and do something (same thing) to all of the Elements but do not return

const { name, id, address } = { name: "Boka", id: 3, address: "kamrangichor" };
// console.log(name, id);

const [one, two, three] = [1, 2, 4];
// console.log(three);

const defFunc = (a, b, c = 7) => a + b + c;
// console.log(defFunc(1, 2));

const nested = {
  name: "vehical",
  type: {
    first: "Bike",
    second: ["3 Wheeler", "4 Wheeler"],
    third: {
      one: "Bus",
      two: {
        ex: "Lorry",
        ec: "Truck",
        ev: ["22 Wheeler", "16 Wheeler"],
      },
    },
  },
};

console.log(nested.type.second.two?.ex);
