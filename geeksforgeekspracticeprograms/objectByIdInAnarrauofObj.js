// Print object by id in an array of object

let object = [
    { id: 1, name: "Alia" },
    { id: 2, name: "Dua" },
    { id: 3, name: "Raha" },
    { id: 4, name: "Charu" },
]

// ouptup we want an object whose id is 2: {id:2,name:Duo}

const objectIdTwo = object.filter(item => {
    return item.id == 2;
})
console.log("object of id=2:",objectIdTwo);

// To get the value present in that particulat id
// to get a single value we use find method in array of elements

const valueOfIdTwo = object.find(item => item.id == 2
)

console.log("value present in the particulat object id:",valueOfIdTwo);
console.log("value present in the particulat object id:",valueOfIdTwo["name"]);

