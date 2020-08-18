// Arrays For Exercises:
var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];


function arrayOperator( arr1, arr2 ){ 
    // Remove last item from veg array:
    arr2.pop();
    console.log("fruit: ", fruit);
    console.log("vegetables: ", vegetables);

    // Remove first item from fruit array:
    arr1.shift();
    console.log("fruit: ", fruit);
    console.log("vegetables: ", vegetables);

    // Find Index Of Orange:
    let orangeIndex = arr1.indexOf("orange");
    console.log(orangeIndex);

    // Add Orange Index To End Of Fruit Array:
    arr1.push(orangeIndex);
    console.log("fruit: ", fruit);
    console.log("vegetables: ", vegetables);

    // Find length of veggie array:
    let veggieLength = arr2.length;
    console.log("fruit: ", fruit);
    console.log("vegetables: ", vegetables);

    // Add Veggie Length to end of fruit Array:
    arr2.push(veggieLength);
    console.log("fruit: ", fruit);
    console.log("vegetables: ", vegetables);

    // Combine the two arrays. Fruit first:
    let food = arr1.concat(arr2);
    console.log(typeof food);

    // Remove two elements starting at index 4:
    food.splice(4, 2);
    console.log(food);


    //  Reverse the array
    food.reverse();
    console.log(food);
    // return final string
    return food.toString();
}

console.log(arrayOperator(fruit, vegetables ));