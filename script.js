// 1. document.getElementById() : Element or null
//2. document.getElementsByClassName() : HTMLCollection
//3. document.getElementsByTagName() : HTMLCollection
//4. document.querySelector() : Element or null
//5. document.querySelectorAll() : nodelist

//1
const TitleStyle = document.getElementById("title");
TitleStyle.style.backgroundColor = "yellow";
TitleStyle.style.textAlign = "center";
TitleStyle.style.fontSize = "30px";

TitleStyle.style.alignItems = "center";
//2
const listItems = document.querySelectorAll("li");
listItems[1].style.color = "green";
listItems[2].style.color = "red";

listItems.forEach((item) => {
  item.style.fontSize = "20px";
});
console.log(listItems);

//3
// get elementsbyclassname
// html collection of elements with the same class name is returned.

const happy = document.getElementsByClassName("fun");
happy[1].style.fontSize = "20px";
for (let item of happy) {
  item.style.backgroundColor = "blue";
}
// we can not use foreach directly on html collection because it is not an array. so i make it into an array that we can use foreach
Array.from(happy).forEach((item) => (item.style.textAlign = "center"));

console.log(happy);

// 4
// get element by tagName
//  is used to select elements by their tag name.

const h3Element = document.getElementsByTagName("h3");
h3Element[0].style.backgroundColor = "grey";
h3Element[0].style.textAlign = "center";
console.log(h3Element);

const LiElement = document.getElementsByTagName("li");

Array.from(listItems).forEach((item) => {
  item.style.textAlign = "center";
  item.style.color = "red";
});

// 5
// querySelector
// querySelector() is used to select a single element based on a CSS selector.
// First element or null
const demoElement = document.querySelector("#demo");
demoElement.style.textAlign = "center";
demoElement.style.fontSize = "20px";
demoElement.style.color = "green";

// querySelectorAll
// querySelectorAll() is used to select all elements that match a CSS selector.
// notelist

const ulElement = document.querySelectorAll("ul");
// ulElement[0].style.backgroundColor = "grey";
// ulElement[0].style.textAlign = "center";
console.log(ulElement);

ulElement.forEach((item) => (item.style.backgroundColor = "grey"));
