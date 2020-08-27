// Grabbing Forms For Submit
const addBtn = document.add;
const subBtn = document.subtract;
const multiBtn = document.multiply;

// grabbing DIVs to input answers
let addAnsDiv = document.querySelector(".add-answer");
let subAnsDiv = document.querySelector(".subtract-answer");
let multiAnsDiv = document.querySelector(".multi-answer");

// Functions That Handle Calculation
function add(numOne, numTwo) {
     let answer = parseInt(numOne) + parseInt(numTwo);
     return answer;
}

function subtract(numOne, numTwo) {
    return numOne - numTwo;
}

function multiply(numOne, numTwo) {
    return numOne * numTwo;
}


// Adding Event Listeners To Individual Forms
addBtn.addEventListener( "submit", (e) => {
    e.preventDefault();
    if (document.add.numOne.value === "" || document.add.numTwo.value === "") {
        alert("please input number")
        document.add.numOne.value === "0";
        document.add.numTwo.value = "0";
    } else {
        let firstNumAdd = document.add.numOne.value; //add first number
        let secondNumAdd = document.add.numTwo.value; // add second number
        let addAns = add(firstNumAdd, secondNumAdd);
        addAnsDiv.innerHTML = addAns;
        document.add.numOne.value = "";
        document.add.numTwo.value = "";
    }
    
})

subBtn.addEventListener("submit", (e) => {
        e.preventDefault();
        let firstNumSub = document.subtract.subOne.value; // subtract first number
        let secondNumSub = document.subtract.subTwo.value; // subtract second number
        let subAns = subtract(firstNumSub, secondNumSub);
        subAnsDiv.innerHTML = subAns;
        document.subtract.subOne.value = "";
        document.subtract.subTwo.value = "";
})

multiBtn.addEventListener("submit", (e) => {
    e.preventDefault();
    let firstNumMultiply = document.multiply.multiOne.value; // multiply first num
    let secondNumMultiply = document.multiply.multiTwo.value; // multiply second num
    let multiplyAns = multiply(firstNumMultiply, secondNumMultiply)
    multiAnsDiv.innerHTML = multiplyAns;
    document.multiply.multiOne.value = "";
    document.multiply.multiTwo.value = "";
})




