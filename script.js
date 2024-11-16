const Products = [
  {
    id: 1,
    name: "Laptop",
    price: 20000,
    description: "This is a laptop",
    category: "Electronics",
  },
  {
    id: 2,
    name: "Phone",
    price: 5000,
    description: "This is a phone",
    category: "Smart phones",
  },
  {
    id: 3,
    name: "Tablet",
    price: 10000,
    description: "This is a tablet",
    category: "Electronics",
  },
];

console.log(Products[1].category);
console.log(Products[2].name);
console.log(Products);

// Add a new product
// push() method adds an element to the end of an array
Products.push({
  id: 4,
  name: "Camera",
  price: 3000,
  description: "This is a camera",
  category: "Electronics",
});

console.log(Products);

// Foreach loop
// forEach() method executes a specified function once for each array element

Products.forEach((item) => {
  console.log(item.name);
});

// Map method
// map() method creates a new array with the results of calling a function for every array element

const newProducts = Products.map((item) => {
  console.log(item.price);
});

// Filter method
// filter() method creates a new array with all elements that pass the test implemented by the provided function

const filteredProducts = Products.filter((item) => {
  return item.price >= 5000;
});

console.log(filteredProducts.length);

// Reduce method
// reduce() method executes a reducer function (that you provide) on each element of the array, resulting in a single output value

const total = Products.reduce((acc, item) => {
  return acc + item.price;
}, 0);

console.log(total);
