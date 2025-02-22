// To check two numbers are approximately equal or not
// doubleEqual: It compares two variables after performing type conversion
// === : It compares two values without doing type conversion it will check both value and datattype

let num1 = 2;
let num2 = 3;

// console.log(num1 == num2);

const comapringValues = (num1,num2,epsilon) => {
    console.log("Aboslute value", Math.abs(num1 - num2))
    return Math.abs(num1 - num2) < epsilon;
}

console.log(comapringValues(10,10.3,0.005))