// array.filter used to find all the elements in the array which satisify the condition
// It return an array 

let arrayOfobject = [
    { id : 2, name : 'prajna'},
    { id : 3, name : 'pruthvi'},
    { id : 4 , name : 'prajna'},
    { id : 5 , name : 'arya'},
    {id : 6 , name : 'prajna'}
];
// filter all values where name : 'prajna'
const filterByName = arrayOfobject.filter(item =>{
    return item.name == 'prajna';
});

console.log("Filter values where name is prajna:",filterByName);