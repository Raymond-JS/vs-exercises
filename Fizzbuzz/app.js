const div = document.getElementById("display-numbers");
const btn = document.getElementById("start");


// Arrays To Hold Multiples Of 3, 5, and Both #'s
const multiplesThree = [];
const multiplesFive = [];
const multiplesBoth = [];

// Function to get Multiples
function getMultiples(num1, num2){
    for ( let i = 1; i <= 100; i++ ) { 
        if ( i % num1 === 0 && i % num2 === 0 ) {
            multiplesBoth.push(i);
        } else if ( i % num1 === 0 ) {
                multiplesThree.push(i);     
            } else if ( i % num2 === 0 ) {
                multiplesFive.push(i);
            }    
  }
}

getMultiples(3, 5);


// Function print multiples to page
const print = () => {
    for ( let i = 1; i <= 100; i++ ) {
        if ( multiplesThree.indexOf(i) !== -1 ) {
            div.innerHTML += "fizz <br>"
        } else if ( multiplesFive.indexOf(i) !== -1 ) {
            div.innerHTML += "buzz <br>"
        } else if ( multiplesBoth.indexOf(i) !== -1 ) {
            div.innerHTML += "fizzbuzz <br>"
        } else {
            div.innerHTML += i + "<br>";
        }
    }
    btn.textContent = "Voila!";
    btn.style.fontSize = "larger";
}


/* Optional - Return an object that keeps a tally of how often the phrases "fizz","buzz", and "fizzbuzz" occur in the array returned from the previous function. */

function phraseCounter( fizzBuzz, fizz , buzz) {
   let totals = {
       fizzbuzz: fizzBuzz.length,
       fizz: fizz.length,
       buzz: buzz.length
   }
return totals;
}

let ans = phraseCounter( multiplesBoth , multiplesThree, multiplesFive )

console.log(ans);