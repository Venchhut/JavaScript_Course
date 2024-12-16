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
