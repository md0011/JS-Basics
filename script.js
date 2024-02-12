console.log("Hello World");
// ------------------------------------------------------------------------
let name = "Mayur"; // String Literal
console.log(name);
// ------------------------------------------------------------------------
// Cannot be a reserved keyword
// Should be meaningful
// Cannot start with a number (1name)
// Cannot contain a space or hyphen (-)
// Are case-sensitive
// ------------------------------------------------------------------------
const interestRate = 0.3;
// interestRate = 1;   --> Can't update a value of constant
console.log(interestRate);
// ------------------------------------------------------------------------
let age = 30; // Number Literal
let isApproved = false; // Boolean Literal
let firstName = undefined;
let selectedColor = null;
// ------------------------------------------------------------------------
let employee = {
  id: 1,
  employeeName: "Mosh",
};
// Dot Notation
employee.employeeName = "John";
// Bracket Notation
employee["id"] = 2;
console.log(employee.employeeName);
// ------------------------------------------------------------------------
let selectedColors = ["red", "blue"];
selectedColors[2] = 3;
console.log(selectedColors.length);
// ------------------------------------------------------------------------
// Performing a task
function greet(firstName, lastName) {
  console.log("Hello, " + firstName + " " + lastName);
}
greet("Henry", "Creel");

//  Calculating a value
function square(num) {
  return num * num;
}
console.log(square(5));
// ------------------------------------------------------------------------
