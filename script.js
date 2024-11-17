// 1
//async function
setTimeout(() => {
  console.log("Task 1");
}, 2000);
console.log("Task 2");
console.log("Task 3");
console.log("Task 4");

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

// 3

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
  console.log("Task 4");
});

// 4

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
