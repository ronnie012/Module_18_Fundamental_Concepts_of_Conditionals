// BMI_calculator_and_health_category
let weightInKg = 85;
let heightInM = 1.5;
let BMI = weightInKg / (heightInM ** 2);

if (BMI < 18.5) {
  console.log("You are underweight");
} else if (BMI >= 18.5 && BMI <= 24.9) {
  console.log("You are normal!");
} else if (BMI >= 25 && BMI <= 29.9) {
  console.log("You are overweight!");
} else {
  console.log("You are obese!!!")
}
