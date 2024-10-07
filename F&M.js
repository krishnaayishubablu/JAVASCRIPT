// function myFunction() {
//     console.log("Welcome to Apma College!");
//     console.log("We are learning JS :)");
// }


// myFunction();
// myFunction();


// sum function
// function sum(a, b) {
//     return a + b;

// }


// const arrowSum = (a, b) => {
//     console.log(a +b);
// };



// QS1

// function countVowels(str) {
//     let count = 0;
//     for (const char of str) {
//         if ( char === "a" ||char === "e" ||char === "i" ||char === "o" ||char === "u" ||) {
    
//             count++;
//         }
//     }

//     console.log(count);
// }



// let arr = [1, 2, 3, 4, 5];

// arr.forEach(function printVal(val) {
//     console.log(val);
// })0



//  QS1.For a given array of numbers, print the square of each value using the forEach loopl. 


// let nums = [67, 521, 39];


// nums.map((val) => {
//     console.log(val);
// });

// let calcSquare = (num) => {
//     console.log(num * num);
// };

// nums.forEach(calcSquare);




// let arr = [1, 2, 3, 4, 5, 6];


// let evenArr = arr.filter((val)  =>{
//     return val % 2 === 0;
// })
 
// console.log(evenArr);



//QS1 

// let marks = [97, 64, 32, 49, 99, 86];

// let toppers = marks.filter((val) => {
//     return val > 90;
// })


// console.log(toppers);


//QS2
let n = prompt("enter a number : ");

let arr = [];

for(let i=1; i<=n; i++ ) {
    arr[i-1] = i;
}

console.log(arr);
 
let sum = arr.reduce((res, curr) => {
    return res + curr;
});

console.log("sum = ", sum)


let factorial = arr.reduce((res, curr) => {
    return res * curr;
});

console.log("factorial = ", factorial);