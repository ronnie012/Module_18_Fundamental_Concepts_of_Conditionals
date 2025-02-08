// defining_variables
let regularFareInTk = 800;
let age = 9;
let isStudent = false;
let fare;

// implementing_conditional_logic
if (age < 10) {
  fare = 0; // free_for_children_under_10
} else if (isStudent) {
  fare = regularFareInTk * 0.5; // 50%_discount_for_students.
} else if (age >= 60) {
  fare = regularFareInTk * 0.85; // 15%_discount_for_senior_citizens.
} else {
  fare = regularFareInTk;
}
console.log(`Your ticket fare is:  ${fare} tk.`)