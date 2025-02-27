// array.every check every elements satisisfy the condition
// It returns a boolean value

const array = [1,2,3,4,5,-6];

const arrayEvery = array.every(function(item){
    return item > 0;
})
console.log("check every element of array > 0:",arrayEvery);

// array.some, if one element satisify thae condition it return true
const arraySome = array.some(function(item){
    return item < 0;
})
console.log("Check if atleast one element satisify the condition:",arraySome);