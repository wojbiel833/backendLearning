const os = require("os");
// console.log(os);

// console.log("Platform: ", os.platform());
// console.log("Arch: ", os.arch());
// console.log("UserInfo: ", os.userInfo());

const fs = require("fs");

const genderArr = ["M", "F"];
const maleNameArr = [
  "Jan",
  "John",
  "Marcel",
  "Gerard",
  "Kay",
  "James",
  "Cristoph",
];
const femaleNameArr = [
  "Jo",
  "Matilda",
  "Kaya",
  "Lee",
  "Jennefer",
  "Maria",
  "Maya",
];
const surnameArr = [
  "Brown",
  "White",
  "Black",
  "Smith",
  "Jolie",
  "Pitt",
  "Darby",
  "Pearson",
];

const randChoice = (arr) => {
  const arg1 = Math.trunc(Math.random() * arr.length);
  const arg2 = arg1 + 1;

  return arr.slice(arg1, arg2);
};

const people = [];

for (let i = 1; i < 20; i++) {
  const gender = randChoice(genderArr);
  console.log(gender);

  let firstName;
  if (gender == "M") {
    firstName = randChoice(maleNameArr);
  } else firstName = randChoice(maleNameArr);

  const lastName = randChoice(surnameArr);
  console.log(lastName);

  const age = () => {
    const a = Math.trunc(Math.random() * 79);
    console.log(a);

    if (a > 17) {
      return a;
    } else age();
  };
  age();

  const person = {};
  // `{ gender: '${gender}', firstName: '${firstName}', lastName: '${lastName}', age: ${age()} }`;
  person.gender = gender;
  person.firstName = firstName;
  person.lastName = lastName;
  person.age = age();
  console.log(person);
  people.push(person);
}
console.log(people);

const peopleJSON = JSON.stringify(people);
console.log(peopleJSON);

const err = "Something went wrong";

fs.writeFile("people.json", peopleJSON, (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});
