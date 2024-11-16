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

const newCount2 = Count.map(function (num) {
  return num.toLocaleString();
});
console.log(newCount2);
