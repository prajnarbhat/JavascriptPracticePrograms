// Copying the object properties to another object

const user = {
    'name' : 'Prajna',
    'age' : 20,
    'city' : 'sagra',
}

// Copying all the properties of the object to another object userCopied

const userCopied = {};
userCopied.name = user.name;
userCopied.age = user.age;

console.log("Get copies user object:",userCopied);

// Using for loop method

const userCopied2 = {}

for ( x in user ){
    console.log("Key and values:",x,user[x]);
    userCopied2[x] = user[x];
}
console.log("Properties copied using for loop:",userCopied2);

// Using assign method
// syntax : Object.assign({},user)
// Object.assign(create an empty array,which object to be copied)

const copiedUser = Object.assign({},user);
console.log("Copying the properties using asign method:",copiedUser);