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

function DisplayPerson(props) {
  const { name, age, address } = props;
  console.log(`name:${name}`);
  console.log(`age:${age}`);
  console.log(address);
}

DisplayPerson(person);
// with another way
function DisplayPerson2({ name, age, address }) {
  console.log(`name2: ${name}`);
  console.log(`age2: ${age}`);
  console.log(address);
}
DisplayPerson2(person);

//6

const user = [
  {
    phone: "123456789",
    email: "9bKtC@example.com",
  },
  {
    phone: "43950-3",
    email: "9bddKtC@example.com",
  },
];

const { phone, email } = user[1];

console.log(phone, email);

//7
//extract value from array

const map = ["pp", "sr", "btb"];
[a, b, c] = map;
console.log(a, b, c);

//8

const yoka = {
  place: "kathmandu",
  address3: "kathmandu",
  age3: 20,
  job: "student",
  family: ["mom", "dad", "brother", "sister"],
};

const { place, address3, age3, ...hehe } = yoka;
console.log(place);
console.log(address);
console.log(age);
console.log(hehe);

//9
//remain variables
const person4 = {
  name4: "Tena44",
  age4: 20,
};
const { name4: fullname, age4: year } = person4;

console.log(fullname);
console.log(age);

//10
const animal = ["cat", "dog", "lion", "tiger"];

const [x, y, ...all] = animal;
console.log(x);
console.log(y);
console.log(all);

//11
//nested object destructuring

const user5 = {
  work: "developer",
  placework: {
    locate: "Siempre Viejo",
    city: "Kathmandu",
    country: "camboya",
  },
};
const {
  work,
  placework: { locate, city, ...yooo },
} = user5;
console.log(work);
console.log(locate);
console.log(city);
console.log(yooo);

console.log(user5.work);

//12
// destructuring in functions

function Sport({ football, basket, ...yeyeyey }) {
  // const { volleyball } = yeyeyey;

  console.log(football, basket, yeyeyey);
}
Sport({
  football: "soccer",
  basket: "basketball",
  volleyball: "volleyball",
  ekl: "ekl",
});
