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

// const filteredData = data.reduce((result, current) => {
//   // Check if the address place already exists in the result array
//   const exists = result.find(
//     (item) => item.address.place === current.address.place
//   );

//   if (!exists) {
//     // If not exists, add to the result array
//     result.push(current);
//   } else {
//     // If exists, append the name to the existing object
//     exists.name = Array.isArray(exists.name)
//       ? [...exists.name, current.name]
//       : [exists.name, current.name];
//   }

//   return result;
// }, []);

// console.log(filteredData);

const filteredData = data.reduce((result, current) => {
  return result.includes(current.address.place)
    ? result
    : [current.address.place, ...result];
}, []);

console.log(filteredData);
