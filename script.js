/*
Amelia MacDonald
W0467922
Assignment 1
Client Side Programming
February 16, 2025
*/

//Part 1: Variables, Data Types & Type Casting
document.write("<h1> Part  1 </h1>");

// Declare variables with different data types
let studentName="Patty Mac";
let studentAge = 34;
let isEnrolled = true;

// Display variable values
document.write(`Student name: ${studentName} `);
document.write("<br>");
document.write(`Student age: ${studentAge} `);
document.write("<br>");
document.write(`Is student enrolled:  ${isEnrolled} `);

document.write("<h3>Type Casting</h3>");

// Display the type of studentAge before type casting
document.write(" Before casting, the type of studentAge is:  " + typeof studentAge );
document.write("<br>");

// Convert studentAge to a string
studentAge = String(studentAge);

// Display the type of studentAge after type casting
document.write(" After casting, the type of studentAge is:  " + typeof studentAge );
document.write("<br>");

//Part 2: Operators & User Interaction
document.write("<h1> Part 2 </h1>");

// Prompt the user to enter two numbers and convert them to numbers
let num1 = Number(prompt("Please enter a number", "2"));
let num2 = Number(prompt("Please enter another number", "4"));

// Perform arithmetic operations and display results
document.write("This is adding two variables together " +   (num1+num2)   );
// Using -
document.write(" <br> This is subtracting two variables together ", num1-num2);
// Using *
document.write(" <br> This is multiplying two variables together ", num1*num2);
// Using /
document.write(" <br> This is dividing two variables together ", num1/num2);
// Using %
document.write(" <br> This is when modules is used on the two variables together ", num1%num2);

//Part 3: Conditional Execution
document.write("<h1> Part 3 </h1>");

// Prompt the user to enter their age and convert it to a number
let age = Number(prompt("Please enter your age", "18"));

// Check if the user is eligible to vote
if (age >=18) {
    // If age is 18 or older, display eligibility message
    document.write("You are eligible to vote! " );
} else {
    // If age is less than 18, display ineligibility message
    document.write("You are not eligible to vote yet " );
}

//Part 4: Loops
document.write("<h1> Part 4 </h1>");

// For loop to print numbers from 1 to 10
for ( let i = 1 ; i<11  ; i++){
    document.write(" " + i);
}

// Declare a variable for user input
let num3;

// Do-while loop to prompt user for a number greater than 10
do {
    num3 = Number(prompt("Please enter a number greater than 10", "11"));
} while ( num3 <=10  );

// Display success message
document.write("<h1> Great Job! </h1>");