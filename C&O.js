// const student = {
//     fullName: "shradha Khapra",
//     marks: 94.4,
//     printMarks: function () {
//         console.log("marks = ", this.marks);
//     }

// };
// class ToyotaCar {
//     constructor() {
//         console.log("creating new object");
//     }
//     start() {
//         console.log("start");
//     }
//     stop() {
//         console.log("stop");
//     }
//     setBrand(brand) {
//         this.brand = brand;
//     }
// }

// let fortuner = new ToyotaCar();;
// fortuner.setBrand("fortuner");
// let lexus = new ToyotaCar();
// lexus.setBrand("lexus");

// class Parent {
//     hello () {
//         console.log("hello");
//     }
// }

// class Child extends Parent {}

// let obj = new Child();


// class Person {
//     eat() {
//         console.log("eat");
//     }

//     sleep() {
//       console.log("sleep");
//     }
// }

// class Engineer extends Person {
//     work() {
//         console.log("solve problems,build something")
//     }
// }

// let shradhaobj = new Engineer();


// Let's Practice 
//QS1
//You are creating a website for your college. Create a class User with 2 properties, name & email.It also has a method called viewData() that allows user to view website data
//  class User{
//     constructor(name,email){
//         this.name = name;
//         this.email = email;
//     }

//     viewData() {
//         console.log("data = ", DATA);
//    }
//  }

//  let student1 = new User("shradha", "abc@email.com");
//  let student2 = new User("aman", "aman@email.com");


// QS2
//Create a new class Admin which inherits from User. Add a new method called editData to Admin that allows it to edit websitse data.

let DATA = "Secret information";

class User{
        constructor(name,email){
            this.name = name;
            this.email = email;
        }
    
        viewData() {
            console.log("data = ", DATA);
       }
     }
    
    class Admin extends User {
        constructor(name, email) {
            super(name, email);
        }
        editData() {
            Admin = "Some new value";
        }
    }

     let student1 = new User("shradha", "abc@email.com");
     let student2 = new User("aman", "aman@email.com");
    

     let teacher1 = new User("Dean", "dean@college.com")
     let admin1 = new User("admin", "admin@college.com")