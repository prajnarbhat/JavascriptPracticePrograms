// object is {key:value}
// array is [['name','prajna'],['age',20],['city','sagar]]
// it is a two dimension array [[][]]

// ooutput should be { 'name':'prajna','age':20,'city':'sagar'}

const array = [['name','prajna'],['age',20], ['city','sagar']];

//key:value

// create an empty obj
const obj = {};

for ( x in array ){
    console.log(x);
    const [key,value] = array[x];
    obj[key] = value;
}
console.log(obj)