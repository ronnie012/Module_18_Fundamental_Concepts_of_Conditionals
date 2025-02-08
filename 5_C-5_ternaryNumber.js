// ternary_number

let num1 = 20;
let num2 = 40;

let result;

if (num1 > num2) {
  result = num1 * 2;
} else {
  result = num1 + num2;
}
console.log("Result using if-else: ", result);

let resultTernary = (num1 > num2) ? (num1 * 2) : (num1 + num2);
console.log("Result using ternary operator: ", resultTernary);