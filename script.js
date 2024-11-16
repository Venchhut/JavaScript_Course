// 1
//simple object
const user = {
  name: "John",
  age: 30,
};

const admin = {
  name: "Jane",
  age: 28,
};

const moderator = {
  name: "Bob",
  age: 35,
};

console.log(user.age);
console.log(admin.age);
console.log(moderator.name);

// 2
// use Contructor
function User(name, age) {
  this.name = name;
  this.age = age;
  this.isAdmin = () => {
    if (this.name >= "John") {
      return true;
    }
    return false;
  };
}

const user1 = new User("John", 30);
const user2 = new User("Jane", 28);
const user3 = new User("Bob", 35);
console.log(user1.age);
console.log(user2.age);
console.log(user3.name);
console.log(user1.isAdmin());
