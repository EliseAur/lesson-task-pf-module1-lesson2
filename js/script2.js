// Question 1
// Create two number variables, one with an integer value and one with a decimal value.

var integerNumber = 5;
var decimalNumber = 5.4;

console.log("Integer number:", integerNumber);
console.log("Decimal number:", decimalNumber);

// Question 2
// Declare and initialise a variable with all the working days of the week separated by hyphens -.

var workingDays = "Monday" + " - " + "Tuesday" + " - " + "Wednesday" + " - " + "Thursday" + " - " + "Friday";

console.log("Working days of the week:", workingDays);

// Question 3
// Create four variables that demonstrate the following operations:
//     addition
//     subtraction
//     multiplication
//     division

var number1 = 10;
var number2 = 2;

var addition = number1 + number2;
var subtraction = number1 - number2;
var multiplication = number1 * number2;
var division = number1 / number2;

console.log("Result addition:", addition);
console.log("Result subtraction:", subtraction);
console.log("Result multiplication:", multiplication);
console.log("Result division:", division);

var addition2 = 10 + 2;
var subtraction2 = 10 - 2;
var multiplication2 = 10 * 2;
var division2 = 10 / 2;

console.log(addition2);
console.log(subtraction2);
console.log(multiplication2);
console.log(division2);

// Question 4
// Declare a boolean variable with an initial value of false.

var eliseIsUgly = false;

console.log("Is Elise ugly?", eliseIsUgly);

// Question 5
// Console log the number of characters in this string: "The frogs are angry."

var frogMood = "The frogs are angry.";

console.log("Number of characters in the string:", frogMood.length);

// Question 6
// Convet the following variable names to camelCase:
var timeElapsed;
var totalPrie;

// Question 7
// Convert the following string values to number values:
var numberOne = "53";
var numberTwo = "44,6";

// convertedInteger = parseInt(numberOne);
// console.log(convertedInteger);

// convertedDecimal = parseFloat(numberTwo);
// console.log(convertedDecimal);

console.log(parseInt(numberOne));
console.log(parseFloat(numberTwo));

// Question 8
// Check the type of the following variables and log the results:
var pet = "donkey";
var age = 89;
var discountApplied = true;
var timeLeft;

//var typeOfpet = typeof pet;
console.log(typeof pet);
console.log(typeof age);
console.log(typeof discountApplied);
console.log(typeof timeLeft);

// Question 9
// Declare and initialise a variable with the value "Updating heading".
// Select the h1 element on the page and set it's inner HTML value to be the variable created above.

// example 1
// var newHeading = document.querySelector("h1");
// newHeading.innerHTML = "Updated heading";

//example 2
// var updatedHeading = "Updated heading";
// document.querySelector("h1").innerHTML = updatedHeading;

//example 3 (fasit)
var headingText = "Updating heading";

var heading = document.querySelector("h1");
heading.innerHTML = headingText;

// Question 10
// Select the body element on the page and change its background colour to lightskyblue.

document.querySelector("body").style.backgroundColor = "lightskyblue";
