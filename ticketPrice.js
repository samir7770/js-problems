//  Quantity    : 0 - 100 --> 100tk
//  Quantity    : 100-200 => 0-100 --> 100tk, 100-200 --> 90tk
//  Quantity    : 200+ => 0-100 --> 100tk, 100-200 --> 90tk, 200+ --> 80tk

const ticketTotal = (quantity) => {
  let price = 0;
  if (quantity <= 100) {
    price = quantity * 100;
  } else if (quantity > 100 && quantity <= 200) {
    let extra = quantity - 100;
    quantity = quantity - extra;
    price = 10000 + extra * 90;
  } else {
    let extra = quantity - 200;
    quantity = quantity - extra;
    price = 19000 + extra * 80;
  }
  return price;
};

console.log(ticketTotal(201));
