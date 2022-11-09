class Student {
  name;
  id;
  address;
  constructor(yourname, yourid, youraddress) {
    this.name = yourname;
    this.id = yourid;
    this.address = youraddress;
  }
}

class Boys extends Student {
  class;
  shift;
  dress;
  constructor(yourname, yourid, youraddress, yourClass, shift, dressCode) {
    super(yourname, yourid, youraddress);
    this.class = yourClass;
    this.shift = shift;
    this.dress = dressCode;
  }
}

const abir = new Student("Abir", 2, "Dhaka");
// console.log(abir);

const sroot = new Boys("Sroot", 3, "Pabna", 7, "Morning", "White");
console.log(sroot);
