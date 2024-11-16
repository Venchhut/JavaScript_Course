// 1

// const person = {
//   fullName: "Naruto Uzumaki",
//   position: "Jujutsu Kaisen",
//   age: 19,
//   job: "Ninja",
//   hobbies: ["reading manga", "watching anime", "playing video games"],
//   address: {
//     city: "Konoha",
//     state: "Hidden Leaf Village",
//     country: "Naruto Land",
//     postalCode: 12345,
//   },
// };

// console.log(person.fullName);
// console.log(person.hobbies[0]);
// console.log(person.hobbies[2]);
// console.log(person.address.city);

// 2

class Person {
  constructor(fullName, position, age, job, hobbies, ...address) {
    this.fullName = fullName;
    this.position = position;
    this.age = age;
    this.job = job;
    this.hobbies = hobbies;
    this.address = new Address(...address);
  }
}

class Address {
  constructor(street, city, state) {
    this.street = street;
    this.city = city;
    this.state = state;
  }
}

const person = new Person(
  "Naruto Uzumaki",
  "Jujutsu Kaisen",
  19,
  "Ninja",
  ["reading manga", "watching anime", "playing video games"],
  "Konoha",
  "Hidden Leaf Village",
  "Naruto Land",
  12345
);
console.log(person.hobbies);
console.log(person.address.state);

// 3

let Persons = {
  name: "Victor",
  contact: {
    phone: "123-456-7890",
    email: "Rakie@example.com",
    address: {
      street: "123 maere street",
      city: "phnom penh",
    },
  },
};
console.log(Persons.contact.email);
console.log(Persons.contact.address.city);
