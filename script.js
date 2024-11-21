// dom navigation : is the process of navigating the document object model.

// .firstelementchild
// .lastelementchild
// .nextelementchild
// .previouselementchild

// .parentelement

// .childnode

// .firstchild

const Data = document.getElementById("list3");
first = Data.firstElementChild;

first.style.color = "red";

// const data2 = document.querySelectorAll("ul");

// Array.from(data2).forEach((Element) => {
//   const first = Element.firstChild;
//   if (first) {
//     first.style.backgroundColor = "green";
//   }
// });

// ---------- .previouselementSibling--------

const check = document.getElementById("blue");

const pre = check.previousElementSibling;

pre.style.color = "red";

// .children

const element1 = document.getElementById("red");

const child = element1.children;

console.log(child);
