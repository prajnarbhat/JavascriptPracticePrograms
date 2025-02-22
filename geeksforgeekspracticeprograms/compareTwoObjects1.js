// Comparing object keys and values
let p1 ={
    name : "prajna",
    age : 22,
    city : "sagar",
};
let p2 = {
    name : "prajna",
    age : 23,
    city : "sagar",
}

// for in loop to iterate through the key values of the object
function compareValues(p1,p2){
    for (key in p1){
        console.log("keys in p1:",key)
    
        //compare the values in p1 and p2
        if (p1[key] !== p2[key]){
            return false
        }
    }
    return true;
}
console.log("comparing objects:",compareValues(p1,p2));

