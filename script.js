// 1

// function hello() {
//   setTimeout(function () {
//     console.log("hello");
//   }, 2000);
// }

// function welcome() {
//   console.log("welcome");
// }

// hello();
// welcome();

// 2
function weather(callback) {
  console.log("hot");
  callback();
}
function season() {
  console.log("rainy");
}
function wait() {
  console.log("wait");
}
weather(wait);

// 3
function sum(callback, x, y) {
  let sumNum = x + y;
  callback(sumNum);
}
function DisplaySum(sumNum) {
  console.log(sumNum);
}
sum(DisplaySum, 78, 20);

// 4
function call(callback) {
  let song = "The day we met";

  console.log(`Do you remember ${song}?`);
  callback();
}
function answer() {
  console.log("let's get it back");
}
call(answer);

//5
function fetchData(b) {
  setTimeout(() => {
    console.log("Data fetched");
    b();
  }, 1000);
}
function display() {
  console.log("Data displayed");
}
fetchData(display);

//6
function greet(name) {
  console.log(`Hello ${name}`);
}
function processUserInput(callback) {
  let name = "lucy";
  callback(name);
}
processUserInput(greet);

//7 callback with array method
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function isEven(num) {
  return num % 2 === 0;
}
const evenNumbers = numbers.filter(isEven);
console.log(evenNumbers);

//8
const names = ["john", "lucy", "peter", "jane", "mary"];
function isName(name) {
  return name.length > 4;
}
const longNames = names.filter(isName);
console.log(longNames);

//9 callback hell
function firstTask(callback) {
  setTimeout(() => {
    console.log("First task completed");
    callback();
  }, 1000);
}
function secondTask(callback) {
  setTimeout(() => {
    console.log("Second task completed");
    callback();
  }, 1000);
}
function thirdTask(callback) {
  setTimeout(() => {
    console.log("Third task completed");
    callback();
  }, 1000);
}
firstTask(() => {
  secondTask(() => {
    thirdTask(() => {
      console.log("All tasks completed");
    });
  });
});

//10 handling error with callback
function readFile(filename, callback) {
  setTimeout(() => {
    if (filename === "valid.txt") {
      callback(null, "File content");
    } else {
      callback("File not found", null);
    }
  }, 1000);
}

function processFile(error, content) {
  if (error) {
    console.error("Error:", error);
  } else {
    console.log("Content:", content);
  }
}

readFile("valid.txt", processFile);
readFile("invalid.txt", processFile);

//11
// Example 2: Real-world scenario - Form submission
console.log("Example 2: Form Submission with Callbacks");

function validateForm(formData, callback) {
  setTimeout(() => {
    const errors = [];

    if (!formData.username) {
      errors.push("Username is required");
    }
    if (!formData.email) {
      errors.push("Email is required");
    }

    if (errors.length > 0) {
      callback(errors, null);
    } else {
      callback(null, "Form validation successful");
    }
  }, 1500);
}
function submitForm(formData, callback) {
  validateForm(formData, (errors, result) => {
    if (errors) {
      callback(`Validation failed: ${errors.join(", ")}`);
    } else {
      // Simulate sending data to server
      setTimeout(() => {
        callback("Form submitted successfully!");
      }, 1000);
    }
  });
}
// Test the form submission
const formData = {
  username: "john_doe",
  email: "tDy0g@example.com",
};
submitForm(formData, (result) => {
  console.log(result);
});

//12
