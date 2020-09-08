// Rest Operator

function collectAnimals(...arr) {  
   return arr;
}

console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"));

// returns a food object with the array names as properties using Object Literals:

function combineFruit(fruit, sweets, vegetables){
    return { fruit: [...fruit],
    sweets: [...sweets],
vegetables: [...vegetables]};
}

console.log(combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrit"]));


//Destructions use the property names as variables. Desructure the object in the parameter:

const vacation = {  
    location: "Burly Idaho",
    duration: "2 weeks"
  };
 

function parseSentence({location, duration}){
    return `We're going to have a good time in ${location} for ${duration}`;
  }

  console.log(parseSentence(vacation));

//Use destructuring to make this code ES6:

  function returnFirst(items){
    const [firstItem] = items; /*change this line to be es6*/
    return firstItem
}

console.log(returnFirst(["red", "blue", "green"]));


//destructuring code to assign variables that will help us return the expected string. Also, change the string to be using Template literals:

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
    const [firstFav, secondFav, thirdFav] = arr;

    return ` My top three favorite activities are,  ${firstFav} ,  ${secondFav} , and ${thirdFav}`;
}

console.log(returnFavorites(favoriteActivities));

//Rest and Spread Operator

function combineAnimals(...arg) {  
 return arg.reduce((final, current) => [...final, ...current]);
 
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals));


//Make more ES6xy
function product(...arr) {  
  return arr.reduce((acc, number) => {
    return acc * number;
  }, 1)
}


function unshift(array, ...arr) {  
  return [...array, ...arr];
}

console.log(product(1,2,3))
console.log(unshift(["mary", "becky", "sue"], 22, 44, "James"));

//Destruction Final

function populatePeople(names){
  return names.map(name => {
      name = name.split(" ");
      const [firstName, lastName] = name;
      return {
          firstName,
          lastName
      }
  })
}

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))