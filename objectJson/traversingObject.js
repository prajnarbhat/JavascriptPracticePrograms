// Traversing through object properties

const object = {
    'name' : 'prajna',
    'age' : 20,
    'city' : 'sagra'
};

// for in loop
for ( key in object ){
    console.log("Keys:",key);
}

for ( key in object ){
    console.log("Key and object values:",key,object[key]);
} 

// 2nd way
console.log(Object.keys(object));
console.log(Object.values(object));

// for of loop
for ( key of Object.keys(object) ){
    console.log("keys in object:",key);
}