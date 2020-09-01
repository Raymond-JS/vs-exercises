//Multiple Array Methods Part 1

/* 
1. Returns a list of everyone older than 18, which is
2. sorted alphabetically by last name, and where
3. each name and age is embedded in a string that looks like an HTML <li> element. */

var peopleArray = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 29
    },
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27
    },
    {
        firstName: "Pasha",
        lastName: "Datsyuk",
        age: 13
    },
    {
        firstName: "Lev",
        lastName: "Tolstoy",
        age: 82
    }
]


function sortedOfAge(arr) {
    let over18 = arr.filter((person) => person.age > 18 );
    over18.sort((a, b) => {
        let nameA = a.lastName.toUpperCase();
        let nameB = b.lastName.toUpperCase();
        if (nameA < nameB ) {
            return -1;
        }
        if (nameA > nameB ) {
            return 1
        }
    } );
    let ans =  over18.map((obj) => {
        let li = '<li>'
        li += obj.firstName + " " + obj.lastName + " is " + obj.age + "</li>";
        return li;
    })
        return ans;
}

// console.log(sortedOfAge(peopleArray));


//Extra Credit:

let extraPeople = [ ...peopleArray,
    {
        firstName: "Rich",
        lastName: "Jackson",
        age: 22
    },
    {
        firstName: "Luis",
        lastName: "Rey",
        age: 50
    },
    {
        firstName: "Mike",
        lastName: "Tyson",
        age: 54
    }
];

 
function filterByLastName(arr) {
    let bestNames = arr.filter ((obj) => {
      if ( obj.lastName.charAt(obj.lastName.length - 1) === "a" || obj.lastName.charAt(obj.lastName.length - 1) === "y")  {
          return obj;
      }  
  })
  bestNames.splice(1, 1);
  bestNames.reverse();
  return bestNames;
 
}

console.log(filterByLastName(extraPeople));