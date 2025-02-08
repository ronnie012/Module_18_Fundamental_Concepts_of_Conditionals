// grade_calculator
let mark = 100;

if (mark >= 90 && mark <= 100) {
  console.log("You have got A!");
} else if (mark >= 80 && mark <= 89) {
  console.log("You have got B!");
} else if (mark >= 70 && mark <= 79) {
  console.log("You have got C!");
} else if (mark >= 60 && mark <= 69) {
  console.log("You have got D!");
} else if (mark > 0 && mark < 60) {
  console.log("You have got F!!!");
}  else {
  console.log("Tech Error! Contact Support with Issue Details!!")
}
