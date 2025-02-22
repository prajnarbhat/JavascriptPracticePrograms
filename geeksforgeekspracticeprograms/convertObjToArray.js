// Converting object to array of key value pairs
let employees = { name: "Tony Stark", department: "IT" };

array = [];

for (let i in employees){
    console.log(i)
    array.push([i,employees[i]])
}
console.log("Object to array:",array);

//The Object.entries() method is used to return an array consisting of enumerable property [key, value] pairs of the object which are passed as the parameter.

console.log(Object.entries(employees));

