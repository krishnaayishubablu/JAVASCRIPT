// const URL = "https://cat-fact.herokuapp.com/facts"

// const factPara = document.querySelector("#fact");
// const btn = document.querySelector("#btn");
// let promise = fetch(URL);
// console.log(promise)

// const getFacts = async() => {
     

// }  

// function getFacts() {
//     fetch(URL) 
//     .then((response) => {
//         return response.json();

//     })
//     .then((data) => {  
//        console.log(data);
//        factPara.innerText = data[2].text; 
//     });
// }

// btn.addEventListener("click", getFacts);

const Base_URL = "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies"

const dropdowns = document.querySelectorAll(".dropdown Select")
       

// for  (let Select of dropdowns){
//        for (code in countryList) {
//         console.log(code, countryList[code])
//        };
// };


for (let Select of dropdowns) {
    for (currCode  in countryList ) {
        let newOption = document.createElement("option");
        newOption.innerText = currCode;
        newOption.value = currCode;
        if (Select.name ==="to" && currCode === "INR") {
            newOption.selected = "selected";
        };
          Select.append(newOption);
    };

    Select.addEventListener("change", (evt) => {
        updateFlag(evt.target);
    });
};

const updateFlag = (element) => {
    let currCode = element.value;

    let countryCode = countryList[currCode];
    let newsrc = `https://flagsapi.${countryCode}/flat/64.png`;
    let img = element.parentElement.querySelector("img");
    img.src = newsrc;
    

}