//Filtering in array
// Take the input function which loops through each and every element of the array
// It returns an array which satisify the condition

const num = [ 1,2,3,4,5,6,7 ];

// Get all the odd numbers

const oddNum = num.filter((num) => {
    return num % 2 !== 0;
})
console.log("Odd numbers from an array:",oddNum);