// expression function

// const Welcome = function () {
//   console.log("hello");
// };

// setTimeout(Welcome, 2000);

setTimeout(function () {
  console.log("hello");
}, 2000);

// 1
const numbers = [1, 2, 3, 4, 5];
const newNumbers = numbers.map(function (num) {
  return num * 2;
});
console.log(newNumbers);

//2
const Count = [1, 2, 3, 4, 56];
const newCount = Count.filter(function (num) {
  return num % 2 !== 0;
});
console.log(newCount);

//3
const newCount2 = Count.map(function (num) {
  return num.toLocaleString();
});
console.log(newCount2);

//4
function sayHi() {
  alert("hello");
}
let func = sayHi;
func(); // run the copy of the function
sayHi();

//5 function as method
const person = {
  name: "van thdang",
  age: 20,
  sayWelcome: function () {
    console.log(`hello ${this.name}`);
  },
};
person.sayWelcome();

//function expression in Array
const Members = [
  function (x, y) {
    return x + y;
  },
  function (x, y) {
    return x - y;
  },
];
console.log(Members[0](2, 3));
console.log(Members[1](3, 4));

// function expression with closure
const createCounter = function () {
  let counter = 1;
  return function () {
    counter += 1;
    return counter;
  };
};
const counter = createCounter();
console.log(counter());
console.log(counter());
