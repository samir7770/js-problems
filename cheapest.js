let phones = [
  {
    brand: "Samsung",
    Model: "Galaxy s8",
    Year: 2017,
    Price: 30000,
    quantity: 3,
  },
  { brand: "Symphony", Model: "W68", Year: 2013, Price: 8000, quantity: 4 },
  {
    brand: "Huawei",
    Model: "Honor Holly",
    Year: 2015,
    Price: 14000,
    quantity: 1,
  },
  {
    brand: "Huawei",
    Model: "Honor Holly",
    Year: 2015,
    Price: 1000,
    quantity: 7,
  },
];

// Checpest

let cheaper = phones[0].Price;
let cheapestPhone = phones[0];
for (let i = 0; i < phones.length; i++) {
  let cheapPrice = phones[i].Price;
  if (cheaper > cheapPrice) {
    cheaper = phones[i].Price;
    cheapestPhone = phones[i];
  }
}

// console.log(cheapestPhone);

// Total

let total = 0;
for (let i = 0; i < phones.length; i++) {
  total += phones[i].Price;
}

// console.log(total);

// total with quantity

let totalPrice = 0;
for (let i = 0; i < phones.length; i++) {
  let itemTotal = phones[i].Price * phones[i].quantity;

  totalPrice += itemTotal;
}
console.log(totalPrice);
