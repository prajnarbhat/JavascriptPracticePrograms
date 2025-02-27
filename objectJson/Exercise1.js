// Calculate total salary of the object values

const object = {
    "Prajna" : 200,
    "poo" : 300,
    "ajay" : 500,
}


// Total salary

let values = Object.values(object);
let sum = 0;

for ( x of values ){
    sum = sum + x;
}
console.log("Sum of salary:",sum);