// return capital and lowercase strings
function strTransform(str) {
   return str.toUpperCase() + str.toLowerCase();
}
console.log(strTransform("Hello"));


// return number half the length and rounded down

function halfIt(str) {
   return Math.floor( str.length / 2 );

}
console.log(halfIt("Hello World"));

// return first half of string

function stringSlice(str) {
    let middle = Math.floor( str.length / 2 ); 
    return str.slice( 0, middle )
}
console.log(stringSlice("Hello"));

// Capitalize first half and lower second half of string

function capilizeAndLowercase(str) {
    let middle = Math.floor( str.length / 2 ); 
    let strUpperCase =  str.slice(0, middle)
    let strLowerCase = str.slice(middle)
    return strUpperCase.toUpperCase() + strLowerCase.toLowerCase();
}

console.log( capilizeAndLowercase("Hello World") );

// Function that takes any string and capitlizes any charachter that follows a space
function capitalize(str) {
   let stringArray = str.split( " "); 
   let upperCaseWords = stringArray.map( word => word[0].toUpperCase() + word.slice(1) );
   return upperCaseWords.join(" ");
}
console.log( capitalize( "hey friends! practice practice practice!" ));