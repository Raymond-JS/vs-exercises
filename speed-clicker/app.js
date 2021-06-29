// Grabbing Elements, Setting Elements, Global Variables
const displayNum = document.querySelector("span.display-num");
const btn = document.querySelector(".btn");
const lastScore = document.querySelector(".last-score");
const countDown = document.querySelector(".countdown");
countDown.innerHTML = 15;
let stopWatch;
let clicks = 0;

// Counter To Update Clicks
function counter() {   
    clicks++;
    displayNum.textContent = clicks;
}

// Adding Event Listener On Button & Document
btn.addEventListener("click", () => {
    btn.style.display = "none";
    document.addEventListener("click", counter);
    setTimeout( finalNum, 15000);
    stopWatch = setInterval(decrease, 1000) 
    setTimeout( stopDecrease, 15500);
} )


// Decreasing the countdown number
function decrease() {
    countDown.innerHTML--;
}

// clearing the second countdown
function stopDecrease() {
    clearInterval(stopWatch);
}


// Removing Click Counter. Setting Storage. Setting Display Color.

function finalNum(stopDecrease) {
    document.removeEventListener("click", counter );
    localStorage.setItem("clicks", displayNum.textContent);
    if ( parseInt(lastScore.textContent) >= parseInt(displayNum.textContent) ) {
        displayNum.style.backgroundColor = "red";      
    } else {
        displayNum.style.backgroundColor = "green";
    }
    
}

// Display Most Recent Score
lastScore.textContent = localStorage.getItem("clicks");


