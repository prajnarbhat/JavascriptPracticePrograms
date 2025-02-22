// Replacing the name of the multiple object keys
let person = {
    key1 : "value1",
    key2 : "value2",
    key3 : "value3",
};

// Keys of he object
const objectKeys = Object.keys(person)
console.log("keys of the object:",objectKeys);

let renameOjectKey = (person) =>{
    person.renamekey1 = person.key1;
    person.renamekey2 = person.key2;
    delete person.key1;
    delete person.key2;
}

renameOjectKey(person);
console.log("Renaming keys of the object:",person)

