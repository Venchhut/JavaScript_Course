// 1
// expression function"

// setTimeout(function hello() {
//   console.log("Hello");
// }, 3000);

//use arrow function
setTimeout(() => console.log("Hello"), 2000);

//2

const people = (name, country) => {
  console.log(`who are you? my name is  ${name} i'm from ${country}`);
};

people("mohamed", "egypt");
// 3
const numbers = () => {
  const arr = [1, 2, 3, 4, 5, 6];
  arr.map((num) => {
    if (num % 2 !== 0) {
      return console.log(num);
    }
  });
};
numbers();

//4
const Items = () => {
  const arr = [
    {
      name: "david",
      age: 20,
    },
    {
      name: "mohamed",
      age: 22,
    },
  ];

  arr.map((item) => {
    return console.log(` hello ${item.name} i'm ${item.age}`);
  });
};
Items();

//5
const products = [
  { id: 1, name: "apple", price: 20 },
  {
    id: 2,
    name: "banana",
    price: 30,
  },
  {
    id: 3,
    name: "orange",
    price: 40,
  },
];
const category3 = () => {
  products.map((product) => {
    return console.log(product);
  });
};
category3();
// const Category = () => {
//   products.map((product) => {
//     return console.log(product);
//   });
// };

// Category();
const Category = () => {
  products.map((product) => {
    return console.log(product.name);
  });
};
Category();
//6
// simple function
function add(num1, num2) {
  const sum = num1 + num2;
  return sum;
}

console.log(add(2, 4));

// use  arrow function
const add1 = (num1, num2) => {
  const sum = num1 + num2;
  return sum;
};
console.log(add1(2, 4));

//7

function data() {
  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
}
const data10 = () => {
  const products = [
    { id: 1, name: "apple", price: 20 },
    {
      id: 2,
      name: () => {
        const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        console.log(arr.map((num) => num * 2));
      },
    },
  ];
  console.log(products.filter((product) => product.name).map((v) => v.name));
};
data10();
