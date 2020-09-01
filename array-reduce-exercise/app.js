// 1. Turn array of numbers into a total of all numbers
function total(arr) {
    let ans = arr.reduce((final, num) => final += num);
    return ans;
}

// 2. console.log(total([1,2,3]));

// Turn array of numbers into long string of numbers
function stringConcat(arr) {
    let strCon = arr.reduce((final, num) => {
        final += num.toString();
        return final;
    })
    return strCon;
}

// console.log(stringConcat([1,2,3]));

// 3. Turn array of voter object into count of how many people voted
function totalVotes(arr) {
    let total = arr.reduce((final, user) => {
        if (user.voted) {
            final++;
        } 
        return final;
    }, 0)
    return total;
}

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];
// console.log(totalVotes(voters));

// 4. Figure out how much it would cost to buy everything at once
function shoppingSpree(arr) {
    let total = arr.reduce( (final, item) => {
            final += item.price;
            return final;
    }, 0)
    return total;
}

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

// console.log(shoppingSpree(wishlist));

// Turn array of arrays into a single array
function flatten(arr) {
    let oneArray = arr.reduce((final, singleArr ) => {
            final.push(...singleArr);
            return final;
    }, [])
    return oneArray;
}

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

// console.log(flatten(arrays));

// 5. return an object representing the results of the vote
function voterResults(arr) {
   let finalVotes = arr.reduce( (final, voter) => {
        if ( voter.age < 25 && voter.voted ) {
            final.numYoungVotes++;
           
            
        } 
        if ( voter.age <= 25 && voter.age >= 18 ) {
            final.numYoungPeople++;
            
        }  
        if ( voter.age <= 35 && voter.age >= 26 && voter.voted ) {
            final.numMidVotesPeople++;
            
        } 
        if ( voter.age >= 26 && voter.age <= 35  ) {
            final.numMidsPeople++;
            
        } 
        if ( voter.age >= 36 && voter.voted ) {
            final.numOldVotesPeople++;
            
        } 
        if ( voter.age >= 36 ) {
            final.numOldsPeople++;
            
        }
            return final;
    }, {
        numYoungVotes: 0,
        numYoungPeople: 0,
        numMidVotesPeople: 0,
        numMidsPeople: 0,
        numOldVotesPeople: 0,
        numOldsPeople: 0
    })
    return finalVotes;
}

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

console.log(voterResults(voters));