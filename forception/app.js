var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"

function forception(arrayOne, arrayTwo) {
    let arrayThree = []; 

    for ( let i = 0; i < arrayOne.length; i++ ) {
        arrayThree.push(arrayOne[i] + ":")
        for ( let j = 0; j < 1; j++ ) {
            let arrayUpperCase =  arrayTwo.toUpperCase();
            let splitArr = arrayUpperCase.split('');
            arrayThree.push(splitArr);
            
        }
    }
   
   return arrayThree.join();
   
}

console.log(forception(people, alphabet));

