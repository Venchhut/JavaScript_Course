// function
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
