// Find the First Element That Satisfies a Custom Condition

// Given an array of numbers, find the first number whose sum of digits is greater than 10.

const numbers = [23, 89, 17, 56, 11];

function sumOfDigits(element,index,numbers){
    let sum = 0;
    while ( element > 0){
        r = element % 10;
        sum = sum + r;
        element = Math.floor(element / 10);
    }
    return sum;
}

const sumOfDigitsGreaterThanNum = numbers.find(num => sumOfDigits(num) > 10);

console.log("Sum of digits of an element greater than 10:",sumOfDigitsGreaterThanNum);