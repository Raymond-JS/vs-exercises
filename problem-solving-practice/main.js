// Write a function that takes an array of numbers and returns the largest:

function largest(arr) {
    let num = 0;
    for ( let i = 0; i < arr.length; i++ ) {
        if (arr[i] > num ) {
            num = arr[i];
        }
    }
    return num;
}

console.log(largest([3, 5, 2, 8, 1])); // 8

/* Write a function that takes an array of words and a character and returns each word that has that character present. */

function lettersWithStrings(arr, char) {
    let foundIt = arr.filter(word => word.indexOf(char) !== -1 
    )
    return foundIt;
}

console.log(lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!"));

/* Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.*/


function isDivisible( num1, num2) {
  if ( num1 % num2 === 0) {
      return true;
  } else {
      return false;
  }
}

console.log(isDivisible(4, 2));
console.log(isDivisible(9, 3));
console.log(isDivisible(15, 4));
