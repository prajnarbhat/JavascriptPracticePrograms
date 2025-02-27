// array.map creates a new array by calling the function to every element of the array
// function(element,index,array)

const array = [1,2,3,4];

const arrayMult = array.map((item) =>{
    return item * 2;
});
console.log("Multipling array elements by 2 and creating a new array:",arrayMult);

const kvArray = [
    { key: 1, value: 10 },
    { key: 2, value: 20 },
    { key: 3, value: 30 },
  ];

// create a new array with key:value

const keyValueArray = kvArray.map(({key,value}) => {
    return ({ [key] : value })
})
console.log("Key value pair of the array:",keyValueArray);
//[ { '1': 10 }, { '2': 20 }, { '3': 30 } ]