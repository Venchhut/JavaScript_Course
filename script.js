//Scope

// Global scope
var global = "velue of global variable";

function myfunc() {
  console.log(global);
}

myfunc();
setTimeout(() => {
  console.log("first", global);
}, 1000);
console.log("the", global);

// function scope
const funcName = () => {
  var name = "hello";
  console.log(name);
};
funcName();
// console.log("an", name);
// this will throw an error

function multiply(a, b) {
  var data = a * b;
  return data;
}
console.log(multiply(4, 3));

// Block scope
if (true) {
  let name = "Socket";
  console.log(name);
}
// console.log(name)
//  this will throw an error

//closure
//A closure is created when a function "remembers" its lexical scope,
// even when the function is executed outside that scope.

for (let i = 0; i < 10; i++) {
  const log = () => {
    console.log(i);
  };
  setTimeout(log, 1000);
}

function alertFun(defaultMessage) {
  return (message = defaultMessage) => {
    alert(`${message}`);
  };
}
const alertMessage = alertFun("get up"); // ✅ Pass the default message
alertMessage(); // Alerts: "get up"
alertMessage("wake up!"); // Alerts: "wake up!"

function outerFunction(outerVar) {
  return function innerFunction(innerVar) {
    console.log(`Outer: ${outerVar}, Inner: ${innerVar}`);
  };
}
const closure = outerFunction("outer value");
closure("inner value");

const multi = (a) => {
  return function (b) {
    return a * b;
  };
};
const result = multi(5);
console.log(result(3));

//example
function createAuthManager() {
  let isLoggedIn = false; // Private variable

  return {
    login() {
      isLoggedIn = true;
      console.log("User logged in.");
    },
    logout() {
      isLoggedIn = false;
      console.log("User logged out.");
    },
    checkStatus() {
      console.log(`User is ${isLoggedIn ? "logged in" : "logged out"}.`);
    },
  };
}

const auth = createAuthManager();

auth.checkStatus(); // User is logged out.
auth.login(); // User logged in.
auth.checkStatus(); // User is logged in.
auth.logout(); // User logged out.
auth.checkStatus(); // User is logged out.

//example 2
function createCart() {
  const cart = []; // Private cart array

  return {
    addItem(item) {
      cart.push(item);
      console.log(`${item} added to the cart.`);
    },
    removeItem(item) {
      const index = cart.indexOf(item);
      if (index > -1) {
        cart.splice(index, 1);
        console.log(`${item} removed from the cart.`);
      } else {
        console.log(`${item} not found in the cart.`);
      }
    },
    viewCart() {
      console.log("Cart contains:", cart.length ? cart.join(", ") : "nothing.");
    },
  };
}

const myCart = createCart();

myCart.addItem("Apple"); // Apple added to the cart.
myCart.addItem("Banana"); // Banana added to the cart.
myCart.viewCart(); // Cart contains: Apple, Banana.
myCart.removeItem("Apple"); // Apple removed from the cart.
myCart.viewCart(); // Cart contains: Banana.
