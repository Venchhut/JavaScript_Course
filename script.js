//Sytax
// forEach(callbackFn)
// forEach(callbackFn, thisArg)

//1
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(trible);
numbers.forEach(multiple);
numbers.forEach(Display);

function Display(element) {
  console.log(element + " ");
}

function multiple(element, index, array) {
  array[index] = element * 2;
}

function trible(element, index, array) {
  array[index] = element * 3;
}

//2
const person = ["tena", "vanda", "jane"];

function singer(dara) {
  console.log(dara);
}
person.forEach(singer);

//3
const friuts = ["apple", "banana", "orange", "grapes"];

friuts.forEach((friut) => {
  console.log(friut);
});

//4
const Country = ["Nigeria", "Ghana", "Nigeria", "Nigeria"];

function capital(element, index, array) {
  array[index] = element.toUpperCase();
}
Country.forEach(capital);
console.log(Country);

//5
