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
