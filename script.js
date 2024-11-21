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
