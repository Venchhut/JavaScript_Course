// console.log(document);

// console.dir(document);

document.body.style.backgroundColor = "grey";

const title = "";

const titleDom = document.getElementById("sub-title");

titleDom.textContent += title === "" ? "Nothing" : title;

const demoDom = document.getElementById("demo");

demoDom.textContent = "Hello";
