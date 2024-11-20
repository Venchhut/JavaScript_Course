// 1
// doSomething(function (result) {
//   doSomethingElse(
//     result,
//     function (newResult) {
//       doThirdThing(
//         newResult,
//         function (finalResult) {
//           console.log(`Got the final result: ${finalResult}`);
//         },
//         failureCallback
//       );
//     },
//     failureCallback
//   );
// }, failureCallback);

// 2
// const listOfIngredients = [];

// doSomething()
//   .then((url) => {
//     // `return` keyword now included in front of fetch call.
//     return fetch(url)
//       .then((res) => res.json())
//       .then((data) => {
//         listOfIngredients.push(data);
//       });
//   })
//   .then(() => {
//     console.log(listOfIngredients);
//     // listOfIngredients will now contain data from fetch call.
//   });

// 3
// Promise

// 4
const promise = new Promise((resolve, reject) => {
  resolve("success");
  reject("failure");
});
promise
  .then((result) => console.log(result))
  .catch((error) => console.log(error));

// 5
// use async/await
/* 
async function foo() {
  try {
    const result = await doSomething();
    const newResult = await doSomethingElse(result);
    const finalResult = await doThirdThing(newResult);
    console.log(`Got the final result: ${finalResult}`);
  } catch (error) {
    failureCallback(error);
  }
}

*/
async function myFunction() {
  try {
    const result = await promise;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
myFunction();
// use try/catch
const asyncFunction = async () => {
  try {
    const promise = new Promise((resolve, reject) => {
      resolve("It works!");
    });
    const result = await promise;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

// Call the function
asyncFunction();

// 6

const fetchData = () => {
  return new Promise((resolve, reject) => {
    console.log("Fetching data...");

    // Simulating a delay for an asynchronous operation
    setTimeout(() => {
      const success = true;

      if (success) {
        resolve("Data fetched successfully!");
      } else {
        reject("Failed to fetch data.");
      }
    }, 2000);
  });
};

// Using the Promise
fetchData()
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

//7
const uploadFile = (fileName) => {
  return new Promise((resolve, reject) => {
    console.log(`Uploading ${fileName}...`);

    setTimeout(() => {
      const isUploaded = Math.random() > 0.5; // Simulate success or failure

      if (isUploaded) {
        resolve(`${fileName} uploaded successfully.`);
      } else {
        reject(`Failed to upload ${fileName}.`);
      }
    }, 3000); // Simulated delay of 3 seconds
  });
};

// Using the Promise
uploadFile("image.jpg")
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });

// 8
try {
  const num = 23;
  const result = num.upperCase();
  console.log(result);
} catch (error) {
  console.log("An error occurred", error.message);
}

console.log("code work properly");

// 9

const fetchData2 = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/invalid-endpoint"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("data not fetched", error.message);
  }
};
fetchData2();

// 10
// Function to fetch weather data
const getWeatherData = async (city) => {
  try {
    // Simulating an API endpoint (replace with a real one, e.g., OpenWeather API)
    const apiKey = "your_api_key"; // Replace with a valid API key
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    // Fetching data
    const response = await fetch(url);

    // Check if the response is okay
    if (!response.ok) {
      throw new Error(
        `Failed to fetch weather data for ${city}: ${response.statusText}`
      );
    }

    // Parsing JSON data
    const data = await response.json();

    // Displaying the weather information
    console.log(`Weather in ${data.name}:`);
    console.log(`Temperature: ${(data.main.temp - 273.15).toFixed(2)}°C`);
    console.log(`Description: ${data.weather[0].description}`);
    console.log(`Wind Speed: ${data.wind.speed} m/s`);
  } catch (error) {
    console.error("Error:", error.message);
  }
};

// Function call to fetch weather for a city
getWeatherData("Phnom Penh");

// 11
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

let myPromise = new Promise(function (myResolve, myReject) {
  let x = 0;

  if (x == 0) {
    myResolve(setTimeout(() => myDisplayer("yes,it's fine"), 3000));
  } else {
    myReject("Error");
  }
});

myPromise.then(
  function (value) {
    myDisplayer(value);
  },
  function (error) {
    myDisplayer(error);
  }
);
