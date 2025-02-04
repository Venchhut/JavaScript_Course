//1
const people = {
  name: "sokha",
  age: 20,
  location: "Siem Reap",
  greet() {
    console.log(`Hello, ${this.name}!`);
  },
};

console.log(people.greet());

//
let spaceship = {
  crew: {
    captain: {
      name: "Lily",
      degree: "Computer Engineering",
      cheerTeam() {
        console.log("You got this!");
      },
    },
    "chief officer": {
      name: "Dan",
      degree: "Aerospace Engineering",
      agree() {
        console.log("I agree, captain!");
      },
    },
    medic: {
      name: "Clementine",
      degree: "Physics",
      announce() {
        console.log(`Jets on!`);
      },
    },
    translator: {
      name: "Shauna",
      degree: "Conservation Science",
      powerFuel() {
        console.log("The tank is full!");
      },
    },
  },
};

for (let key in spaceship) {
  console.log(`${key}: ${spaceship[key]}`);
}

for (let keyobj in spaceship.crew) {
  console.log(`${keyobj}: ${spaceship.crew[keyobj]}`);
}

//2

const inventory = [
  { name: "asparagus", type: "vegetables", quantity: 5 },
  { name: "bananas", type: "fruit", quantity: 0 },
  { name: "goat", type: "meat", quantity: 23 },
  { name: "cherries", type: "fruit", quantity: 5 },
  { name: "fish", type: "meat", quantity: 22 },
];

for (let i = 0; i < inventory.length; i++) {
  console.log(`we have ${inventory[i].quantity} ${inventory[i].name}s`);
}

// function checkInventory(item) {
//   let count = 0;
//   for (let i = 0; i < inventory.length; i++) {
//     if (inventory[i].name === item) {
//       count += inventory[i].quantity;
//     }
//   }
//   return count;
// }
// checkInventory("fish");

// 3
// Dynamic Property Keys
const dynamicObject = "welocme";
const obj = {
  id: 1,
  address: {
    city: "New York",
    street: "Times Square",
    number: 123,
  },
  [dynamicObject]: "hello",
};
console.log(obj.welocme);
console.log(obj.address);

//4
const welcome = {
  name: "JavaScript",
  greet() {
    return `Hello, ${this.name}!`;
  },
};

console.log(welcome.greet());

// 5
//Object Factory Patterns
function createUser(name, role) {
  return {
    name,
    role,
    isActive: true,
    describe() {
      return `${this.name} is a ${this.role}`;
    },
  };
}

const user = createUser("Sokha", "Developer");
console.log(user.describe());

//6
//Object as a Data Model
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  login() {
    console.log(`${this.name} logged in.`);
  }

  logout() {
    console.log(`${this.name} logged out.`);
  }
}

const user1 = new User("Youdka", "yokda@example.com");
user1.login();
user1.logout();

//7
// object destructuring
const Person = {
  id: 1,
  name: "Sokahe",
  address: {
    city: "Siem Reap",
    country: "Cambodia",
  },
};

const {
  name,
  address: { city, country },
} = Person;
console.log(name, city, country);

//

const myObject = {
  locate: "test",
  greet() {
    console.log(`first ${this.locate}`);
  },
};
myObject.greet();
//

const myobj = {
  name: "John",
  age: 30,
  greet: function () {
    console.log(
      `Hello, my name is ${this.name} and I am ${this.age} years old.`
    );
  },
};
console.log(myobj.greet());
//

function greet() {
  console.log("hi");
}
function execute(fn) {
  fn();
}
execute(greet);

function sub(a, b) {
  const c = a + b;
  console.log(c);
}
function execute(subco) {
  subco(1, 2);
}
console.log(execute(sub));
