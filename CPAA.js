//   console.log("one")
// console.log("two")
// console.log("three") 

// function hello(){
//     console.log("hello");
// }

// setTimeout(hello, 2000);

function getData(dataId, getNextData) {
    setTimeout( () => {
       console.log("data", dataId);
       if (getNextData) {
        getNextData ();
       }
    }, 2000);
}

getData(1, () => {
    getData(2, () => {
        getData(3, () =>{
            getData(4, () => {

            })
        })
})
})