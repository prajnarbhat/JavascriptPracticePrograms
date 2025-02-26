// Check all numbers are consecutive

const numbers = [5, 6, 12, 8, 9];

// Function to check numbers are consecutive

function checkconsecutiveNum (element,index,numbers) {
    if ( index == 0){
        return true;
    }
    else {
        return element > numbers[index-1];
    }
}

// Using every
const consecutiveNumbers = numbers.every(checkconsecutiveNum);
console.log("Check consecutive numbers:",consecutiveNumbers);

