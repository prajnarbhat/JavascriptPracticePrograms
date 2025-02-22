let person = {
    key1 : "value1",
    key2 : "value2",
    key3 : "value3"
};

const personKeys = Object.keys(person);

console.log("Keys of the Objec:",personKeys);

personKeys.forEach(key => {
    let value = person[key]
    console.log(value);
})