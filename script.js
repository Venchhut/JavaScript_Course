//1
//for each : executes function for each element in the array
const arr1 = [1, 2, 3];
arr1.forEach((element) => {
  console.log(element);
});

//2
//map() : transform each element and return new array
const days = ["monday", "tuesday", "wednesday"];
const dailyDay = days.map((day) => {
  return day;
});
console.log(dailyDay);

//3
// filter() : return new array based on the condition
const arr2 = [3, 4, 5, 6];
const oddNumber = arr2.filter((num) => {
  return num % 2 !== 0;
});
console.log(oddNumber);

//4
// reduce(): apply the function to reduce the array to a sigle value
const arr3 = [1, 2, 3, 4];
const sum = arr3.reduce((acc, cur) => {
  return acc + cur;
});
console.log(sum);

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
