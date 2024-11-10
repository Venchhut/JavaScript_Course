// 1

// function hello() {
//   setTimeout(function () {
//     console.log("hello");
//   }, 2000);
// }

// function welcome() {
//   console.log("welcome");
// }

// hello();
// welcome();

// 2
function weather(callback) {
  console.log("hot");
  callback();
}
function season() {
  console.log("rainy");
}
function wait() {
  console.log("wait");
}

weather(wait);

// 3
function sum(callback, x, y) {
  let sumNum = x + y;
  callback(sumNum);
}
function DisplaySum(sumNum) {
  console.log(sumNum);
}
sum(DisplaySum, 78, 20);

// 4

function call(callback) {
  let song = "The day we met";

  console.log(`Do you remember ${song}?`);
  callback();
}
function answer() {
  console.log("let's get it back");
}

call(answer);
