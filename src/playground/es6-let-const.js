var nameVar = "test";
var nameVar = "hahah";
console.log("nameVar ", nameVar);

let nameLet = "jajajja";
nameLet = "test also";
console.log("nameLet ", nameLet);

const nameConst = "constant";
console.log("nameConst", nameConst);

function getPetName() {
  var petName = "jesus";
  return petName;
}

const petName = getPetName();
console.log(petName);

//block scope

let firstName;

var fullName = "fktrctq bdfyjd test unit";
if (fullName) {
  const firstName = fullName.split(" ")[3];
  console.log(firstName);
}

console.log(firstName);
