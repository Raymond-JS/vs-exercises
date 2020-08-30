// Grabbing Elements, Setting Elements, Global Variables
let displayNum = document.querySelector("span.display-num");
let btn = document.querySelector(".btn");
let recentScore = document.querySelector(".recent-score");
let countDown = document.querySelector(".countdown");
countDown.innerHTML = 15;
let stopWatch;
let clicks = 0;

// Clicks Counter To Update
function counter() {   
    clicks++;
    console.log(clicks)
    displayNum.textContent = clicks;
}

// Event Listener On Button & Document
btn.addEventListener("click", () => {
    btn.style.display = "none";
    document.addEventListener("click", counter);
    setTimeout( finalNum, 15000);
    stopWatch = setInterval(decrease, 1000) 
    setTimeout( stopDecrease, 15000);
} )


// Functions Below:
function decrease() {
    countDown.innerHTML--;
}

function stopDecrease() {
    clearInterval(stopWatch);
}

function finalNum(stopDecrease) {
    document.removeEventListener("click", counter );
    localStorage.setItem("clicks", displayNum.textContent);
    if ( parseInt(recentScore.textContent) >= parseInt(displayNum.textContent) ) {
        displayNum.style.backgroundColor = "red";
        stopDecrease;
    } else {
        displayNum.style.backgroundColor = "green";
        console.log( displayNum.textContent )
        stopDecrease;
    }
    
}

// Display Most Recent Score

recentScore.textContent = localStorage.getItem("clicks");


