//1
//for each : executes function for each element in the array
const arr1 = [1, 2, 3];
arr1.forEach((element) => {
  element = element * 2;
  console.log(element);
});

//2
//map() : transform each element and return new array
const days = ["monday", "tuesday", "wednesday"];
const dailyDay = days.map((day) => {
  return day;
});
console.log(dailyDay);
// mapping with complex data
const complexData = [
  {
    id: 1,
    name: "John Doe",
    age: 30,
    address: {
      street: "123 Main St",
      city: "New York",
      country: "USA",
    },
    hobbies: ["Reading", "Traveling", "Swimming"],
    orders: [
      { orderId: 101, product: "Laptop", price: 1200 },
      { orderId: 102, product: "Phone", price: 800 },
    ],
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 25,
    address: {
      street: "456 Elm St",
      city: "Los Angeles",
      country: "USA",
    },
    hobbies: ["Cooking", "Dancing"],
    orders: [
      { orderId: 103, product: "Tablet", price: 600 },
      { orderId: 104, product: "Headphones", price: 200 },
    ],
  },
  {
    id: 3,
    name: "Alice Johnson",
    age: 35,
    address: {
      street: "789 Oak St",
      city: "Chicago",
      country: "USA",
    },
    hobbies: ["Painting", "Cycling"],
    orders: [
      { orderId: 105, product: "Camera", price: 1500 },
      { orderId: 106, product: "Smartwatch", price: 300 },
    ],
  },
];

const listNameftAge = complexData.map((user) => ({
  name: user.name,
  age: user.age,
}));
console.log("listNameftAge", listNameftAge);
const displayFullAddress = complexData.map((addr) => addr.address);
console.log("address", displayFullAddress);
const favHobbie = complexData.map((hobie) => hobie.hobbies[1]);
console.log(`my favorite hobbie is ${favHobbie}`);
const listOrder = complexData.map((r) => r.orders.find((o) => o.price > 500));
console.log("order by user", listOrder);

//3
// filter() : return new array based on the condition
const arr2 = [3, 4, 5, 6];
const oddNumber = arr2.filter((num) => {
  return num % 2 !== 0;
});
console.log(oddNumber);
//
const userInfo = [
  {
    id: "1",
    age: 13,
  },
  {
    id: "2",
    age: 28,
  },
  {
    id: "3",
    age: 18,
  },
];
const adults = userInfo.filter((user) => user.age >= 18);
console.table(adults);
//

//4
// reduce(): apply the function to reduce the array to a sigle value
const prices = [1, 23, 34, 343, 433];
const total = prices.reduce(sum);
function sum(accumulator, element) {
  // a1 + e2 = 24 , 24 + e3 = 58, 58 + e4 = 401, 401 + e5 = 834
  return accumulator + element;
}
console.log(`my total value is $${total}`);
//
const arr3 = [1, 2, 3, 4];
const sum = arr3.reduce((acc, cur) => {
  return acc + cur;
});
console.log(sum);

// Shopping cart example
const cart = [
  { item: "Laptop", price: 999 },
  { item: "Mouse", price: 29 },
  { item: "Keyboard", price: 79 },
  { item: "Monitor", price: 399 },
];

const totalPrice = cart.reduce((total, item) => total + item.price, 0);
console.log(`Total cart value: $${totalPrice}`);

// a. Calculate average of grades
const grades = [85, 92, 78, 95, 88];
const average = grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
console.log(`Class average: ${average}`); // 87.6

// b. Count word frequency
const words = ["apple", "banana", "apple", "cherry", "banana", "apple"];
const wordCount = words.reduce((acc, word) => {
  acc[word] = (acc[word] || 0) + 1;
  return acc;
}, {});
console.log(wordCount); // { apple: 3, banana: 2, cherry: 1 }

// c. Group people by age
const people = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Bob", age: 25 },
  { name: "Alice", age: 30 },
];
const groupedByAge = people.reduce((groups, person) => {
  const age = person.age;
  groups[age] = groups[age] || [];
  groups[age].push(person.name);
  return groups;
}, {});
console.log(groupedByAge);
// {
//   '25': ['John', 'Bob'],
//   '30': ['Jane', 'Alice']
// }

// d. Find maximum value
const numbers = [23, 55, 12, 89, 34];
const max = numbers.reduce((max, current) => Math.max(max, current));
console.log(`Maximum value: ${max}`);

//5
//find(): return the first element that matches the condition
const users5 = [
  { id: 1, name: "bopha" },
  { id: 2, name: "sopheak" },
  { id: 3, name: "piseth" },
  { id: 4, name: "ratanak" },
];
const foundUser = users5.find((user) => {
  return user.id === 4;
});
console.log(foundUser);
//use includes()
const foundUser2 = users5.find((user) => {
  return user.name.includes("sopheak");
});
console.log(foundUser2);

//6
//
const data = [
  {
    name: { id: 1, nameE: "bopha" },
    address: { id: 1, place: "siem reap" },
  },
  {
    name: { id: 2, nameE: "sopheak" },
    address: { id: 2, place: "siem reap" },
  },
  {
    name: { id: 3, nameE: "piseth" },
    address: { id: 3, place: "battambang" },
  },
  {
    name: { id: 4, nameE: "ratanak" },
    address: { id: 4, place: "sihanoukville" },
  },
];
// using reduce
const filteredData = data.reduce((result, current) => {
  // Check if the address place already exists in the result array
  const exists = result.find(
    (item) => item.address.place === current.address.place
  );

  if (!exists) {
    // If not exists, add to the result array
    result.push(current);
  } else {
    // If exists, append the name to the existing object
    exists.name = Array.isArray(exists.name)
      ? [...exists.name, current.name]
      : [exists.name, current.name];
  }

  return result;
}, []);
console.log(filteredData);

// using Set in js
const filteredDataSet = data.reduce((result, current) => {
  const addressSet = new Set(result.map((item) => item.address.place));
  if (!addressSet.has(current.address.place)) {
    addressSet.add(current.address.place);
    result.push(current);
  } else {
    const existingAddress = result.find(
      (item) => item.address.place === current.address.place
    );
    existingAddress.name = Array.isArray(existingAddress.name)
      ? [...existingAddress.name, current.name]
      : [existingAddress.name, current.name];
  }
  return result;
}, []);
console.log(filteredDataSet);

// using reduce
const filteredData2 = data.reduce((result, current) => {
  JSON.stringify(result);
  return result.includes(current.address.place)
    ? result
    : [current.address.place, ...result];
}, []);
console.log(filteredData2);

const filteredData3 = data.reduce((result, current) => {
  const addressSet = new Set(result);
  if (!addressSet.has(current.address.place)) {
    addressSet.add(current.address.place);
  }
  return [...addressSet];
}, []);
console.log(filteredData3);

// rest operator
// use ... for rest operator
const arrData = [
  {
    id: "1",
    relation: {
      id: "1",
      name: "test",
    },
  },
  {
    id: "2",
    relation: {
      id: "2",
      name: "test2",
    },
  },
];
const num = [1, 2, 3];
num.push(34);

const allCombine = [...arrData, ...num];
console.log(allCombine, allCombine.length);
