//no arguments in arrow
const add = (a, b) => {
  //console.log(arguments);
  return a + b;
};
console.log(add(55, 1));

//this no bound
const user = {
  name: "fktrctq",
  cities: ["1", "2", "3"],
  printPlaces() {
    const cityMessages = this.cities.map(
      city => (this.name = "lived in " + city)
    );
    return cityMessages;
  }
};

console.log(user.printPlaces());

//-----------------------------------------------------

const multiplier = {
  numbers: [1, 2, 3, 4],
  multiplier: 3,
  multiply() {
    const multNums = this.numbers.map(num => num * this.multiplier);
    return multNums;
  }
};

console.log(multiplier.multiply());
