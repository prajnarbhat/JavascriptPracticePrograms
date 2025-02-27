// Json data format
// json data is used to pass information from client to server
// json data will be in the format of object


// get the object and convert the data to json format using stringify 

const objectData = {
    "name" : "Prajna",
    "age" : 20,
};

console.log("Object data:",objectData);

// output:  { name: 'Prajna', age: 20 }

// convert this object data to json data using stringify methos

const jsonData = JSON.stringify(objectData);
console.log("Json format of object data:",jsonData);

// output :  {"name":"Prajna","age":20}

// Again conver this json data to object data using parse
// syntax JSON.parse(jsondata)

const jsonToObject = JSON.parse(jsonData);
console.log("Json data from object data:",jsonToObject);