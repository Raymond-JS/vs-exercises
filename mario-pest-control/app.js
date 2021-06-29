// Grab totals * by coins and then add final result
let form = document["pest-control"];
let totalDisplay = document.querySelector("span");


console.log(form)

form.addEventListener("submit", (event) => {
    event.preventDefault();
    let goombas = form.goombas.value;
    let bobs = form.bobs.value;
    let cheeps = form.cheeps.value;
    calc(goombas, bobs, cheeps);
    form.goombas.value = "";
    form.bobs.value = "";
    form.cheeps.value = "";

})


// Calculate The Total
function calc(goombaNum, bobsNum, cheepsNum) {
    let sumOne = goombaNum * 5; 
    let sumTwo = bobsNum * 7; 
    let sumThree = cheepsNum * 11;
    totalDisplay.innerHTML = sumOne + sumTwo + sumThree;
}