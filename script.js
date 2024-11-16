//1
// use to swap values
let a = 1;
let b = 2;

[a, b] = [b, a];

console.log(a);
console.log(b);

//2
//  swap 2 element in array

const foods = ["apple", "banana", "orange", "grape", "pineapple"];

[foods[0], foods[2]] = [foods[2], foods[0]];

console.log(foods);

// 3
// assign multiple values to multiple variables

[first, second, third, ...rest] = foods;

console.log(first);
console.log(second);
console.log(third);
console.log(rest);

// 4
// object destructuring

const person = {
  name: "Tena Wong",
  age: "20",
  address: "Kathmandu",
};

const { name, age, address, job = "unemployed" } = person;

console.log(`name:${name}`);
console.log(age);
console.log(address);
console.log(job);

// 5
// destructuring in functions parameters

function DisplayPerson({ name, age, address }) {
  console.log(`name:${name}`);
  console.log(`age:${age}`);
  console.log(address);
}

DisplayPerson(person);
