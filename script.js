//Template literals are enclosed by backticks (`) instead of single (') or double (") quotes
//1. String Concatenation
const name1 = "John";

const hello = `welcome ${name1} to this class.`;

console.log(hello);

//2. String Interpolation
const age = 30;
const message = `I am ${age} years old.`;
console.log(message);

//3. Multiline Strings
const multiline = `This is a multiline string
that spans multiple lines.`;
console.log(multiline);

//4. String Concatenation and Interpolation
const firstName = "John";
const lastName = "Doe";
const fullName = `My name is ${firstName} ${lastName}.`;
console.log(fullName);

//5. String Concatenation and Multiline Strings
const multiLine = `This is a multiline string
that spans multiple lines.`;
console.log(multiLine);

//6. String Interpolation and Multiline Strings
const multiline2 = `This is a multiline string
that spans multiple lines.`;
console.log(multiline2);

// 7. function call in template literal

function greeting() {
  return "Hello";
}

const greet = `${greeting()} World`;
console.log(greet);

// 8. String Concatenation and Function Call
function getGreeting() {
  return "Hello";
}
const greeting1 = getGreeting() + " World";
console.log(greeting1);

//9
// nested template literal

const isActive = true;

const User = `User is ${isActive ? `active` : `inactive`} `;
console.log(User);
