var readline = require('readline-sync');
var input = readline.question('What phrase would you like to encrypt? ').toLowerCase();
var shift = parseInt(readline.question('How many letters would you like to shift? '));

const alphabet = [ "a"," b","c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m","n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "a"," b","c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m","n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const phrase = input.split(" "); //splitting the input at any space.


// loop through the phrase and match the letter with the letter in alphabet and then move up the alphabet the amount of times designated in shift.

    let newPhrase = phrase.map((word) => {
                            const newPhrase = [];
                            let letters =  word.split(''); //splitting each word by letter
                             //looping through each letter of the word and checking it against the alphabet
                            for (let i = 0; i < letters.length; i++) {
                                if (letters[i].toUpperCase() != letters[i].toLowerCase()) { 
                                for (let j = 0; j < alphabet.length - 26; j++) {
                                    if (letters[i] === alphabet[j]) {
                                        let location = alphabet.indexOf(alphabet[j]); //numerical location in alphabet
                                        location += shift; // adding the shift amount
                                        newPhrase.push(alphabet[location]); //pushing the letter into our empty array.
                                    } 
                                }
                            } else {
                                newPhrase.push(letters[i]); // if it's not a letter leave it
                            }
                            } 
                            return newPhrase.join(" "); //joining the array before returning
                            })
                        
newPhrase = newPhrase.toString(); // turning the array obj into a string
let obsfucated = newPhrase.split(" ").join(''); // removing space.
 obsfucated = obsfucated.replace(/,/g, " "); // using regex to replace any commas
console.log(`Your encrypted message is: ${obsfucated}`);


