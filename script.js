// type of the async operation
// Callback
// Promise
// Async/Await
// Event listener...

// 1
//async function
setTimeout(() => {
  console.log("Task 1");
}, 2000);
console.log("Task 2");
console.log("Task 3");
console.log("Task 4");

//
console.log("first");
setTimeout(() => {
  console.log("this will be executed after 1 seconds");
}, 1000);
console.log("end the program");

// 2
function task(callback) {
  setTimeout(() => {
    console.log("take a shower");
    callback();
  }, 2000);
}
function follow() {
  console.log("Task 2:: drink water");
  console.log("Task 3: eat breakfast");
  console.log("Task 4: go to work");
}
task(follow);

function job(callback) {
  setTimeout(() => {
    console.log("program is running");
    callback();
  }, 2000);
}
function enrivement() {
  console.log("peace of mind");
}
job(enrivement);

//3  using promise
function asyncFunction() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Task 1");
      resolve();
    }, 2000);
  });
}
asyncFunction().then(() => {
  console.log("Task 2");
  console.log("Task 3");
  console.log("Task 4 completed");
});

function workTime() {
  return new Promise((resolve, reject) => {
    const workTime = "8 hours";
    if (workTime === "8 hours") {
      resolve();
    } else {
      reject();
    }
  });
}
workTime()
  .then(() => {
    console.log("In working time now");
  })
  .then(() => {
    console.log("Task 2");
    console.log("Task 3");
  })
  .catch(() => {
    console.log("Can doing something else with the free time ");
  });

// 4 using async/await
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}
fetchData();

async function people() {
  try {
    const res = await fetch("https://swapi.dev/api/people/1");
    if (!res.ok) {
      throw new Error(`something went wrong ${res.status}`);
    }
    const person = await res.json();
    console.log(person.name);
  } catch (error) {
    console.log(error);
  }
}
people();
