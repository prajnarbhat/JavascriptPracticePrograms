// array.every :Check every element of the array satisify the condition

// It return a boolean value
const ages = [32, 33, 16, 40];

function checkAge(age){
    return age > 18;
}

const checkAgeOfPerson = ages.every(checkAge);

console.log("Check every element satisify condition:",checkAgeOfPerson);