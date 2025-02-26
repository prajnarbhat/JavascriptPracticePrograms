// Find all even numbers

const numbers = [10, 25, 36, 49, 52, 77, 80];

const findEvenNum = numbers.filter(item => {
    return item % 2 == 0;
})
console.log("Find all even numbers:",findEvenNum);