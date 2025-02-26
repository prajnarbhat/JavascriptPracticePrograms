// Find atleast one number greater than 50

const numbers = [12, 35, 48, 23, 18];

const findOneNumber = numbers.find(num => {
    return num > 20;
})
console.log("One number greater than 20:",findOneNumber);

// Check if atleast one number greater than 20

const checkOneNumber = numbers.some(num => {
    return num > 20;
})
console.log("check One number greater than 20:",checkOneNumber);