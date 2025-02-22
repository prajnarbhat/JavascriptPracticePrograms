const object = {  book: "Sherlock Holmes",
    author: "Arthur Conan Doyle",
    genre: "Mystery"
}

for ( let x in object ){
    const key = x;
    const value = object[x];
    console.log([key,value]);
}

const keys = Object.entries(object);
console.log("key and values of an object in arrayformat:",keys);

//op:
//keys of object: [
//     [ 'book', 'Sherlock Holmes' ],
//     [ 'author', 'Arthur Conan Doyle' ],
//     [ 'genre', 'Mystery' ]
//   ]
  

const keyValueOfObject = keys.map( item => {
    console.log("individual array of an object array:",item);
    const key = item[0];
    const value = item[1];
    console.log("key and value of array:",key,value);
})

