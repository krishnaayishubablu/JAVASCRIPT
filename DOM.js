// console.dir(window.document.body);
// console.log(window.document.body);
// 

// let button = document.getElementById("myId");
// console.dir(button);

// let headings = document.getElementsByClassName("myClass");
// console.dir(headings);
// console.log(headings); 


//QS1--Create a H2 heading element with text - "Hello JavaScript".Append "from Apna Coolege students" to this using JS.
// let h2 = document.querySelector("h2");
// console.dir(h2.innerText);
  
// h2.innerText = h2.innerText + " from Apna College students";


// QS@-- Create 3 divs with common class name - "box". Access them & add some unique text to each of them.
 
// let idx = 1;
// let divs = document.querySelectorAll(".box");
// for (div of divs) {
//     div.innerText = `new unique value ${idx}`;
    // idx++;
// }
// divs[0].innerText = "new unique value 1";
// divs[1].innerText = "new unique value 2";
// divs[2].innerText = "new unique value 3";


//  let btn1 = document.querySelector("#btn1");

// // btn1.onclick = (evt) => {
// //     console.log(evt);
// //     console.log(evt.type);
// //     console.log(evt.target);
// //     console.log(evt.cliebtX, evt.clientY);
// // };

// btn1.addEventListener("click", (evt) => {
//     console.log("button1 was clicked");
//     console.log(evt);
//     console.log(evt.type);
// });


//  let div = document.querySelector("div");

let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light"; 

modeBtn.addEventListener("click", () => {
   
    if(currMode === "light") {
        currMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    
    } else {
        currMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }

    console.log(currMode)
});