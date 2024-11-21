// 1
// Array start with index 0
const singer = ["vanda", "G-devit", "Tena", "Songha"];
console.log(singer[0]);
console.log(singer[1]);
console.log(singer[2]);
console.log(singer[3]);
// singer.push("Khmer muy jivit"); add new to array
// singer.pop();
// singer.unshift("Rego");
let NumOfsinger = singer.length;
let index = singer.indexOf("vanda");
console.log(NumOfsinger);
console.log(index);

// 2
const singers = ["vanda", "G-devit", "Tena", "Songha"];

// for (i = 0; i <= singers.length; i++) {
//   console.log(singers[i]);
// }

// 3
singers.sort().reverse();
for (let singer of singers) {
  console.log(singer);
}

//4
// spread operator

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const newArray = [1, 2, ...numbers];

console.log(newArray);

//5
// rest operator
const [first, ...rest] = [1, 2, 3, 4];
console.log(first);
console.log(rest);

//6
//destructuring
const number1 = [10, 20, 30, 40];
const [a, b, , d] = number1;

console.log(a, b, d);

//7
//map
// use map to create a new array

const Counts = [1, 2, 3];
const squared = Counts.map((num) => num ** 2);
console.log(squared);

//8
// reduce
const items = [
  { category: "fruit", name: "apple" },
  { category: "fruit", name: "banana" },
  { category: "vegetable", name: "carrot" },
];

const grouped = items.reduce((acc, item) => {
  acc[item.category] = acc[item.category] || [];
  acc[item.category].push(item.name);
  return acc;
}, {});

console.log(grouped);
