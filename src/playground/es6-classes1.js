class Person {
  constructor(name = "anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    return `Hi, I am ${this.name}!`;
  }

  getDescription() {
    return `${this.name} is ${this.age} year(s) old.`;
  }
}

const me = new Person("Fktrctq", 30);
const other = new Person();
console.log(me.getGreeting());
console.log(other.getGreeting());

console.log(me.getDescription());
console.log(other.getDescription());
