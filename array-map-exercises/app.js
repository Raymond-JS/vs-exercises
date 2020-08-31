//Array of numbers that are doubles
function doubleNumbers(arr) {
    let ans = arr.map(num => num * 2);
    return ans;
}

console.log(doubleNumbers([2, 5, 100]));

//Take array of numbers and make them strings
function stringItUp(arr){
    let strAns = arr.map(num => num.toString() );
    return strAns;
}

console.log( stringItUp([2, 5, 100]));

//Capitalize each of an array of names
function capitalizeNames(arr){
    let capitalAns = arr.map(name => name.toUpperCase()[0] + name.slice(1).toLowerCase());
    return capitalAns;
}

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]));

//Make an array of strings of the names
function namesOnly(arr) {
    let nameStr = arr.map(obj => obj.name)
    return nameStr;
}

console.log( namesOnly([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])); 

// Array of strings of names if they can go to the matrix
function makeStrings(arr) {
   let strAns =  arr.map(obj => {
        if (obj.age >= 18) {
            return obj.name + " can go to the Matrix"
        } else {
          return obj.name + " is under age!!"
        }
   }
        
    )
return strAns;

}


console.log( makeStrings([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])); 

//Make an array of names in h1 and ages in h2

function readyToPutInTheDOM(arr) {
    let ready = arr.map(obj => {
         return `<h1>${obj.name}</h1> <h2>${obj.age}</h2>`;
      
    })
    return ready;
}

console.log( readyToPutInTheDOM([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
])); 