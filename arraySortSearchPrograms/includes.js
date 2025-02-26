// includes methos search for an particular item in an array and returns a boolean value

let array = [1,2,3,4,4,4,5,6,7];

let arrayIncludeTheElement = array.includes(4);

console.log("Check if the element is present in array:",arrayIncludeTheElement);

let arrayNotIncludeTheElement = !array.includes(4);

console.log("Check if the element is not present in array:",arrayNotIncludeTheElement);

