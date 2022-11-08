const student = {
  name: "Fredie",
  age: 26,
};
// console.log(student["age"]);

let data = {
  location: [
    {
      latitude: "35.4 , 37.6",
      longitude: "98.454 , 34.45",
      city: "hydrabad",
      country: "India",
    },
  ],
};

// console.log(data.location[0].city);
// console.log(data["location"][0]["city"]);

const obj = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
  phone: "1-770-736-8031 x56442",
  website: "hildegard.org",
  company: {
    name: "Romaguera-Crona",
    catchPhrase: "Multi-layered client-server neural-net",
    bs: "harness real-time e-markets",
  },
};

// console.log(obj.email);
// console.log(obj["email"]);

// console.log(obj.address.geo.lat);
console.log(obj.company.name);
