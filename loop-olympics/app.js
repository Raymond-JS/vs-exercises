// Preliminaries 1:

for ( let i = 0; i <= 9; i++ ) {
    console.log(i);
}

// Preliminaries 2:
for ( let i = 9; i >= 0; i-- ) {
    console.log(i);
}

// Preliminaries 3:
var fruit = ["banana", "orange", "apple", "kiwi"];

for ( let i = 0; i < fruit.length; i++ ) {
    console.log( fruit[i]);
}


// Bronze Medal 1
let num = [];
for ( let i = 0; i <= 9; i++ ) {
    num.push(i);
}

// Bronze Medal 2:
for ( let i = 0; i <= 100; i++ ) {
    if ( i % 2 === 0 ) {
        console.log(i);
    }
}

// Bronze Medal 3:
var fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"];
let fruitSalad = [];

for ( let i = 0; i <= fruit.length; i++ ) {
    if ( i % 2 !== 0 ) {
        fruitSalad.push(fruit[i]);
    }
}
console.log(fruitSalad);

// Silver Medal 1:

var peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]


  for ( let i = 0; i < peopleArray.length; i++ ) {
      console.log(peopleArray[i].name);
  }


// Silver Medal 2:

let names = [];
let occupations = [];

for ( let i = 0; i < peopleArray.length; i++ ) {
    names.push(peopleArray[i].name);
    occupations.push(peopleArray[i].occupation);
}
console.log( names);
console.log(occupations);


// Silver Medal 3:

let evenNames = [];
let oddOccupations = [];

for ( let i = 0; i < peopleArray.length; i++ ) {
    if ( i % 2 === 0 ) {
        evenNames.push(peopleArray[i].name);
    } else if ( i % 2 !== 0 ) {
        oddOccupations.push(peopleArray[i].occupation);
    }
}
console.log(evenNames);
console.log(oddOccupations);


// Gold Medal 1:

let gridOne = [];

for (let i = 0; i <= 2; i++ ){
    gridOne.push([]);
    for ( let j = 0; j <= 2; j++ ) {
        gridOne[i].push(0);
    }
}

console.log(gridOne);

// Gold Medal 2:
let gridTwo = [];

for ( let i = 0; i <= 2; i++ ) {
    gridTwo.push([]);
    for (let j = 0; j <= 2; j++ ) {     
        gridTwo[i].push(i);
    }
}
console.log(gridTwo);

// Gold Medal 3:

let gridThree = [];
for ( let i = 0; i <= 2; i++ ) {
    gridThree.push([]);
    for ( let j = 0; j <= 2; j++ ) {
        gridThree[i].push(j);
    }
}
console.log(gridThree);

// Gold Medal 4:

let gridFour = [
    [0, 1, 2], 
    [0, 1, 2], 
    [0, 1, 2]
]

for ( let i = 0; i < gridFour.length; i++) {
    for (let j = 0; j < gridFour[i].length; j++ ) {
        gridFour[i][j] = 'x';
    }
}
console.log(gridFour);
