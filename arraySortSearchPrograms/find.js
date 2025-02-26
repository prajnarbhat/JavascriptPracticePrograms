// array.find search for element in array.It return a first matching element

let array = [10,11,12,13,12,13,13];

const firstMatchingElement = array.find(item =>{
    return item == 12;
})
console.log("Find the first matching element:",firstMatchingElement);

// In case of object
const object = [
    { id : 1 , place : 'banglore'},
    { id : 2 , place : 'mysore'},
    { id : 2 , place : 'Delhi'},
];

const firstMatchingObject = object.find(item =>{
    return item.id == 2;
})
console.log("Find the first matching element in the array of object:",firstMatchingObject);