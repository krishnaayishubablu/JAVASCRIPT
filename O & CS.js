// Arthmetic operators
// let a = 5;
// let b = 3;

// console.log("a = ", a, " & b = ", b);
// console.log("a + b = ", a + b);
// console.log("a - b = ", a - b);
// console.log("a * b = ", a * b);
// console.log("a / b = ", a / b);
// console.log("a % b = ", a % b);
// console.log("b ** a = ", b ** a);

// Unary operator
// let a = 5;
// let b = 2;

// console.log("a = ",a, "b = ", b);
// a--;
// console.log("a = ", a); //4

// logical operators
// let a = 5; 
// let b = 3;


// console.log("!(6<5) = ", !(a === 6)); //true

// CONDITIONAL STATEMENTS

// let age = 25 

// if (age > 18){
//     console.log("you can vote");
// }s

// let mode = "light";
// let color;

// if (mode === "dark") {
//     color = "black";
// }

// if (mode === "light") {
//     color = "white";
// }
// console.log(color);


// let mode = "light";
// let color;
// if(mode === "dark"){
//     color = "black";
// }else {
//     color = "white";
// }

// console.log(color);
  
//Conditional statements

// let mode = "blue";
// let color;

// if(mode === "dark") {
//     color = "black";
// } else if (mode === "blue") {
//     color = "blue";
// } else if (mode === "pink") {
//     color = "pink"
// } else {
//     color = "white";
// }

// console.log(color);


         //lets practice
//QS1 Get user to input a number using prompt ("Enter a number:"). Chek if the number is a multiple of 5 or not

// let name = prompt("hello!");
// console.log(name);

// let num = prompt("enter a number:");
// if(num % 5 === 0) {
//     console.log(num, "is multiple of 5");
// } else {
//     console.log(num, "is not a multiple of 5");
// }


//QS2 Write a code which can give grades to students according to their scores:
// 80-100,A
// 70-89,B
// 60-69,C
// 50-59,D
// 0-49,F

let score = prompt("enter your score (0-100)");
let grade;

if(score >= 80 && score <= 100) {
    grade = "A";
} else if (score >=70 && score <=89) {
    grade = "B";
} else if (score >=60 && score <=69) {
    grade = "C"
} else if (score >=50 && sore <=59) {
    grade = "D";
} else if (score >=0 && score <=49) {
    grade = "F"
}

console.log("according to your score, your gade was :",  grade)