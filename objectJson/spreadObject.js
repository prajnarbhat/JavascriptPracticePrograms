// spread in object is used copying merging and modifying the object

// Used to copy an object
const obj = { "name" : "prajna"}
console.log("Used to copy an object:",{...obj});

// It overides the value if two keys has the same value

const obj1 = { "name" : "Prajna" , "age" : 20}
const obj2 = { "name" : "Prajna1" , "age" : 30}
const copyObjects = { ...obj1 , ...obj2 };

// It overides the value if two keys has the same value

console.log("Copy of objects:",copyObjects);

const obj3 = { a: 1, b: 2 };
const obj4 = { b: 3, c: 4 };
console.log("It overides the b values by a new values:",{ ...obj3,...obj4});

// Used to merge two objects:
const obj5 = { a: 1, b: 2 };
const obj6 = { d: 3, c: 4 };

console.log("Merge two objects:",{ ...obj5, ...obj6});

// We can add new properties or update existing ones.
const user = { name : "John" , "age" : 20}
const updateUser = { ...user , "age" : 30 , "city" : "Bangalore" }
console.log("Update existing object and add property to the object:",updateUser);