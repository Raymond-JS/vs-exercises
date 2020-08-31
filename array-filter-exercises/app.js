// return a new array that has only the numbers that are 5 or greater
function fiveAndGreaterOnly(arr) {
    let greaterNums = arr.filter(num => num > 5);
    return greaterNums;
}
console.log(fiveAndGreaterOnly([3, 6, 8, 2]));

//return a new array that only includes the even numbers.
function evensOnly(arr) {
    let evenNums = arr.filter(num => num % 2 === 0);
    return evenNums;
}
console.log(evensOnly([3, 6, 8, 2]));

//return a new array that only includes those strings that are 5 characters or fewer in length
function fiveCharactersOrFewerOnly(arr) {
    let ans = arr.filter(str => str.length <= 5);
    return ans;
}
console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"]));

// Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.
function peopleWhoBelongToTheIlluminati(arr) {
    let ansObj = arr.filter(obj => obj.member);
    return ansObj;
}
console.log(peopleWhoBelongToTheIlluminati([
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]));

//Filter people old enough to see The Matrix
function ofAge(arr) {
    let eighteenPlus = arr.filter(obj => {
        if (obj.age >= 18) {
            return obj;
        }
    })
    return eighteenPlus;
}

console.log(ofAge([
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
])); 