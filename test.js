export const PI = 3.14;
let radius = 5;
let area = PI * radius * radius;
console.log(area);

export function calculateArea(radius) {
  return PI * radius * radius;
}

export function calculateCircumference(radius) {
  return 2 * PI * radius;
}
