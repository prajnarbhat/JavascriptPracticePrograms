
const numbers = [1, 5, 3, 5, 7, 5, 9];

let count = 0;

const filterNumber = numbers.filter(item => {
    return item == 5;
})
console.log("Array of item 5:",filterNumber);
console.log("Length of the array gives number of times element occured:",filterNumber.length);

