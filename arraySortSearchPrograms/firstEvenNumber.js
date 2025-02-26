// Find the first even number

const numbers = [13, 7, 15, 24, 31, 42];

const findFirstEven = numbers.find(item => {
    return item % 2 == 0;
})
console.log("First even number:",findFirstEven);