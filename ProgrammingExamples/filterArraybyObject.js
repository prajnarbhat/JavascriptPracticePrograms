const a = [
    { id: 1, name: "Alia" },
    { id: 2, name: "Dua" },
    { id: 3, name: "Raha" },
    { id: 4, name: "Charu" },
];

// We have an array that contains objects as its elements
// Filter the array elements that result in an array which contains an id 2

const filterdArrayElements = a.filter(element =>{
    return element.id == 2;
})
console.log("Array containing id 2:",filterdArrayElements)