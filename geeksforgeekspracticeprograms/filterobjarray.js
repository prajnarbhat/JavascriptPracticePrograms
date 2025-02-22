// sc1:
let employees = [
    { name: "Tony Stark", department: "IT" },
    { name: "Peter Parker", department: "Pizza Delivery" },
    { name: "Bruce Wayne", department: "IT" },
    { name: "Clark Kent", department: "Editing" }
];

//we have this array of object we want to print or get only the name that is
// op: Bruce Wayne

const filterObjectFromArray = employees.filter((item) =>{
    return  item.department == "IT";
    
});

console.log("Print array whose department is IT:", filterObjectFromArray);
//op: It will two arrays which contains the department : "IT"
// [
//     { name: 'Tony Stark', department: 'IT' },
//     { name: 'Bruce Wayne', department: 'IT' }
//   ]

const findFirstElementWithDepIT = filterObjectFromArray.find(item => item.department == 'IT');
console.log("Find first name whose dep is IT:",findFirstElementWithDepIT["name"])

// But the output should be : 'Bruce Wayne'
for(let i = 0; i < filterObjectFromArray.length; i++){
    console.log(i);
    console.log(filterObjectFromArray[i].name);
    //filterObjectFromArray[0]= name:'tony... so.name='tony...'
}