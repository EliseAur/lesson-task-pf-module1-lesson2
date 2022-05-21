// Question 1: Create two number variables, one with an integer value and one with a decimal value.
var numberInteger = 5;
var numberDecimal = 5.2;

console.log(numberInteger);
console.log(numberDecimal);

//Question 2: Declare and initialise a variable with all the working days of the week separated by hyphens -.
var dayOne = "Monday";
var dayTwo = "Tuesday";
var dayThree = "wednesday";
var dayFour = "Thursday";
var dayFive = "Friday";

var workingDays = dayOne + " " + dayTwo + " " + dayThree + " " + dayFour + " " + dayFive;

console.log(workingDays);

//FASI:
// question 2
var daysOfTheWeek = "Monday" + "-" + "Tuesday" + "-" + "Wednesday" + "-" + "Thursday" + "-" + "Friday";
console.log(daysOfTheWeek);

//Question 3: Create four variables that demonstrate the following operations: Addition, Subtraction, Multiplication, Division
var leddOne = 3;
var leddTwo = 4;
var addition = leddOne + leddTwo;
var subtraction = leddOne - leddTwo;
var multiplication = leddOne * leddTwo;
var division = leddOne / leddTwo;

console.log(addition);
console.log(subtraction);
console.log(multiplication);
console.log(division);

// FASIT
var addition = 4 + 6;
var subtraction = 8 - 6;
var multiplication = 10 * 10;
var division = 20 / 7;

//Question 4: Declare a boolean variable with an initial value of false.
var animal = true;

console.log(animal);

//Question 5: Console log the number of characters in this string: "The frogs are angry."
var sentence = "The frogs are angry";
var lengthOfString = sentence.length;

console.log(lengthOfString);

//FASIT
var sentence = "The frogs are angry.";
console.log(sentence.length);

//Question 6: Convet the following variable names to camelCase:
var timeElapsed;
var totalPrice;

//Question 7: Convert the following string values to number values:
//var number1 = "53";
//var number2 = "44.6";
var number1 = "53";
var convertedNumber1 = parseInt(number1);
console.log(convertedNumber1);

var number2 = "44.6";
var convertedNumber2 = parseFloat(number2);
console.log(convertedNumber2);

//Question 8: Check the type of the following variables and log the results:
//var pet = "donkey";
//var age = 89;
//var discountApplied = true;
//var timeLeft;

var pet = "donkey";
var age = 89;
var discountApplied = true;
var timeLeft;

console.log(typeof pet);
console.log(typeof age);
console.log(typeof discountApplied);
console.log(typeof timeLeft);

//FASIT:
var typeOfPet = typeof pet;
console.log(typeOfPet);

var typeOfAge = typeof age;
console.log(typeOfAge);

var typeOfDiscountApplied = typeof discountApplied;
console.log(typeOfDiscountApplied);

var typeOfTimeLeft = typeof timeLeft;
console.log(typeOfTimeLeft);

//Question 9: Declare and initialise a variable with the value "Updating heading".
//Select the h1 element on the page and set it's inner HTML value to be the variable created above.

var heading1 = document.querySelector("h1");
heading1.innerHTML = "Updated heading";

//FASIT
var headingText = "Updating heading";

var heading = document.querySelector("h1");
heading.innerHTML = headingText;

//Question 10: Select the body element on the page and change its background colour to lightskyblue.
var body = document.querySelector("body");
body.style.background = "lightskyblue";

//FASIT:
var body = document.querySelector("body");
body.style.backgroundColor = "lightskyblue";
