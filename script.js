//1

const singers = ["vanda", "dv", "tena", "joma"];

singers.map((singer) => {
  singer = singer.toUpperCase();

  console.log(singer);
});

// 2

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.map((number) => {
  const result = Math.sqrt(number, 2);
  console.log(result);
});

// 3
const items = [
  "apple",
  "banana",
  "orange",
  "grape",
  "kiwi",
  "strawberry",
  "blueberry",
  "lemon",
  "peach",
  "plum",
];

items.map((_, idex) => {
  console.log(`${idex + 1}. ${items[idex]}`);
});
