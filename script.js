//
// const x = 1;
// {
//   console.log(x); // Uncaught ReferenceError: Cannot access 'x' before initialization
//   const x = 2;
// }

//
console.log(name12); // Output: undefined (because only the declaration is hoisted)
var name12 = "John";
console.log(name12); // Output: John

// behide the scence how it works
var name13; // Hoisted declaration
console.log(name13); // undefined
name13 = "John"; // Assignment
console.log(name13); // John

//
{
  var y = 11;
}
console.log(y);

//
sayHello(); // ✅ Works! Output: "Hello, World!"
function sayHello() {
  console.log("Hello, World!");
}

//
greet(); // ❌ ReferenceError: Cannot access 'greet' before initialization
const greet = function () {
  console.log("Hi!");
};

//
function sumFun(a, b) {
  return a + b;
}
const sumConst = (a, b) => a + b;
console.log(sumFun(1, 2)); //3
console.log(sumConst(1, 2)); //3

//
const sumConst1 = (a, b) => a + b;
console.log(sumFun1(1, 4)); //5
console.log(sumConst1(1, 4)); //5
function sumFun1(a, b) {
  return a + b;
}

//
console.log(sumFun2(1, 5));
console.log(sumConst2(1, 5)); //Uncaught ReferenceError: Cannot access 'sumConst2' before initialization
function sumFun2(a, b) {
  return a + b;
}
const sumConst2 = (a, b) => a + b;
