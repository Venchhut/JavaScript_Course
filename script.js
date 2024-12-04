// function
// basic function
// 1
function hello() {
  console.log("this is function");
}

hello();

// 2
function welcome(name, age) {
  console.log(`nice to meet you ${name}`);
  console.log(`i'm ${age} years old`);
}

welcome("seyha", 18);
// 3
// expression function

function sum(x, y) {
  let result = x + y;
  return result;
}
let number = sum(2, 4);
console.log(number);
// console.log(sum(2, 4));

// 4

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
console.log(isEven(10));

// or write ternary operation
function isEven(number) {
  return number % 2 === 0 ? true : false;
}
console.log(isEven(3));

// 5
function isValidEmail(email) {
  if (email.includes("@")) {
    return "Your email is valid";
  } else {
    return "You need to check again";
  }
}
console.log(isValidEmail("example@gmail.com"));
console.log(isValidEmail("examplegmail.com"));

// 6 higher order function

const number3 = [1, 2, 3, 4, 5];
const data = number3.map((num) => num * num);
console.log(data);

// 7 function compositon
const toUpperCase = (str) => str.toUpperCase();
const String = (str) => `${str}!`;
const combine = (str) => String(toUpperCase(str));

console.log(combine("welcome to my world 22"));

// 8 recusion

function factorial(n) {
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

console.log(factorial(10));

function doingSomething(action) {
  console.log(`i'm drinking ${action}`);
}
doingSomething("water");
