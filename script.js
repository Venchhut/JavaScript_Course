// function
// basic function
// 1 simple function without parameters
function hello() {
  console.log("this is function");
}
hello();

// local variable
function speaking() {
  let person = "hela";
  alert(person);
}
speaking();
alert(person); // this will give error because person is local variable

// outer variable
let subject = "javascript";
function learning() {
  let learning = `i'm learning ${subject}`;
  alert(learning);
}
learning();

// 2 function with parameters
function welcome(name, age) {
  console.log(`nice to meet you ${name}`);
  console.log(`i'm ${age} years old`);
}
welcome("seyha", 18);

function showMessage(from, text) {
  alert(from + ":" + text);
}
showMessage("admin", "hello");

// default parameter
function defaultMessage(from, text = "not specified") {
  alert(from + ":" + text);
}
defaultMessage("hehh");
defaultMessage("hehh", undefined); // we can write like this too

// alternative default parameter
function showCout(cout) {
  alert(cout ?? "empty");
}
showCout();
showCout(2);
showCout(0);

//
function multiply(a, b) {
  const data = a * b;
  if (data > 10) {
    console.log(`${data} is greater than 10`);
  } else {
    console.log(`${data} is less than 10`);
  }
}
multiply(10, 3);

// 3
// expression function
function sum(x, y) {
  let result = x + y;
  return result;
}
let number = sum(2, 4);
console.log(number);
// console.log(sum(2, 4));

//
function checkAge(age) {
  if (age >= 18) {
    return true;
  } else {
    return confirm("did you parents allow yet ?");
  }
}
let age = prompt("how old are you?");
if (checkAge(age)) {
  alert("can be access to this web");
} else {
  alert("you can not access to this web");
}

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

const data4 = [40, 32, 33, 43, 56, 7].filter((num) => num % 2 === 0);
console.log("d", data4);

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

//
function doingSomething(action) {
  console.log(`i'm drinking ${action}`);
}
doingSomething("water");

//
function showPrimes(n) {
  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;
    alert(i);
  }
}
function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}
showPrimes(10);
isPrime(4);

//9
// arrow function
const addTwo = (a, b) => {
  const result = a + b;
  return result;
};
console.log(addTwo(30, 45));
