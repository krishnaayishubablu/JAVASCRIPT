// let marks = [45, 97, 52, 89,]

// console.log(marks.length);

// for (let idx=0; idx < marks.length; idx++) {
//     console.log(marks[idx]);
// }


// QS NO 1 -- 
// let marks = [85, 97, 44, 37, 76, 60];

// let sum = 0;

// for (let val of marks) {
//     sum += val;
// }

// let avg = sum / marks.length;
// console.log(`avg marks of the class = ${avg}`);


// QS NO 2-- For a given array with prices of 5 items ->[250, 645, 600, 900, 50]
//          All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.


// let items = [250, 650, 300, 900, 50];

// let i = 0
// for (let val of items) {
//     let offer = val / 10;
//     items[i] = items[i] - offer;
//     console.log(`value after offer = ${items[i]}`);
//     i++;

// }

// for (let i = 0; i < items.length; i++){
// let offer = items[i] / 10;
// items[i] -= offer;
// }

// console.log(items);


// QS 2 Solution
let companies = ["Blomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];


companies.splice(2, 1, "Ola");
