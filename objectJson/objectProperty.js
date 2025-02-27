// creating an object with properties

const object = {
    name : "Prajna",
    age : 40,
    city : "Sagra",
};

console.log("Object is:",object);

// Displaying the property of an object
console.log("Getting name property of an object:",object.name);
console.log("Getting name property of an object:",object['name']);


// Updating property of an object
object [ 'hobby' ] = "dancing";
object.course = "Detascience";

console.log("Updated object:",object);

// Diffrence between [] and .
object.course = "CS";
//  ._1course will give an error
object['12_phone'] = 8312341234134;
console.log(object);

// deleting the property of an object
delete object.age;
console.log("Deleting age property:",object);

