// array.some checks if atleast one element satisify the condition
// It return a boolean value

const array = [10,20,30,40,50,5,6,7];

const arrayItem = array.some(item =>{
    return item > 23;
});

console.log("Check if any element is >23:",arrayItem);
// It return a boolean value